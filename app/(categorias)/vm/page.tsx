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
    { id: 'candidato9', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
    { id: 'candidato10', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
    { id: 'candidato11', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
    { id: 'candidato12', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
    { id: 'candidato13', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
    { id: 'candidato14', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
    { id: 'candidato15', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
    { id: 'candidato16', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' },
    { id: 'candidato17', src: '/personas/cris.jpg', alt: 'candidato changuillo', name: 'Cris' }
];


const category = 'vm'
export default function VM() {

    return (

        <Container category={category}>
            <Candidates candidates={candidates} category={category} />
        </Container>

    );
}