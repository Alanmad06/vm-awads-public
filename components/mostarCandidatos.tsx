'use client'

import { selectedCandidate } from "@/interfaces/candidates";
import Link from "next/link";

import { useCandidates } from "@/context/candidatesContext";

export default function MostarCandidatos() {
    const { candidates, dispatch } = useCandidates();
    console.log('candidates', candidates)

  return (
    <>
        <Link
          href={`/vm`}> 
           VM
        </Link>
        <button onClick={()=>{
            dispatch({ type: 'ADD_CANDIDATE', payload: { category: 'vm', candidate: {id:'candidato',src:'a',alt:'a',name:'prueba'} } });

        }}> add </button>
        {candidates && candidates.map((item :selectedCandidate )=>{
          console.log('candidates2', item)
            return (
                <div key={item.candidate.id}>
                    <p>o</p>
                    <p>{item.category}</p>
                    <p>{item.candidate.name}</p>
                    <p>{item.candidate.id}</p>
                </div>
            )
        })}
        
      </>
  );
}