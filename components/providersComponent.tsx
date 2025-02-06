import { signIn } from "next-auth/react"
import styles from "./styles/providersComponent.module.css"
import Image from "next/image"

export default function Providers(){

    const handleProvider = async () =>{
      signIn('google',{redirectTo:'/memes'})
    
    }
    return(
        <div className={styles.container__providers}>
            <button className={styles.providers__button} type="button" onClick={()=>{handleProvider()}}>
            <Image src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" width={20} height={20} alt="Google logo" />

            </button>
        </div>
    )
}