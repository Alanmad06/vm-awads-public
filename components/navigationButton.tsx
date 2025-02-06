"use client"

import navigationList from "@/lib/navigation";
import { usePathname, useRouter } from "next/navigation";
import styles from './styles/navigationButton.module.css'
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Node } from "dbly-linked-list";

export default function NavigationButton({forward}:{forward : boolean}) {


    const router = useRouter();
    const pathname = usePathname();
    const node = navigationList.find(pathname!) as unknown as Node;
    
    return (

    
        <div className={styles.button__container}>
            <div className={`${styles.stars} ${styles.stars1}`} ></div>
            <div className={`${styles.stars} ${styles.stars2}`} ></div>
            <div className={`${styles.stars} ${styles.stars3}`} ></div>
            {(forward) ?  <button className={`${styles.form__button} ${styles.forward}`} onClick={() => {
                
                 router.push((node as Node).next?.data.toString() ?? '/');
                   
                
            }}>{(node as Node).next?.data.toString().slice(1)  ?? 'Inicio' }{" "}<ArrowRight size={15}/>
            </button>
            :
            <button className={styles.form__button} onClick={() => {
                
                 router.push((node as Node).prev?.data.toString() ?? '/');
            }}><ArrowLeft size={15}/> {" "}{(node as Node).prev?.data.toString().slice(1)  ?? 'Incio' }
                
            </button>
}
        </div>
    )

}