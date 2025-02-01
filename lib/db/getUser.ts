
import { QueryResult } from "pg"
import { pool } from "./db"
import { User } from "@/interfaces/candidates"

export async function getUser(email:string) : Promise<User | undefined>{
    const db = await pool.connect()
    try{
      const result : QueryResult<User> = await db.query('SELECT * FROM users WHERE email = ($1)',[email])
      return(result.rows[0])
  
    }catch(e){
     console.error(e)
     return 
    }finally{
      db.release();
    }
  
  }