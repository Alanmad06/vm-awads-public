"use client"

import SubmitButton from "@/components/submitButton";
import { useCandidates } from "@/context/candidatesContext";
import styles from './page.module.css'

export default function SubmitPage(){
    const {candidates} = useCandidates()
    return(
        <div className={styles.container}>
            <SubmitButton selectedCandidates={candidates} />
        
        </div>
    )
}