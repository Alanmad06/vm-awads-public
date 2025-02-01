"use client"

import { useRouter } from "next/navigation"
import styles from "./styles/signOutButton.module.css"
import { LogOut } from "lucide-react"



export default function SignOutButton() {
    const router = useRouter()

    const handleSignOut = async () => {
        try {
            const result = await fetch('api/signout', {
                method: 'POST',
            })

            router.replace('/')

        } catch (error) {
            console.error(error)
        }

    }

    return (

       
 <div className={styles.button__container}>
 <div className={`${styles.stars} ${styles.stars1}`} ></div>
 <div className={`${styles.stars} ${styles.stars2}`} ></div>
 <div className={`${styles.stars} ${styles.stars3}`} ></div>
 <button className={styles.form__button} onClick={handleSignOut}>
   <LogOut size={15}/>

</button>
</div>
    )
}