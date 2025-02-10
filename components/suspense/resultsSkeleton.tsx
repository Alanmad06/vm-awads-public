import styles from "./styles/resultsSkeleton.module.css"

export default function ResultsSkeleton(){
    return(
        <>
         <div className={styles.chart__container} >
        </div>
         <div className={styles.chart__container} >
        </div>
         <div className={styles.chart__container} >
        </div>
        </>
       
    )
}