import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll, Text, Image, Environment, Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three' // Import THREE
import { ShoeDisplay } from './ShoeDisplay'

const IMAGES = [
    `${import.meta.env.BASE_URL}assets/shoe_1.png`,
    `${import.meta.env.BASE_URL}assets/shoe_2.png`,
    `${import.meta.env.BASE_URL}assets/shoe_3.png`,
    `${import.meta.env.BASE_URL}assets/shoe_4.png`,
    `${import.meta.env.BASE_URL}assets/shoe_5.png`,
]

const BRAND_NAME = "invalid"

export const Experience = ({ started, currentSlide }) => {
    const { width, height } = useThree((state) => state.viewport)

    return (
        <>
            <Environment preset="studio" />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

            <ScrollControls pages={7} damping={0.2} enabled={started}>
                <Scroll>
                    {/* Slide 1: Brand Introduction */}
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Text
                            font="https://fonts.gstatic.com/s/cormorantgaramond/v16/H4cjBXynl9bTjvjwAa2E9W0YwD8t2xo.woff"
                            position={[0, 0, 0]}
                            scale={[width / 8, width / 8, 1]}
                            color="#4A453E"
                            anchorX="center"
                            anchorY="middle"
                        >
                            {BRAND_NAME}
                        </Text>
                        <Text
                            font="https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2"
                            position={[0, -1.5, 0]}
                            fontSize={0.2}
                            color="#8C867D"
                            anchorX="center"
                            anchorY="middle"
                        >
                            REDEFINING FOOTWEAR
                        </Text>
                    </Float>

                    {/* Slide 2-6: Shoe Showcase */}
                    {IMAGES.map((img, i) => (
                        <ShoeDisplay
                            key={i}
                            position={[0, -(height * (i + 1)), 0]}
                            img={img}
                            index={i}
                        />
                    ))}

                    {/* Slide 7: Closure */}
                    <group position={[0, -(height * 6), 0]}>
                        <Text
                            font="https://fonts.gstatic.com/s/cormorantgaramond/v16/H4cjBXynl9bTjvjwAa2E9W0YwD8t2xo.woff"
                            position={[0, 0, 0]}
                            fontSize={1}
                            color="#4A453E"
                            anchorX="center"
                            anchorY="middle"
                        >
                            THE FUTURE IS NOW
                        </Text>
                    </group>
                </Scroll>
            </ScrollControls>
        </>
    )
}
