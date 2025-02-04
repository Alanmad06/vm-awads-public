
import { QueryResult } from "pg"
import { pool } from "./db"

export async function getVerified(id:string) : Promise<Boolean | undefined>{
    const db = await pool.connect()
    try{
      const result : QueryResult<Boolean> = await db.query('SELECT verified FROM users WHERE id = ($1)',[id])
      return(result.rows[0])
  
    }catch(e){
     console.error(e)
     return 
    }finally{
      db.release();
    }
  
  }