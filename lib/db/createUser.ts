
import { QueryResult } from "pg"
import { pool } from "./db"
import { User } from "@/interfaces/candidates"
import { hash } from "bcryptjs"

export async function createUser(email:string , name : string , password : string) : Promise<User | undefined>{
    const db = await pool.connect()
    try{
       const hashPassword = await hash(password,10)
       const result : QueryResult<any> = await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',[name,email,hashPassword])
      return(result.rows[0])
  
    }catch(e){
     console.error(e)
     return 
    }finally{
      db.release();
    }
  
  }