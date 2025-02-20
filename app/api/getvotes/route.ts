
import { auth } from "@/auth";
import { getVotes } from "@/lib/db/getVotes";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const user = await auth();

    if (!user || !user.user?.email) {
      return NextResponse.json({
        error: "Usuario no encontrado o sin email",
      });
    }

    const result = await getVotes(user.user.email);

    if (result?.votes) {
      return NextResponse.json({
        message: "Se encontraron votos",
        result,
      });
    }

    return NextResponse.json({
      message: "No se encontraron votos",
      result: undefined,
    });
  } catch (error) {
    return NextResponse.json({
      error: `No se encontraron votos: ${error}`,
    });
  }
}
