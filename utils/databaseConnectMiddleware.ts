// import { NextApiResponse } from 'next';
// import pool from './base_conn';
// import { ExtendedApiRequest } from '../global';

// export default async function databaseConnectMiddleware(req: ExtendedApiRequest, res: NextApiResponse, next: Function) {
//   try {
//     const client = await pool.connect();
//     req.db = client; // Attach the client object to the request object
//     await next(); // Call the next middleware or route handler
//   } catch (error) {
//     console.error('Error connecting to database:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   } finally {
//     // Always release the client object even if there's an error
//     if (req.db) await req.db.release();
//   }
// }
