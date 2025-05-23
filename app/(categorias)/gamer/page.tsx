'use client'


import Candidates from "@/components/candidates";
import Container from '@/components/container';
import styles from './page.module.css';
import { Candidate } from '@/interfaces/candidates';

const candidates: Candidate[] = [
  { id: 'candidato1', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato2', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato3', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato4', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato5', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato6', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
];

const category = 'gamer'

export default function Gamer() {

  return (

    <Container category={category}>
      <Candidates candidates={candidates} category={category} styles={styles} />
    </Container>

  );
}
