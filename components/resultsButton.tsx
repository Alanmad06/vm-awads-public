import Link from "next/link";
import styles from "./styles/signOutButton.module.css"
import { ChartColumnBig } from "lucide-react";

export default function ResultsButton(){
    return(
        <div className={`${styles.button__container} ${styles.results}`}>
        <div className={`${styles.stars} ${styles.stars1}`} ></div>
        <div className={`${styles.stars} ${styles.stars2}`} ></div>
        <div className={`${styles.stars} ${styles.stars3}`} ></div>
        <Link href='resultados'>
        <button className={`${styles.form__button}`} >
            <ChartColumnBig/>
        
          </button>
        
        </Link>
      
       </div>
    )
}