"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { Loader2Icon } from "lucide-react";

export default function VerifyEmail() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading , setLoading]= useState(false)

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
        }),
      });

      if (!response.ok) {
        const res = await response.json();
        console.log(res);
        if (res.error) {
          setMessage("Error: Credenciales Invalidas");
        } else {
          setMessage(`Error: Algo inesperado paso al hacer login ${res.error}`);
        }
        return;
      }

      
      router.push("/memes");
      
    } catch (error) {
     
      if (error instanceof Error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("Error desconocido");
      }
    } finally{
      setLoading(false)
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.form__label}>
          Email:
          <input
            type="email"
            className={styles.form__input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className={styles.form__label}>
          Contraseña:
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
            {(loading)? <Loader2Icon className={styles.form__button__loading}/> : 'Log In'}
            
      
          </button>
        </div>

        {message && (
          <p
            className={`${styles.form__message} ${
              message.startsWith("Error")
                ? styles.form__message_error
                : styles.form__message_success
            }`}
          >
            {message.startsWith("Error") ? message.slice(6) : message}
          </p>
        )}

      </form>
      <span className={styles.container__titulo}>VM AWARDS</span>
      <span className={styles.container__titulo_aux}>VM AWARDS</span>
    </div>
  );
}