import styles from './styles/vmAnimation.module.css'

export default function VmAnimation() {
    return (
        <div className={styles.container}>
            <video controls={false} autoPlay muted playsInline loop>
        <source src="/videos/vm_animation.webm"  type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
        </div>
      
    );
  }
  