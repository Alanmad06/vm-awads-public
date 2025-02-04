import { createUser } from "@/lib/db/createUser";
import { deleteCode } from "@/lib/db/verification_codes/deleteCode";
import getCode from "@/lib/db/verification_codes/getCode";

export async function POST(request : Request) {
    try {
      const { email, code ,name,password} = await request.json();
      if (!email || !code || !name || !password) return new Response("Datos incompletos", { status: 400 });
  
     
      const codeDB = await getCode(email)
     
  
      if (!codeDB|| codeDB.expires_at.getTime() < Date.now()) {
        return new Response("Código expirado o no válido", { status: 400 });
      }
  
      if (codeDB.code !== code) {
        return new Response("Código incorrecto", { status: 400 });
      }
  
      
      await deleteCode(email)
      await createUser(email,name,password)
  
      return new Response("Email verificado correctamente", { status: 200 });
    } catch (error) {
      return new Response("Error verificando el código", { status: 500 });
    }
  }
  