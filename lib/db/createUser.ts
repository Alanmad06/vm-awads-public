
import { QueryResult } from "pg"
import { pool } from "./db"
import { User } from "@/interfaces/candidates"
import { hash } from "bcryptjs"

export async function createUser(email:string , name : string , password : string | undefined ) : Promise<User | undefined>{
    const db = await pool.connect()
    try{
       
        if(password){
            const hashPassword = await hash(password,10)
           const result : QueryResult<any> = await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',[name,email,hashPassword])
            return(result.rows[0])
        }else{
            const result : QueryResult<any> = await db.query('INSERT INTO users (name, email) VALUES ($1, $2)',[name,email])
             return(result.rows[0])
        }
       
      
  
    }catch(e){
     console.error(e)
     return 
    }finally{
      db.release();
    }
  
  }

  export async function createUserWIithID(id:string,email:string , name : string , password : string | undefined ) : Promise<User | undefined>{
    const db = await pool.connect()
    try{
       
        console.log("IDDDDD",id)
        if(password){
            const hashPassword = await hash(password,10)
           const result : QueryResult<any> = await db.query('INSERT INTO users (id,name, email, password) VALUES ($1, $2, $3,$4)',[id,name,email,hashPassword])
            return(result.rows[0])
        }else{
            const result : QueryResult<any> = await db.query('INSERT INTO users (id,name, email) VALUES ($1, $2,$3)',[id,name,email])
             return(result.rows[0])
        }
       
      
  
    }catch(e){
     console.error(e)
     return 
    }finally{
      db.release();
    }
  
  }