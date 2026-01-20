import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useRef, useEffect } from 'react'
import { Experience } from './components/Experience'
import { Overlay } from './components/Overlay'
import { LoadingScreen } from './components/LoadingScreen'
import { GATracker } from './components/GATracker'
import { CustomCursor } from './components/CustomCursor'
import styles from './styles/App.module.css'

export default function App() {
    const [started, setStarted] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <div className={styles.container}>
            {/* 3D Scene Layer */}
            <div className={styles.canvasContainer}>
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 5], fov: 35 }}
                    dpr={[1, 2]} // Optimize pixel ratio
                >
                    <color attach="background" args={['#F5F2EB']} />
                    <Suspense fallback={null}>
                        <Experience
                            started={started}
                            currentSlide={currentSlide}
                        />
                    </Suspense>
                </Canvas>
            </div>

            {/* UI Overlay Layer */}
            <Overlay
                started={started}
                setStarted={setStarted}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
            />

            <GATracker />
            <CustomCursor />

            {/* Loading/Intro if needed */}
            {!started && <LoadingScreen onStart={() => setStarted(true)} />}
        </div>
    )
}
