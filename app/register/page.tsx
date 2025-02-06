"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { Loader2Icon } from "lucide-react";
import {VerifyEmail} from "../../components/verifyEmail";
import ProvidersComponent from "@/components/providersComponent";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword , setConfirmPassword] = useState("")
  const [loading , setLoading]= useState(false)
  const [message, setMessage] = useState("");
  const [isOpen , setIsOpen] = useState(false)

  

  const handleIsOpen= ()=>{
    setIsOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(password!==confirmPassword) {
      setMessage('Error: Las contraseñas no coinciden');
      return
    }
    setMessage("");
    setLoading(true)

    try {

      const response = await fetch("/api/getcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error || "something happened while Register"}`);
        return;
      }
      


      
      
    
    } catch (error) {
      if (error instanceof Error) {
        setMessage(`Error: ${error.message}`);
    } else {
        setMessage("An unknown error occurred.");
    }
    }finally{
      setLoading(false)
      setIsOpen(true)
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
          type="password"
          className={styles.form__input}
          value={password}
          minLength={6}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label className={styles.form__label}>
        Confirmar Contraseña:
        <input
          type="password"
          className={styles.form__input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>

      <div className={styles.button__container}>
        <div className={`${styles.stars} ${styles.stars1}`} ></div>
        <div className={`${styles.stars} ${styles.stars2}`} ></div>
        <div className={`${styles.stars} ${styles.stars3}`} ></div>
        <button disabled={loading} type="submit" className={styles.form__button}>
        {(loading)? <Loader2Icon className={styles.form__button__loading}/> : 'Registrarse'}
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

    <hr className={styles.form__hr}/>
  <ProvidersComponent/>
      <div className={styles.form__text_center}>
        <p>
          Ya tienes una cuenta?{" "}
          <Link className={styles.form__link} href="/login" prefetch={true}>
            Login
          </Link>
        </p>
      </div>
    </form>
    <span className={styles.container__titulo}>VM AWARDS</span>
    <span className={styles.container__titulo_aux}>VM AWARDS</span>
    {(isOpen)?<VerifyEmail email={email} password={password} handleIsOpen={handleIsOpen} /> : ''}
  </div>
  );
}
