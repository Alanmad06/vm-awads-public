import { signOut } from "@/auth";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await signOut();

    return NextResponse.json({
      message: "Usuario cerro sesion de manera exitosa",
    });
  } catch (error) {
    return NextResponse.json({
      error: `No se logro el cierre de sesion :  ${error}`,
    });
  }
}
