"use client"

import SubmitButton from "@/components/submitButton";
import { useCandidates } from "@/context/candidatesContext";
import styles from './page.module.css'
import Container from "@/components/container";
import { selectedCandidate } from "@/interfaces/candidates";
import Image from 'next/image';
import Link from "next/link";

export default function SubmitPage() {
  let { candidates } = useCandidates()
  const submit: selectedCandidate = {
    candidate: {
      id: 'submit',
      name: 'submit',
      alt: '',
      src: '/submit'
    },
    category: 'submit'
  }
  candidates = [...candidates, submit]
  return (
    <div className={styles.container}>
      <Container category="VOTOS">
        {candidates && candidates.map((selectedCandidate: selectedCandidate, index) => {
          const { candidate, category } = selectedCandidate
          const estilo = styles[category];
          const isSubmit = (index === candidates.length - 1) ? true : false

          return (
            <div
              key={category}
              className={`container__candidatos ${estilo}`}>

              {(isSubmit) ? <SubmitButton selectedCandidates={candidates} /> : <Link
                href={category}>
                <input
                  type="radio"
                  id={category}
                  className={'container__candidatos__input'}
                  name="candidatos"


                />
                <label htmlFor={category}  >
                  <Image
                    className={'container__candidatos__img'}
                    src={candidate.src!}
                    alt={candidate.alt!}
                    fill={true}
                  />
                </label>
              </Link>}
            </div>
          );
        })}
      </Container>


    </div>
  )
}