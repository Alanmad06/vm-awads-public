'use client'


import Candidates from "@/components/candidates";
import Container from "@/components/container";
import { Candidate } from '@/interfaces/candidates';
import styles from './page.module.css';
import AllCandidates from '@/lib/candidates'

const category = 'categoria2'

export default function Categoria2() {
    const candidatesFilter = AllCandidates.filter(candidates=>(
        candidates.name.match(/[cris]/i)))
   
    const candidates = candidatesFilter.slice(0,10)

    return (

        <Container category={category}>
            <Candidates candidates={candidates} category={category} styles={styles}/>
        </Container>

    );
}