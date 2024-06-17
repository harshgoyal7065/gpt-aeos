import { NextApiResponse } from "next";
import { ExtendedApiRequest } from "../../../global";
import pool from "../../../utils/base_conn";

export default async function handler(
  req: ExtendedApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      return handleCreateQuestionAnswer(req, res);
    case "GET":
      return getQuestionAnswerOfConversation(req, res);
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}

async function handleCreateQuestionAnswer(
  req: ExtendedApiRequest,
  res: NextApiResponse
) {
  const { question, answer, conversation_id, team_id } = req.body;

  if (!question || !answer || !conversation_id || !team_id) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // Insert question and answer into question_answer table
    const insertQAQuery = `
        INSERT INTO conversation_details (question, answer, conversation_id)
        VALUES ($1, $2, $3)
        RETURNING *;
      `;
    const insertQAValues = [question, answer, conversation_id];
    const qaResult = await client.query(insertQAQuery, insertQAValues);

    // Decrement available_credit in Teams table
    const decrementCreditQuery = `
        UPDATE Teams
        SET available_credit = available_credit - 1
        WHERE id = $1
        RETURNING *;
      `;
    const decrementCreditValues = [team_id];
    const teamResult = await client.query(
      decrementCreditQuery,
      decrementCreditValues
    );

    await client.query("COMMIT");

    return res.status(201).json({
      question_answer: qaResult.rows[0],
      team: teamResult.rows[0],
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error handling transaction:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    client.release();
  }
}

async function getQuestionAnswerOfConversation(
  req: ExtendedApiRequest,
  res: NextApiResponse
) {
  const { conversation_id } = req.query;

  if (!conversation_id) {
    return res.status(400).json({ error: "Missing conversation_id parameter" });
  }

  try {
    const client = await pool.connect();

    const query = `
        SELECT *
        FROM conversation_details
        WHERE conversation_id = $1;
      `;
    const values = [conversation_id];
    const result = await client.query(query, values);

    client.release();

    return res.status(200).json({ question_answers: result.rows });
  } catch (error) {
    console.error("Error fetching question answers:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
