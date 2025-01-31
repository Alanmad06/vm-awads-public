import { pool } from "@/lib/db/db";
import { navigationObj } from "@/lib/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const db = await pool.connect();
  const navigationObjLength = Object.keys(navigationObj).length-1;
  try {
    const selectedCandidates  = await request.json();
    if(selectedCandidates.length!==navigationObjLength){ 
        
        
        const diff = navigationObjLength - selectedCandidates.length 
        return NextResponse.json({ error: `Faltan ${diff} categorias por votar` }, { status: 400 })
    }
    const selectedCandidatesObj = selectedCandidates.reduce((acc: any, candidate: any,index : number) => {
      acc[index+1] = candidate;
      return acc;
    }, {});
    console.log(selectedCandidatesObj)
    
    if (!selectedCandidates) return NextResponse.json({ error: "No hay votos registrados" }, { status: 400 });

    
    /* const result = await db.query(
        'INSERT INTO users_votes (user_id, votes) VALUES ($1, $2)',
        [1, selectedCandidatesObj]
      ); */
    return NextResponse.json({ message: "Voto registrado correctamente" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error al registrar el voto" }, { status: 500 });
  } finally {
    db.release();
  }
}
