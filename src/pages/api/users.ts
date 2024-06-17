import { NextApiRequest, NextApiResponse } from "next";
import bcrypt, { compare } from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import { ExtendedApiRequest } from "../../../global";
import pool from "../../../utils/base_conn";
import sendEmail from "../../../utils/email";
import { headers } from "next/headers";
import { verifyToken } from "../../../utils/authMiddleware";

const saltRounds = 10;
const secretKey: Secret = process.env.JWT_SECRET as string;

export default async function handler(
  req: ExtendedApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      if (req.body.action === "user-team") {
        return getTeamsInfo(req, res);
      } else {
        return res.status(400).json({ error: 'Invalid action' });
      }
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}

async function getTeamsInfo(req: ExtendedApiRequest, res: NextApiResponse) {
  const { authorization } = req.headers;
  const userId = verifyToken(authorization);

  if(!userId) {
    return res.status(400).json({ error: "Invalid auth token" });
  }

  // Hash password
  const client = await pool.connect();

  try {
    const query = `
      SELECT 
        t.id AS team_id,
        t.team_name,
        t.available_credits,
        t.current_number_of_members,
        r.role_name
      FROM 
        Teams t
      JOIN 
        Team_members tm ON t.id = tm.team_id
      JOIN 
        Roles r ON tm.role_id = r.id
      WHERE 
        tm.user_id = $1;
    `;
    const response = await client.query(
      query,
      [userId]
    );

    if(response.rows[0].team_id) {
      return res.status(200).json({ message: 'Team created successfully', data: {
        teamData: response.rows
      } });

    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
