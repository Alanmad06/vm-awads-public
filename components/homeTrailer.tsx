import styles from "./styles/homeTrailer.module.css"

export default function HomeTrailer() {
    return (
        <div className={styles.container}>
            <iframe className={styles.video} width="560" height="315"
                src="https://www.youtube.com/embed/n42DosdO72M?si=S2WQi9wQRlBJoVWF"
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
         gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
                </div>


    )
}