import mysql from 'mysql2/promise';
import env from '../config/env.js';

export const pool = mysql.createPool({
  host: env.db_host,
  port: env.db_port,
  user: env.db_user,
  password: env.db_password,
  database: env.db_database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const testConnection = async () => {
  const connection = await pool.getConnection();
  connection.release();
};
