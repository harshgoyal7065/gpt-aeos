import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt, { compare } from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import { ExtendedApiRequest } from '../../../global';
// import { db } from '../../../utils/base_conn';
import { neon } from '@neondatabase/serverless';
import pool from '../../../utils/base_conn';
import sendEmail from '../../../utils/email';

const saltRounds = 10;
const secretKey: Secret = process.env.JWT_SECRET as string;

export default async function handler(req: ExtendedApiRequest, res: NextApiResponse) {
  const { method, body } = req;

    switch (method) {
      case 'POST':
        if (body.action === 'signup') {
          return handleSignup(req, res);
        } else if (body.action === 'signup-confirmation'){
          return sendConfirmationCode(req, res);
        } else if (body.action === 'signin') {
          return handleSignin(req, res);
        } else {
          return res.status(400).json({ error: 'Invalid action' });
        }
      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
}

const checkIfUserExists = async (email: string) => {
  const client = await pool.connect();

  const alreadyPresentUser = await client.query(`SELECT * FROM Users WHERE email = $1`, [email]);
  return !!alreadyPresentUser.rows[0];
}

async function sendConfirmationCode(req: ExtendedApiRequest, res: NextApiResponse) {
  const { email, token } = req.body;

  // Hash password
  try {
    const isUserExist = await checkIfUserExists(email);

    if(isUserExist) {
      return res.status(400).json({ message: 'User already exists' });
    }

    await sendEmail(
      email,
      token,
    );

    res.status(200).json({ message: 'Email Sent successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleSignup(req: ExtendedApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.body;

  // Hash password
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const client = await pool.connect();

  try {
    const isUserExist = await checkIfUserExists(email);

    if(isUserExist) {
      return res.status(400).json({ message: 'User already exists' });
    }

    await sendEmail(
      "harshgoyalsde@gmail.com",
      "1234",
    );

    const response = await client.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id",
      [name, email, hashedPassword]
    );

    const token = generateToken(response.rows[0].id);

    res.status(200).json({ message: 'User created successfully', data: {
      name,
      email,
      id: response.rows[0].id,
      token
    } });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleSignin(req: ExtendedApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const client = await pool.connect();

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Use the db client object for database interaction
    const user = await client.query(`SELECT * FROM Users WHERE email = $1`, [email]);

    if (!user.rows[0]) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare hashed passwords
    const passwordMatch = await bcrypt.compare(password, user.rows[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken(user.rows[0].id);

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error signing in user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

function generateToken(userId: number): string {
  return jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
}
