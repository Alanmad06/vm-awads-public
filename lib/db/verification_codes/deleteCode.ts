
import { QueryResult } from "pg"
import { pool } from "../db"

export async function deleteCode(email: string): Promise<QueryResult>{
    const db = await pool.connect()
    try{
      const result : QueryResult = await db.query("DELETE FROM verification_codes WHERE email = ($1)",
            [email])
      return(result.rows[0])
  
    }catch(e){
     console.error(e)
     return { rows: [] } as unknown as QueryResult
    }finally{
      db.release();
    }
  
  }