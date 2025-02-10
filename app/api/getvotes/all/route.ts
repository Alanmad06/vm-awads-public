
import { getAllVotes } from "@/lib/db/getVotes";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    

    const result = await getAllVotes();

    if (result) {
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
