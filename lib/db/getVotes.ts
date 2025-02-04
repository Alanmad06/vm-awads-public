import { QueryResult } from "pg"
import { pool } from "./db"

type Votes ={
  votes : {}
}

export async function getVotes(id:string) : Promise<Votes | undefined>{
    const db = await pool.connect()
    try{
        
      const result : QueryResult<Votes> = await db.query('SELECT votes FROM users_votes WHERE user_id = ($1)',[id])
    
      return(result.rows[0])
  
    }catch(e){
     
     return undefined
    }finally{
      db.release();
    }
  
  }