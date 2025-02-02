
import { selectedCandidate } from "@/interfaces/candidates"
import styles from "./styles/submitButton.module.css"

export default function submitButton({ selectedCandidates, index }: { selectedCandidates: selectedCandidate[],  index: number }) {

    if(selectedCandidates.length > 15) selectedCandidates.pop()
    
    const handleVote = async () => {
        try {
            const response = await fetch('api/vote', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedCandidates)
            })
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }

    return (

        <div className={styles.button__container}>
        <div className={`${styles.stars} ${styles.stars1}`} ></div>
        <div className={`${styles.stars} ${styles.stars2}`} ></div>
        <div className={`${styles.stars} ${styles.stars3}`} ></div>
        <button className={styles.form__button} onClick={handleVote} type="submit">
            Enviar <br /> votos
        </button>
   </div>

    )
}