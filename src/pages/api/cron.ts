import { NextApiResponse } from "next";
import { ExtendedApiRequest } from "../../../global";
import pool from "../../../utils/base_conn";

export default async function handler(req: ExtendedApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    await client.query('UPDATE teams SET available_credit = 10');

    res.status(200).json({ message: 'Credits updated successfully' });
  } catch (error) {
    console.error('Error updating credits:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
