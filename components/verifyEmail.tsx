"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles/verifyEmail.module.css";
import { Loader2Icon } from "lucide-react";



interface VerifyEmailProps {
    email: string;
    password: string;
    handleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function VerifyEmail({ email, password, handleIsOpen }: VerifyEmailProps) {

    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setLoading(true)
        try {

            const response = await fetch("/api/verifycode", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    code,
                    password
                }),
            });

            if (!response.ok) {
                const res = await response.json();
                console.log(res);
                if (res.error) {
                    setMessage("Error: Credenciales / Codigo Invalido");
                } else {
                    setMessage(`Error: Algo inesperado paso al hacer login ${res.error}`);
                }
                return;
            }





            router.push('/memes')
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                setMessage(`Error: Credenciales / Codigo Invalido`);
            } else {
                setMessage("Error desconocido");
            }
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className={styles.container}>
            <button className={styles.button__close} onClick={() => { handleIsOpen(false) }}>X</button>
            <form onSubmit={handleSubmit} className={styles.form}>
                <p>Se envio un codigo a su email favor de introducirlo aqui</p>

                <label className={styles.form__label}>
                    Codigo:
                    <input
                        type="text"
                        className={styles.form__input}
                        value={code}

                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                </label>


                <div className={styles.button__container}>
                    <div className={`${styles.stars} ${styles.stars1}`} ></div>
                    <div className={`${styles.stars} ${styles.stars2}`} ></div>
                    <div className={`${styles.stars} ${styles.stars3}`} ></div>
                    <button disabled={loading} type="submit" className={styles.form__button}>
                        {(loading) ? <Loader2Icon className={styles.form__button__loading} /> : 'Enviar'}


                    </button>
                </div>

                {message && (
                    <p
                        className={`${styles.form__message} ${message.startsWith("Error")
                            ? styles.form__message_error
                            : styles.form__message_success
                            }`}
                    >
                        {message.startsWith("Error") ? message.slice(6) : message}
                    </p>
                )}

            </form>

        </div>
    );
}