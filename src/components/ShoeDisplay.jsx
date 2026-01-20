import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Image, Float } from '@react-three/drei'
import * as THREE from 'three'

export const ShoeDisplay = ({ position, img, index }) => {
    const ref = useRef()
    const { width } = useThree((state) => state.viewport)

    useFrame((state, delta) => {
        // Subtle rotation or movement based on mouse or time
        if (ref.current) {
            ref.current.material.zoom = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05
        }
    })

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Image
                    ref={ref}
                    url={img}
                    transparent
                    scale={[4, 4, 1]}
                    toneMapped={false}
                />
            </Float>
        </group>
    )
}
