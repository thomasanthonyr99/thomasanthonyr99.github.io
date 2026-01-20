import { useEffect, useRef } from 'react'

export const CursorParticles = () => {
    const canvasRef = useRef(null)
    const particles = useRef([])
    const cursor = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 })
    const animationFrameId = useRef()

    // Configuration: Minimal Luxury Colors (White, Silver, Soft Gold)
    const COLORS = ['#ffffff', '#e0e0e0', '#f0f0f0', '#d4af37'] // White/Silver/Gold 
    const TRAIL_LENGTH = 50

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let width = window.innerWidth
        let height = window.innerHeight

        const handleResize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        const handleMouseMove = (e) => {
            cursor.current.x = e.clientX
            cursor.current.y = e.clientY

            // COMET LOGIC: Spawn particles between last position and current position
            // This fills the gaps when moving fast
            const dist = Math.hypot(e.clientX - cursor.current.lastX, e.clientY - cursor.current.lastY)
            const steps = Math.floor(dist / 2) // One particle every 2 pixels of movement

            if (steps > 0) {
                for (let i = 0; i < steps; i++) {
                    const t = i / steps
                    const x = cursor.current.lastX + (e.clientX - cursor.current.lastX) * t
                    const y = cursor.current.lastY + (e.clientY - cursor.current.lastY) * t

                    // Widen the spread for a dispersing comet tail
                    const spread = 8 // Increased from 2
                    spawnParticle(
                        x + (Math.random() - 0.5) * spread,
                        y + (Math.random() - 0.5) * spread
                    )
                }
            }

            cursor.current.lastX = e.clientX
            cursor.current.lastY = e.clientY
        }
        window.addEventListener('mousemove', handleMouseMove)

        const spawnParticle = (x, y) => {
            if (particles.current.length >= 150) particles.current.shift() // More particles for denser tail

            particles.current.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 2, // Higher velocity for wider spread
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 4 + 2, // Larger particles
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                life: 1.0,
                decay: 0.01 + Math.random() * 0.02 // Slower decay for longer tail
            })
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            // Iterate backwards to allow removal
            for (let i = particles.current.length - 1; i >= 0; i--) {
                const p = particles.current[i]

                p.x += p.vx
                p.y += p.vy
                p.life -= p.decay
                p.size *= 0.95 // Shrink as it fades (comet tail taper)

                if (p.life <= 0) {
                    particles.current.splice(i, 1)
                    continue
                }

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.globalAlpha = p.life
                ctx.fill()
                ctx.globalAlpha = 1.0
            }

            animationFrameId.current = requestAnimationFrame(render)
        }

        animationFrameId.current = requestAnimationFrame(render)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId.current)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'screen'
            }}
        />
    )
}
