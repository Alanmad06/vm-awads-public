import { auth } from "@/auth"
import styles from "./styles/homeSession.module.css"
import Link from "next/link"

export default async function HomeSession(){
    const authSession = await auth()
    return(
        <div className={styles.container}>
        <p className={styles.welcome}>Bienvenido <strong>{(authSession) ? authSession.user?.name : ''}</strong> a los</p>
        <div className={styles.container__title}>
        <h1 className={styles.title}>VM AWARDS</h1>
        <div className={styles.title__aux}>VM AWARDS</div>
        <div className={styles.title__aux2}>VM AWARDS</div>
        <div className={styles.title__aux3}>VM AWARDS</div>
        </div>
       
        {(authSession) ?
        <button><Link href='/memes'>
            Comienza a votar ahora
                  !</Link></button> :
        <button>
          <Link href='/login'>
            Registrate para empezar a votar !</Link>
        </button>}
        </div>
    )
}