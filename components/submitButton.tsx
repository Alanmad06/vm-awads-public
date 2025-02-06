"use client"
import { selectedCandidate } from "@/interfaces/candidates"
import { toast } from "react-toastify";
import styles from "./styles/submitButton.module.css"
import { useState } from "react";

export default function submitButton({ selectedCandidates, index }: { selectedCandidates: selectedCandidate[],  index: number }) {

    let disabled = true
    
    if(selectedCandidates.length > 15) selectedCandidates.pop()
        if(selectedCandidates.length === 15) disabled = false
    
    const handleVote = async () => {
        
        if(disabled) {
           toast.info('Debes votar en todas las categorias',{
            className: styles.toast,
            closeOnClick: true
            
           })
           return
        }
        
        try {
            const response = await fetch('api/vote', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedCandidates)
            })
            const data = await response.json();

            toast.info(data.message,{
                className: styles.toast,
                closeOnClick: true
                
               })
            
        } catch (e) {
            toast.error(e as string,{
                className: styles.toast,
                closeOnClick: true
                
               })
            console.error(e)
        }
    }

    return (

        <div className={styles.button__container}>
        <div className={`${styles.stars} ${styles.stars1}`} ></div>
        <div className={`${styles.stars} ${styles.stars2}`} ></div>
        <div className={`${styles.stars} ${styles.stars3}`} ></div>
        <button aria-disabled={disabled} className={styles.form__button} onClick={handleVote} type="submit">
            Enviar <br /> votos
        </button>
   </div>

    )
}