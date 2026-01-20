import styles from '../styles/Overlay.module.css'
import { motion } from 'framer-motion'

export const Overlay = ({ started, setStarted, currentSlide }) => {
    return (
        <div className={styles.overlay} style={{ pointerEvents: 'none' }}>
            <header className={styles.header}>
                <div className={styles.brand}>invalid</div>
                <nav className={styles.nav}>
                    <span>Collections</span>
                    <span>About</span>
                    <span>Contact</span>
                </nav>
            </header>

            {/* Footer / Copyright */}
            <footer className={styles.footer}>
                <p>© invalid — Thomas Anthony | Editor | Creator | Brand Manager</p>
            </footer>
        </div>
    )
}
