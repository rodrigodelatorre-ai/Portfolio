"use client"

import { useEffect, useState, useRef } from 'react'
import { useTheme } from 'next-themes'

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Ajustar el tamaño del canvas
    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 2
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    // Partículas
    const particles: Array<{x: number, y: number, vx: number, vy: number}> = []
    const particleCount = 50
    const connectionDistance = 300
    const particleRadius = theme === 'dark' ? 3 : 4
    const cursorRadius = 350
    const cursorStrength = 0.0005

    // Color neón azul con opacidad ajustada según el tema
    const neonBlue = theme === 'dark' ? '0, 242, 255' : '0, 162, 255'
    const particleOpacity = theme === 'dark' ? 1 : 0.6
    const lineOpacity = theme === 'dark' ? 0.4 : 0.5

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      })
    }

    // Animación
    let animationFrameId: number

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Actualizar y dibujar partículas
      particles.forEach(particle => {
        if (!ctx || !canvas) return
        particle.x += particle.vx
        particle.y += particle.vy

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Atracción al cursor
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < cursorRadius) {
          const force = (1 - distance / cursorRadius) * cursorStrength
          particle.vx += dx * force
          particle.vy += dy * force
        }

        // Dibujar partícula con glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particleRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${neonBlue}, ${particleOpacity})`
        ctx.shadowColor = `rgba(${neonBlue}, 1)`
        ctx.shadowBlur = 15
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Dibujar conexiones
      particles.forEach((p1, i) => {
        if (!ctx) return
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${neonBlue}, ${lineOpacity * (1 - distance / connectionDistance)})`
            ctx.lineWidth = theme === 'dark' ? 2 : 2.5
            ctx.shadowColor = `rgba(${neonBlue}, 0.5)`
            ctx.shadowBlur = 10
            ctx.stroke()
            ctx.shadowBlur = 0
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Manejar movimiento del cursor
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY + window.scrollY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [theme, mousePosition])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: theme === 'dark' ? 0.5 : 0.3 }}
    />
  )
} 