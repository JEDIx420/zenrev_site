"use client"

import React, { useEffect, useRef } from "react"

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Check if dark mode
        const isDark = () => document.documentElement.classList.contains("dark")

        // Particle class
        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            opacity: number

            constructor() {
                this.x = Math.random() * (canvas?.width || 0)
                this.y = Math.random() * (canvas?.height || 0)
                this.size = Math.random() * 3 + 1
                this.speedX = (Math.random() - 0.5) * 0.3
                this.speedY = (Math.random() - 0.5) * 0.3
                this.opacity = Math.random() * 0.4 + 0.3
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                // Wrap around screen
                if (canvas && this.x > canvas.width) this.x = 0
                if (this.x < 0 && canvas) this.x = canvas.width
                if (canvas && this.y > canvas.height) this.y = 0
                if (this.y < 0 && canvas) this.y = canvas.height
            }

            draw() {
                if (!ctx) return
                const color = isDark() ? "147, 197, 253" : "33, 120, 241" // blue-300 for dark, brand-blue for light
                ctx.fillStyle = `rgba(${color}, ${this.opacity})`
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        // Create particles
        const particleCount = 50
        const particles: Particle[] = []
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        // Animation loop
        let animationFrameId: number
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle) => {
                particle.update()
                particle.draw()
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0"
        />
    )
}
