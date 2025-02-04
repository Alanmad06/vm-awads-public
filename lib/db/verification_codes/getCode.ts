import { QueryResult } from "pg";
import { pool } from "../db";
import { verificationCode } from "@/interfaces/candidates";

export default async function getCode(email: string) {
  const db = await pool.connect();
  try {
    const result: QueryResult<verificationCode> = await db.query(
      "SELECT * FROM verification_codes WHERE email = ($1)",
      [email]
    );
    return result.rows[0];
  } catch (e) {
    console.error(e);
    return;
  } finally {
    db.release();
  }
}
