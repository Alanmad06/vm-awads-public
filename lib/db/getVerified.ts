
import { QueryResult } from "pg"
import { pool } from "./db"

export async function getVerified(id:string) : Promise<boolean | undefined>{
    const db = await pool.connect()
    try{
      const result : QueryResult<{ verified: boolean }> = await db.query('SELECT verified FROM users WHERE id = ($1)',[id])
      return(result.rows[0] ? true : false)
  
    }catch(e){
     console.error(e)
     return 
    }finally{
      db.release();
    }
  
  }