
import { QueryResult } from "pg"
import { pool } from "../db"

export async function deleteCode(email : string ) : Promise<any>{
    const db = await pool.connect()
    try{
      const result : QueryResult<any> = await db.query("DELETE FROM verification_codes WHERE email = ($1)",
            [email])
      return(result.rows[0])
  
    }catch(e){
     console.error(e)
     return 
    }finally{
      db.release();
    }
  
  }