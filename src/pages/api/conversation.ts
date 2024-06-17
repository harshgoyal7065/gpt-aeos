import { NextApiResponse } from "next";
import { ExtendedApiRequest } from "../../../global";
import pool from "../../../utils/base_conn";

export default async function handler(req: ExtendedApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return handleCreateConversationThread(req, res);
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

async function handleCreateConversationThread(req: ExtendedApiRequest, res: NextApiResponse) {
    const { conversation_title, team_id } = req.body;

    if (!conversation_title || !team_id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const client = await pool.connect();
      const query = `
          INSERT INTO conversation (conversation_title, team_id)
          VALUES ($1, $2)
          RETURNING *;
        `;
      const values = [conversation_title, team_id];
      const result = await client.query(query, values);
      client.release();

      return res.status(200).json({ conversation: result.rows[0] });
    } catch (error) {
      console.error("Error inserting conversation:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
}
