import pg from 'pg'
/* import { config } from '../config'; */
const { Pool } = pg;
export const createDatabase = async () => {
  const pool = new Pool({
    host: "0.0.0.0",
    database: ,
    user: "admin",
    password: "password",
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: { rejectUnauthorized: false },
  });
  return await pool.connect();
};