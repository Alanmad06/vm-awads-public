"use client"
import styles from './styles/homeVideo.module.css'

export default function HomeVideo() {
    return (
        <div className={styles.container} >
            <video className={styles.video} controls={false} autoPlay muted playsInline loop>
                <source src="/videos/vm_wallpaper.webm" type="video/webm" />
                Tu navegador no soporta el formato de video.
            </video>
        </div>
    )
}