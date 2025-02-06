
import { QueryResult } from "pg"
import { pool } from "../db"
import { sendVerificationEmail } from "@/lib/email";
import { verificationCode } from "@/interfaces/candidates";

export async function createCode(email: string): Promise<verificationCode> {
    const db = await pool.connect()
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    try {
        await sendVerificationEmail(email, code);
        const result: QueryResult<verificationCode> = await db.query("INSERT INTO verification_codes (email, code, expires_at) VALUES ($1, $2, NOW() + INTERVAL '10 minutes')",
            [email, code])
        return result.rows[0]

    } catch (e) {
        console.error(e)
        return {}
    } finally {
        db.release();
    }

}