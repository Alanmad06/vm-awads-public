'use client'


import Candidates from "@/components/candidates";
import Container from '@/components/container';
import { Candidate } from '@/interfaces/candidates';
import styles from './page.module.css';

const candidates: Candidate[] = [
  { id: 'candidato1', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato2', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato3', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato4', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato5', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato6', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato7', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
  { id: 'candidato8', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },

];

const category = 'mascota'

export default function Mascota() {

  return (

    <Container category={category}>
      <Candidates candidates={candidates} category={category} styles={styles}/>
    </Container>

  );
}
