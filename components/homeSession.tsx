import { auth } from "@/auth"
import styles from "./styles/homeSession.module.css"
import Link from "next/link"
import SignOutButton from "./signOutButton"
import ResultsButton from "./resultsButton"

export default async function HomeSession(){
    const authSession = await auth()
    
    return(
        <>
        {(authSession)?<><SignOutButton/> <ResultsButton/></>
        :''} 
        <div className={styles.container}>

        <p className={styles.welcome}>Bienvenido a los</p>
        <div className={styles.container__title}>
        <h1 className={styles.title}>VM AWARDS</h1>
        
        </div>
       
        {(authSession) ?
       <Link className={styles.button__link}  href='/memes'> <button className={styles.button} >
            Comienza a votar ahora
                  !</button> </Link>:
         <Link href='/login' className={styles.button__link}> <button className={styles.button}>
        
            Registrate para empezar a votar !
        </button></Link>}
        </div>
        </>
    )
}