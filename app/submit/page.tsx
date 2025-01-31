"use client"

import SubmitButton from "@/components/submitButton";
import { useCandidates } from "@/context/candidatesContext";

export default function SubmitPage(){
    const {candidates} = useCandidates()
    return(
        <SubmitButton selectedCandidates={candidates} />
    )
}