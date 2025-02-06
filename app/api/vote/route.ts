import { auth } from "@/auth";
import { selectedCandidate } from "@/interfaces/candidates";
import { pool } from "@/lib/db/db";
import { getVotes } from "@/lib/db/getVotes";
import { navigationObj } from "@/lib/navigation";
import { NextResponse } from "next/server";



export async function POST(request: Request) {
  const db = await pool.connect();
  const navigationObjLength = Object.keys(navigationObj).length-1;
  let id : string | undefined;
  let email : string | undefined;
  try {
    const user = await auth()
    
    if(user) {
      id = user?.user!.id
      email = user?.user?.email!
    }
  
   
    const selectedCandidates : selectedCandidate[] = await request.json();
    if(selectedCandidates.length!==navigationObjLength){ 
        
        
        const diff = navigationObjLength - selectedCandidates.length 
        return NextResponse.json({ error: `Faltan ${diff} categorias por votar` }, { status: 400 })
    }
    const selectedCandidatesObj = selectedCandidates.reduce((acc: any, candidate: any,index : number) => {
      acc[index+1] = candidate;
      return acc;
    }, {});

    const isAlreadyVote = !!await getVotes(id!)
    if(isAlreadyVote){
      await db.query(
        'UPDATE users_votes SET votes = ($1) WHERE email = ($2)',
        [ selectedCandidatesObj,email]
      );
      return NextResponse.json({ message: "Voto actualizado correctamente" });
    }
    
    
    if (!selectedCandidates) return NextResponse.json({ error: "No hay votos registrados" }, { status: 400 });

    console.log(id)
    
     await db.query(
        'INSERT INTO users_votes (user_id, votes,email) VALUES ($1, $2,$3)',
        [id, selectedCandidatesObj , email]
      );
    return NextResponse.json({ message: "Voto registrado correctamente" });
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: "Error al registrar el voto" }, { status: 500 });
  } finally {
    db.release();
  }
}
