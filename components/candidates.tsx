'use client'

import { useCandidates } from '@/context/candidatesContext';
import { Candidate, selectedCandidate } from "@/interfaces/candidates";
import { useRef } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import navigationList from '@/lib/navigation';
import { Node } from 'dbly-linked-list';



type Category = '' | 'memes' | 'evento' | 'familiar' | 'gamer' | 'juego' | 'mascota' | 'categoria1' | 'categoria2' | 'categoria3' | 'tiktoker' | 'categoria4' | 'categoria5' | 'categoria6' | 'categoria7' | 'vm';

interface CandidatesProps {
  candidates: Candidate[];
  category: Category;
  styles: { [key: string]: string };
}

interface HandleSelect {
  (id: string): void;
}

export default function Candidates({ candidates, category, styles }: CandidatesProps) {
  const { candidates: candidatesStored, dispatch } = useCandidates();
  const selectedCandidate = useRef<string>('');
  const isCategoryStored = !!candidatesStored.find((storedCandidate: selectedCandidate) => storedCandidate.category === category);
  const router = useRouter();

  if(isCategoryStored){
    selectedCandidate.current = candidatesStored.find(((storedCandidate: selectedCandidate) => storedCandidate.category === category))?.candidate.id as string
  }



  
  const handleSelect: HandleSelect = (id: string) => {
    const selected = candidates.find((candidate) => candidate.id === id); 
    

    if (selected) {
      selectedCandidate.current = id;
      if (isCategoryStored) {
        dispatch({ type: 'UPDATE_CANDIDATE', payload: { category, candidate: selected } });
      } else {
        dispatch({ type: 'ADD_CANDIDATE', payload: { category, candidate: selected } });
      }

      const node = navigationList.find(`/${category}`) as unknown as Node ;

      if (node !== undefined) {
        router.push((node as Node).next?.data.toString() ?? '/');
      }

    } else {
      console.error(`Candidate with id ${id} not found`);
    }
  };


  return (
    <>
      {candidates.map((candidate: Candidate) => {
        let estilo = '';
        const isChecked = !!candidatesStored.find((storedCandidate: selectedCandidate) => storedCandidate.candidate.id === candidate.id && storedCandidate.category === category);

        
        if (isChecked) {
          selectedCandidate.current = candidate.id!;
          if (selectedCandidate.current === candidate.id) {
            estilo = 'selected';
          }
        } else if (selectedCandidate.current && selectedCandidate.current !== candidate.id) {
          estilo = 'not';
        }

        return (
          <div
            key={candidate.id}
            className={`container__candidatos ${styles[candidate.id!]} ${estilo}`}>
            <input
              type="radio"
              id={candidate.id}
              className={'container__candidatos__input'}
              name="candidatos"
              checked={isChecked}
              onChange={() => handleSelect(candidate.id!)}
            />
            <label htmlFor={candidate.id} onClick={() => handleSelect(candidate.id!)}>
              <Image
                className={'container__candidatos__img'}
                src={candidate.src!}
                alt={candidate.alt!}
                fill={true}
              />
            </label>
          </div>
        );
      })}
    </>
  );
}

