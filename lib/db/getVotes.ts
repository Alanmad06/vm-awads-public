import { QueryResult } from "pg"
import { pool } from "./db"

type Votes ={
  votes : object
}

export async function getVotes(email:string) : Promise<Votes | undefined>{
    const db = await pool.connect()
   
    try{
        
      const result : QueryResult<Votes> = await db.query('SELECT votes FROM users_votes WHERE email = ($1)',[email])
    
      return(result.rows[0])
  
    }catch(e){
      console.error(e)
     
     return undefined
    }finally{
      db.release();
    }
  
  }