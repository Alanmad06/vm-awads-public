import { createCode } from "@/lib/db/verification_codes/createCode";


export async function POST(request : Request) {
  try {
    const { email } = await request.json();
    if (!email) return new Response("Email es requestuerido", { status: 400 });

    await createCode(email)
   

    return new Response("Código enviado", { status: 200 });
  } catch (error) {
    console.error(error)
    return new Response("Error enviando el email", { status: 500 });
  }
}
