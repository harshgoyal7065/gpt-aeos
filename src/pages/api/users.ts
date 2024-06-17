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
      return getTeamsInfo(req, res);
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}

async function getTeamsInfo(req: ExtendedApiRequest, res: NextApiResponse) {
  const { authorization } = req.headers;
  const userId = verifyToken(authorization);

  if (!userId) {
    return res.status(400).json({ error: "Invalid auth token" });
  }

  // Hash password
  const client = await pool.connect();

  try {
    const query = `
SELECT
  u.name AS user_name,
  u.email AS user_email,
  json_agg(
    json_build_object(
      'team_id', td.id,
      'team_name', td.team_name,
      'available_credit', td.available_credit,
      'current_number_of_members', td.current_number_of_members,
    )
  ) AS teamData
FROM users u
JOIN team_members tm ON u.id = tm.user_id
JOIN teams td ON tm.team_id = td.id
WHERE u.id = $1
GROUP BY u.id, u.name, u.email;
`
    const response = await client.query(query, [userId]);

    if (response.rows[0].user_name) {
      return res.status(200).json({
        message: "User data fetched successfully",
        data: {
          userData: response.rows,
        },
      });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
