import { pool } from "@/lib/db/db";
import {  hash } from "bcryptjs";

import { NextResponse } from "next/server";


export async function POST(request : Request){

    const db = await pool.connect()
    try{
      const {name , email , password} = await request.json()
      if (!name || !email || !password) {
        return NextResponse.json(
          { error: "Required fields are missing" },
          { status: 400 }
        );
      }
      console.log(name,email,password)
      const hashPassword = await hash(password,10)
      const result = await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',[name,email,hashPassword])
      console.log(result)
      return NextResponse.json({ message: "Usuario registrado correctamente" });
  
    }catch(e){
        console.error(e)
        return NextResponse.json({ error: "Error al registrar el usuario" }, { status: 500 });
    }finally{
      db.release();
    }
  
  }