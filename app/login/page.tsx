"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const res = await response.json();
        console.log(res);
        if (res.error) {
          setMessage("Error: Invalid credentials");
        } else {
          setMessage(`Error: Something happened trying to Login ${res.error}`);
        }
        return;
      }

      router.push("/memes");
    } catch (error) {
      if (error instanceof Error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  useEffect(() => {
    if (message && message.startsWith("Error")) {
      toast.error(message);
    }
  }, [message]);

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
            min={1}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

      
        <div className={styles.button__container}>
          <div className={`${styles.stars} ${styles.stars1}`} ></div>
          <div className={`${styles.stars} ${styles.stars2}`} ></div>
          <div className={`${styles.stars} ${styles.stars3}`} ></div>
          <button type="submit" className={styles.form__button}>
            Log In
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

        <div className={styles.form__text_center}>
          <p>
            No tienes una cuenta?{"  "}
            <Link className={styles.form__link} href="/register" prefetch={true}>
              Registrate
            </Link>
          </p>
        </div>
      </form>
      <span className={styles.container__titulo}>VM AWARDS</span>
      <span className={styles.container__titulo_aux}>VM AWARDS</span>
    </div>
  );
}