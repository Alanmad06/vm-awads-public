
import { QueryResult } from "pg"
import { pool } from "./db"
import { User } from "@/interfaces/candidates"
import { hash } from "bcryptjs"

export async function createUser(email:string , password : string | undefined ) : Promise<User | undefined>{
    const db = await pool.connect()
    try{
       
        if(password){
            const hashPassword = await hash(password,10)
           const result : QueryResult<any> = await db.query('INSERT INTO users (email, password) VALUES ($1, $2)',[,email,hashPassword])
            return(result.rows[0])
        }else{
            const result : QueryResult<any> = await db.query('INSERT INTO users (email) VALUES ($1, $2)',[email])
             return(result.rows[0])
        }
       
      
  
    }catch(e){
     console.error(e)
     return 
    }finally{
      db.release();
    }
  
  }

 /*  export async function createUserWIithID(id:string,email:string  , password : string | undefined ) : Promise<User | undefined>{
    const db = await pool.connect()
    try{
       
        console.log("IDDDDD",id)
        if(password){
            const hashPassword = await hash(password,10)
           const result : QueryResult<any> = await db.query('INSERT INTO users (id, email, password) VALUES ($1, $2, $3)',[id,email,hashPassword])
            return(result.rows[0])
        }else{
            const result : QueryResult<any> = await db.query('INSERT INTO users (id, email) VALUES ($1, $2)',[id,email])
             return(result.rows[0])
        }
       
      
  
    }catch(e){
     console.error(e)
     return 
    }finally{
      db.release();
    }
  
  } */