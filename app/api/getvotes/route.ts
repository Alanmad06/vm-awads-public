
import { auth } from "@/auth";
import { getVotes } from "@/lib/db/getVotes";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const user = await auth()
    if(!user){
        return NextResponse.json({
            error: `Usuario no encontrado`,
          });
    }
    const result  = await getVotes(user?.user?.id!)

    return NextResponse.json({
      message: "Se encontraron votos",
      result
    });
  } catch (error) {
    return NextResponse.json({
      error: `No se encontraron votos :  ${error}`,
    });
  }
}
