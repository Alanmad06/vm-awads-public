import Image from "next/image";
import styles from './page.module.css';

export default function Memes() {
  return (
    <div className={styles.container}>
      <div className={styles.container_aux}>
     
      <span className={styles.container__categoria}>williams DEL AÑO</span>
        <div className={`${styles.container__candidatos} ${styles.candidato1}`}>
          <Image
            className={styles.container__candidatos__img}
            src="/personas/cris.jpg"
            alt="candidato changuillo"
            fill={true}
          />
        </div>
       
        <div className={`${styles.container__candidatos} ${styles.candidato2}`}>
          <Image
            className={`${styles.container__candidatos__img} ${styles.candidato2_img}`}
            src="/personas/cami.jpg"
            alt="candidato changuillo"
            fill={true}
          />
        </div>
        <div className={`${styles.container__candidatos} ${styles.candidato3}`}>
          <Image
            className={styles.container__candidatos__img}
            src="/personas/mun.jpg"
            alt="candidato changuillo"
            fill={true}
          />
        </div>
        <span className={styles.container__titulo_3}>VOTA POR TU FAVORITO</span>
      </div>
      <span className={styles.container__titulo}>VOTA POR TU FAVORITO</span>
      <span className={styles.container__titulo_2}>VOTA POR TU FAVORITO</span>
    </div>
  );
}
