
import { QueryResult } from "pg"
import { pool } from "../db"

export async function createCode(email : string , code : string) : Promise<any>{
    const db = await pool.connect()
    try{
      const result : QueryResult<any> = await db.query("INSERT INTO verification_codes (email, code, expires_at) VALUES ($1, $2, NOW() + INTERVAL '10 minutes')",
            [email, code] )
      return(result.rows[0])
  
    }catch(e){
     console.error(e)
     return 
    }finally{
      db.release();
    }
  
  }