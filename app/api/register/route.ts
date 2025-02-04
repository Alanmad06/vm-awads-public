

import { createUser } from "@/lib/db/createUser";
import { createCode } from "@/lib/db/verification_codes/createCode";
import { registerSchema } from "@/lib/schemas/authSchemas";
import { NextResponse } from "next/server";



export async function POST(request : Request){

   
    try{
      const {name , email , password, confirmPassword} = await request.json()
      if(password !==confirmPassword){
        return NextResponse.json({ error: "Contraseñas no coinciden" }, { status: 400 });
      }
      const parsedCrendials = registerSchema.safeParse({name,email,password})
      if(!parsedCrendials.success){
        const message = parsedCrendials.error.errors[0].message
      
        return NextResponse.json({ error: message }, { status: 400 });
      }
      if (!name || !email || !password) {
        return NextResponse.json(
          { error: "Campos requeridos faltantes" },
          { status: 400 }
        );
      }
     
      await createCode(email)
      await createUser(email,name,password)
      
      return NextResponse.json({ message: "Usuario registrado correctamente" });
  
    }catch(e: unknown){
        console.error(e);
        if (e instanceof Error && 'code' in e && e.code === '23505') { 
          return NextResponse.json({ error: "Usuario ya existente" }, { status: 400 });
        }
        const errorMessage = e instanceof Error ? e.message : 'Error desconocido';
        return NextResponse.json({ error: `Error al registrar el usuario: ${errorMessage}` }, { status: 500 });
    }
  
  }