import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt, { compare } from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import { ExtendedApiRequest } from '../../../global';
// import { db } from '../../../utils/base_conn';
import pool from '../../../utils/base_conn';
import sendEmail from '../../../utils/email';
import { headers } from 'next/headers';
import { verifyToken } from '../../../utils/authMiddleware';

const saltRounds = 10;
const secretKey: Secret = process.env.JWT_SECRET as string;

export default async function handler(req: ExtendedApiRequest, res: NextApiResponse) {
  const { method } = req;

    switch (method) {
      case 'POST':
        if (req.body.action === 'team') {
          return handleCreateTeam(req, res);
        }
      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
}


async function handleCreateTeam(req: ExtendedApiRequest, res: NextApiResponse) {
  const { teamName } = req.body;
  const headersList = headers();
  const authToken = headersList.get('Authorization')
  const userId = verifyToken(authToken);

  if(!userId) {
    return res.status(400).json({ error: "Invalid auth token" });
  }

  // Hash password
  const client = await pool.connect();

  try {
    const response = await client.query(
      "INSERT INTO teams (team_name, current_number_of_members, available_credit) VALUES ($1, $2, $3) RETURNING id",
      [teamName, 1, 10]
    );

    const teamId = response.rows[0].id;

    if(teamId) {
        const response = await client.query(
            "INSERT INTO team_members (team_id, user_id, role_id) VALUES ($1, $2, $3) RETURNING id",
            [teamId, userId, 1]
        );

        return res.status(200).json({ message: 'Team created successfully', data: {
            teamId
          } });
    }
    res.status(400).json({ error: 'Team was not created' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
