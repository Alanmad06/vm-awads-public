'use client'

import { useCandidates } from '@/context/candidatesContext';
import { Candidate } from "@/interfaces/candidates";
import { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import navigationArr from '@/lib/navigation';
type Category = '' | 'memes' | 'evento' | 'familiar' | 'gamer' | 'juego' | 'mascota' | 'momero' | 'sinque' | 'tiktok' | 'tiktoker' | 'trans' | 'trapo' | 'vg' | 'vrgo' | 'vm';

export default function Candidates({candidates , category} : {candidates : Candidate[] , category : Category} ) {
    const { dispatch } = useCandidates();
    const [selectedCandidate, setSelectedCandidate] = useState('');
    const router = useRouter();
    
    const handleSelect = (id: string) => {
        setSelectedCandidate(id);
        const selected = candidates.find((candidate) => candidate.id === id);
        if (selected) {
            /* dispatch({ type: 'ADD_CANDIDATE', payload: { category, candidate: selected } }); */
            router.push(navigationArr[category]);
        } else {
            console.error(`Candidate with id ${id} not found`);
        }
        
    };

 return (
    <>
        {candidates.map((candidate : Candidate)  => {
          let estilo = ''
          
          if(selectedCandidate && selectedCandidate === candidate.id){
            estilo = 'selected'
          }else if(selectedCandidate && selectedCandidate !== candidate.id){
            estilo = 'not'
          }

          
          return(
          <div key={candidate.id} className={`container__candidatos ${candidate.id} ${estilo}`}>
            <input
              type="radio"
              id={candidate.id}
              className="container__candidatos__input"
              name="candidatos"
              checked={selectedCandidate === candidate.id}
              onChange={()=>{ handleSelect(candidate.id);}}
            />
            <label htmlFor={candidate.id} onClick={() => handleSelect(candidate.id)}>
              <Image
                className="container__candidatos__img"
                src={candidate.src}
                alt={candidate.alt}
                fill={true}
              />
            </label>
          </div>
          )
})}
        
        </>
)

}