import { pool } from "../db/db.js";
import { pool } from "../db/db.js";

export const ping = async (req, res) => {
  const [result] = await pool.query("SELECT 'pong'");
  res.json(result[0]);
};