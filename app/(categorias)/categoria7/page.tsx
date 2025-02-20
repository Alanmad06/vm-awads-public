'use client'


import Candidates from "@/components/candidates";
import Container from "@/components/container";
import { Candidate } from '@/interfaces/candidates';
import styles from './page.module.css';

const candidates: Candidate[] = [
    { id: 'candidato1', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato2', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato3', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato4', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato5', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato6', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato7', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato8', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato9', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato10', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato11', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato12', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato13', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato14', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato15', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' },
    { id: 'candidato16', src: '/personas/cris.jpg', alt: 'candidato cris', name: 'Cris' }
];


const category = 'categoria7'
export default function Categoria7() {

    return (

        <Container category={category}>
            <Candidates candidates={candidates} category={category} styles={styles} />
        </Container>

    );
}