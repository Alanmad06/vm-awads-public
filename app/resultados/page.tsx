
import styles from "./page.module.css"
import Results from "@/components/results";

export default function StatsChart() {

//ola
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RESULTADOS</h1>
      <Results />
    </div>
  );
}
