import { useEffect, useState } from 'react'
import styles from '../styles/Cursor.module.css'

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', onMouseMove)
        return () => window.removeEventListener('mousemove', onMouseMove)
    }, [])

    return (
        <div
            className={styles.cursor}
            style={{ left: mousePosition.x, top: mousePosition.y }}
        />
    )
}
