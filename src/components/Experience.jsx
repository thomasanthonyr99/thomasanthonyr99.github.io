import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll, Image, useTexture, Text, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// A single shoe item
const ShoeItem = ({ url, scale, page, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
    const ref = useRef()
    const scroll = useScroll()

    useFrame((state, delta) => {
        const r1 = scroll.range(page / 10, 1 / 10)
        const r2 = scroll.curve(page / 10, 1 / 10)

        if (ref.current) {
            // Parallax / Movement
            ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1

            // Rotate based on scroll progress
            ref.current.rotation.z = rotation[2] + (r2 * 0.1) - 0.05
            ref.current.rotation.y = rotation[1] + (state.mouse.x * 0.2)
            ref.current.rotation.x = rotation[0] - (state.mouse.y * 0.2)

            // Scale: Pop in effect
            const s = scale * (0.8 + 0.2 * r2)
            ref.current.scale.set(s, s, 1) // Fixed Z scale to 1 for Image

            // Material "flash" effect simulation
            if (ref.current.material) {
                // Pulse brightness
                const flash = (Math.sin(state.clock.elapsedTime * 3) + 1) * 0.1 + 0.9
                ref.current.material.color.setRGB(flash, flash, flash)
                ref.current.material.zoom = 1 + (1 - r2) * 0.2
                // Ensure transparency works
                ref.current.material.transparent = true
            }
        }
    })

    return (
        <Image
            ref={ref}
            url={url}
            scale={[scale, scale, 1]}
            position={position}
            rotation={rotation}
            transparent
        />
    )
}

// Background that shifts colors
const BackgroundColors = () => {
    const scroll = useScroll()
    const { gl } = useThree()

    useFrame(() => {
        const offset = scroll.offset
        const colors = [
            new THREE.Color('#050505'),
            new THREE.Color('#0a0a0a'), // Men 1
            new THREE.Color('#1a0520'), // Men 2 (Purple tint)
            new THREE.Color('#051a20'), // Men 3 (Cyan tint)
            new THREE.Color('#200515'), // Women 1 (Pink tint)
            new THREE.Color('#052005'), // Women 2 (Green tint)
            new THREE.Color('#101010'),
        ]

        // Safety check for index
        const index = Math.floor(offset * (colors.length - 1))
        const nextIndex = Math.min(index + 1, colors.length - 1)
        const alpha = (offset * (colors.length - 1)) % 1

        if (colors[index] && colors[nextIndex]) {
            gl.setClearColor(colors[index].clone().lerp(colors[nextIndex], alpha))
        }
    })

    return null
}

export const Experience = () => {
    const { width, height } = useThree((state) => state.viewport)

    return (
        <>
            <BackgroundColors />

            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} intensity={10} angle={0.5} penumbra={1} color="cyan" />
            <spotLight position={[-10, -10, -10]} intensity={10} angle={0.5} penumbra={1} color="magenta" />

            {/** Slide 1: Hero (Center) **/}
            <ShoeItem
                page={0}
                url="/assets/shoe_1.png"
                scale={4}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
            />

            {/** Slide 2: Men 1 (Left side, showing right) **/}
            <ShoeItem
                page={1}
                url="/assets/shoe_1.png"
                scale={3.5}
                position={[-width * 0.2, -height, 0]}
                rotation={[0, 0.5, 0]}
            />

            {/** Slide 3: Men 2 (Right side) **/}
            <ShoeItem
                page={2}
                url="/assets/shoe_2.png"
                scale={3.5}
                position={[width * 0.2, -height * 2, 0]}
                rotation={[0, -0.5, 0]}
            />

            {/** Slide 4: Men 3 **/}
            <ShoeItem
                page={3}
                url="/assets/shoe_3.png"
                scale={3.5}
                position={[0, -height * 3, 0]}
                rotation={[0.2, 0, 0.2]}
            />

            {/** Slide 5: Women 1 **/}
            <ShoeItem
                page={4}
                url="/assets/womens_shoe_1.png"
                scale={4}
                position={[0, -height * 4, 0]}
                rotation={[0, 0, 0]}
            />

            {/** Slide 6: Women 2 **/}
            <ShoeItem
                page={5}
                url="/assets/womens_shoe_2.png"
                scale={4}
                position={[width * 0.25, -height * 5, 0]}
                rotation={[0, -0.5, -0.1]}
            />

            {/** Slide 7: Women 3 **/}
            <ShoeItem
                page={6}
                url="/assets/womens_shoe_3.png"
                scale={4}
                position={[-width * 0.25, -height * 6, 0]}
                rotation={[0, 0.5, 0.1]}
            />

            {/* Decorative Particles */}
            <Sparkles
                count={200}
                scale={[width, height * 10, 5]}
                size={3}
                speed={0.5}
                opacity={0.5}
                color="white"
            />
        </>
    )
}
