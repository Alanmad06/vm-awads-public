"use client"

import navigationList from "@/lib/navigation";
import { usePathname, useRouter } from "next/navigation";
import styles from './styles/navigationButton.module.css'
import { ArrowLeft } from "lucide-react";
export default function NavigationButton() {


    const router = useRouter();
    const pathname = usePathname();
    return (


        <div className={styles.button__container}>
            <div className={`${styles.stars} ${styles.stars1}`} ></div>
            <div className={`${styles.stars} ${styles.stars2}`} ></div>
            <div className={`${styles.stars} ${styles.stars3}`} ></div>
            <button className={styles.form__button} onClick={() => {
                const node = navigationList.find(pathname!);
                if (node instanceof Object) {
                    router.push(node.prev?.data.toString() ?? '/');
                }
            }}><ArrowLeft size={15}/> {" "}Categoria 
                
            </button>
        </div>
    )

}