
import HomeSession from "@/components/homeSession";
import styles from "./page.module.css"
import HomeVideo from "@/components/homeVideo";
import HomeTrailer from "@/components/homeTrailer";


export default function Home() {

  return (
    <div className={styles.container}>
     
      <HomeSession/>
      <HomeVideo/>
      <HomeTrailer/>
    </div>
  );
}
