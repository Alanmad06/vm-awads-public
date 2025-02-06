import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function POST(request: Request) {
  try {
    const {email , password} = await request.json();
    
    await signIn("credentials", {
      email ,
      password,
      redirect:false
    });

    return new Response(
      JSON.stringify({ message: "Credenciales validas" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
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
    
    
    return new Response(
      JSON.stringify({ error: "Error Desconocido" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
