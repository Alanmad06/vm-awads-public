'use client'

import { useCandidates } from '@/context/candidatesContext';
import { Candidate } from "@/interfaces/candidates";
import { useState } from "react";
import Image from 'next/image';

export default function Candidates({candidates , category} : {candidates : Candidate[] , category : string} ) {
    const { dispatch } = useCandidates();
    const [selectedCandidate, setSelectedCandidate] = useState('');
    
    const handleSelect = (id: string) => {
        setSelectedCandidate(id);
        const selected = candidates.find((candidate) => candidate.id === id);
        if (selected) {
            dispatch({ type: 'ADD_CANDIDATE', payload: { category, candidate: selected } });
        } else {
            console.error(`Candidate with id ${id} not found`);
        }
        
    };

 return (
    <>
        {candidates.map((candidate : Candidate)  => (
          <div key={candidate.id} className={`container__candidatos ${candidate.id} ${selectedCandidate === candidate.id ? 'selected' : ''}`}>
            <input
              type="radio"
              id={candidate.id}
              className="container__candidatos__input"
              name="candidatos"
              checked={selectedCandidate === candidate.id}
              onChange={() => handleSelect(candidate.id)}
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
        ))}
        
        </>
)

}