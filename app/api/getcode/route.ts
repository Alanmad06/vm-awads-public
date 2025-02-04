import { sendVerificationEmail } from "@/lib/email";

export async function POST(request : Request) {
  try {
    const { email } = await request.json();
    if (!email) return new Response("Email es requestuerido", { status: 400 });

    // Generar código aleatorio de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    

    
 

    // Enviar email
    await sendVerificationEmail(email, code);

    return new Response("Código enviado", { status: 200 });
  } catch (error) {
    return new Response("Error enviando el email", { status: 500 });
  }
}
