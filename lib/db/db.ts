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





