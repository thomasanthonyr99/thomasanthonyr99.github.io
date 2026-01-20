import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect, useRef } from 'react'
import { ScrollControls, Scroll, Sparkles } from '@react-three/drei'
import { Experience } from './components/Experience'
import { Overlay } from './components/Overlay'
import { CursorParticles } from './components/CursorParticles'

export default function App() {
    return (
        <>
            <CursorParticles />
            <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
                <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }} dpr={[1, 2]}>
                    <color attach="background" args={['#050505']} />

                    <ScrollControls pages={10} damping={0.1}>
                        <Scroll>
                            {/* 3D Content goes here - synced to scroll */}
                            <Experience />
                            {/* Global Particles/Sparkles */}
                            <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} noise={0.2} color="#00f3ff" />
                            <Sparkles count={50} scale={10} size={5} speed={0.2} opacity={0.5} noise={0.1} color="#ff00ff" />
                        </Scroll>

                        <Scroll html style={{ width: '100%' }}>
                            {/* DOM/HTML Content goes here */}
                            <Overlay />
                        </Scroll>
                    </ScrollControls>
                </Canvas>
            </div>
        </>
    )
}
