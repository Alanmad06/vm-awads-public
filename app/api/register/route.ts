import { pool } from "@/lib/db/db";
import { registerSchema } from "@/lib/schemas/authSchemas";
import {  hash } from "bcryptjs";

import { NextResponse } from "next/server";
import { QueryResult } from "pg";


export async function POST(request : Request){

    const db = await pool.connect()
    try{
      const {name , email , password, confirmPassword} = await request.json()
      if(password !==confirmPassword){
        return NextResponse.json({ error: "Contraseñas no coinciden" }, { status: 400 });
      }
      const parsedCrendials = registerSchema.safeParse({name,email,password})
      if(!parsedCrendials.success){
        const message = parsedCrendials.error.errors[0].message
        console.log('ppsad',message)
        return NextResponse.json({ error: message }, { status: 400 });
      }
      if (!name || !email || !password) {
        return NextResponse.json(
          { error: "Campos requeridos faltantes" },
          { status: 400 }
        );
      }
     
      const hashPassword = await hash(password,10)
      const result : QueryResult<any> = await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',[name,email,hashPassword])
      console.log(result)
      return NextResponse.json({ message: "Usuario registrado correctamente" });
  
    }catch(e: unknown){
        console.error(e);
        if (e instanceof Error && 'code' in e && e.code === '23505') { // Unique violation error code in PostgreSQL
          return NextResponse.json({ error: "Usuario ya existente" }, { status: 400 });
        }
        const errorMessage = e instanceof Error ? e.message : 'Error desconocido';
        return NextResponse.json({ error: `Error al registrar el usuario: ${errorMessage}` }, { status: 500 });
    }finally{
      db.release();
    }
  
  }