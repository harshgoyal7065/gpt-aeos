import { NextApiRequest, NextApiResponse } from "next";
import bcrypt, { compare } from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import { ExtendedApiRequest } from "../../../global";
import pool from "../../../utils/base_conn";
import sendEmail from "../../../utils/email";
import { headers } from "next/headers";

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
      }
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}

async function getTeamsInfo(_req: ExtendedApiRequest, res: NextApiResponse) {
  const headersList = headers();
  const authToken = headersList.get('Authorization')

  const userId = (jwt.verify(authToken as string, process.env.JWT_SECRET as string) as any).id;

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

    console.log(response);
    // const teamId = response.rows[0].id;

    // if (teamId) {
    //   const response = await client.query(
    //     "INSERT INTO team_members (team_id, user_id, role_id) VALUES ($1, $2, $3) RETURNING id",
    //     [teamId, userId, 1]
    //   );

    //   return res.status(200).json({
    //     message: "Team created successfully",
    //     data: {
    //       teamId,
    //     },
    //   });
    // }
    res.status(400).json({ error: "Team was not created" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
