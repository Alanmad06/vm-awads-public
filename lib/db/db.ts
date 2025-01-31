import { selectedCandidate, User } from '@/interfaces/candidates';
import { Pool, QueryResult } from 'pg';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const pool = new Pool({

  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl:true
});



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

