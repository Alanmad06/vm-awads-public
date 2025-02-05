import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function GET() {
  try {
    
    
    await signIn("google",{
        redirectTo :'/'
    });

   
  } catch (error) {
    
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return new Response(
            JSON.stringify({ error: "Credenciales Invalidas" }),
            {
              status: 401,
              headers: { "Content-Type": "application/json" },
            }
          );
        default:
          return new Response(
            JSON.stringify({ error: "Error desconocido" }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
      }
    }
    
    
    throw error
  }
}
