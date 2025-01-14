'use client'

import '@/app/__styles/page.css';
import './page.css';
import { Candidate } from "@/interfaces/candidates";
import Candidates from "@/components/candidates";
import Container from "@/components/container";
import { CandidatesProvider } from "@/context/candidatesContext";

const candidates: Candidate[] = [
  { id: 'candidato1', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato2', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato3', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato4', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato5', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
];

const category = 'familiar'

export default function Familiar() {

  return (
    <CandidatesProvider>
      <Container category={category}>
        <Candidates candidates={candidates} category={category} />
      </Container>
    </CandidatesProvider>
  );
}
