import { Pool } from 'pg'; // Postgres client library

const connectionString = process.env.DATABASE_URL; // Replace with your connection string

const pool: Pool = new Pool({ connectionString });

export default pool;


