"use client"

import navigationList from "@/lib/navigation";
import { usePathname, useRouter } from "next/navigation";
import styles from './styles/navigationButton.module.css'
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NavigationButton({forward}:{forward : boolean}) {


    const router = useRouter();
    const pathname = usePathname();
    return (

    
        <div className={styles.button__container}>
            <div className={`${styles.stars} ${styles.stars1}`} ></div>
            <div className={`${styles.stars} ${styles.stars2}`} ></div>
            <div className={`${styles.stars} ${styles.stars3}`} ></div>
            {(forward) ? <button className={`${styles.form__button} ${styles.forward}`} onClick={() => {
                const node = navigationList.find(pathname!);
                if (node instanceof Object) {
                    router.push(node.next?.data.toString() ?? '/');
                }
            }}><ArrowRight size={15}/>
            </button>
            :
            <button className={styles.form__button} onClick={() => {
                const node = navigationList.find(pathname!);
                if (node instanceof Object) {
                    router.push(node.prev?.data.toString() ?? '/');
                }
            }}><ArrowLeft size={15}/> {" "}Categoria 
                
            </button>
}
        </div>
    )

}