'use client'

import '@/app/__styles/page.css';
import './page.css';
import Candidates from "@/components/candidates";
import Container from "@/components/container";
import { CandidatesProvider } from "@/context/candidatesContext";
import { Candidate } from '@/interfaces/candidates';

const candidates: Candidate[] = [
  { id: 'candidato1', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato2', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato3', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato4', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato5', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato6', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato7', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato8', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato9', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' }
];


export default function Momero() {

  const category = 'momero'

  return (
    <CandidatesProvider>
      <Container category={category}>
        <Candidates candidates={candidates} category={category} />
      </Container>
    </CandidatesProvider>
  );
}