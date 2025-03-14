"use client"

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { theme } = useTheme()
  const animationFrameIdRef = useRef<number | undefined>(undefined)
  const particlesRef = useRef<Array<{
    x: number,
    y: number,
    vx: number,
    vy: number
  }>>([])
  
  // Detector de dispositivo móvil
  const isMobileRef = useRef(false)

  useEffect(() => {
    // Detectar si es dispositivo móvil
    isMobileRef.current = window.innerWidth < 768

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Ajustar el tamaño del canvas
    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 2
      
      // Actualizar detección de dispositivo móvil
      isMobileRef.current = window.innerWidth < 768
      
      initParticles() // Reinicializar partículas cuando cambie el tamaño
    }

    // Configuración
    const particleCount = isMobileRef.current ? 30 : 50
    const connectionDistance = isMobileRef.current ? 200 : 300
    const particleRadius = theme === 'dark' ? 3 : 4
    const baseSpeed = 0.12 // Reducida la velocidad aún más
    
    // Colores
    const neonBlue = theme === 'dark' ? '0, 242, 255' : '0, 162, 255'
    const particleOpacity = theme === 'dark' ? 1 : 0.6
    const lineOpacity = theme === 'dark' ? 0.4 : 0.5

    // Inicializar partículas
    function initParticles() {
      if (!canvas) return
      particlesRef.current = Array.from({ length: particleCount }, () => {
        const angle = Math.random() * Math.PI * 2
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.cos(angle) * baseSpeed,
          vy: Math.sin(angle) * baseSpeed
        }
      })
    }

    // Optimización de rendimiento: dibujar conexiones con menos frecuencia
    let frameCount = 0
    
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      frameCount++
      const drawConnections = frameCount % (isMobileRef.current ? 3 : 2) === 0
      
      particlesRef.current.forEach(particle => {
        // Actualizar posición
        particle.x += particle.vx
        particle.y += particle.vy

        // Rebote simple en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
        }

        // Mantener partículas dentro del canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Dibujar partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particleRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${neonBlue}, ${particleOpacity})`
        
        // Reducir sombras en móviles para mejor rendimiento
        if (!isMobileRef.current) {
          ctx.shadowColor = `rgba(${neonBlue}, 1)`
          ctx.shadowBlur = 15
        }
        
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Dibujar conexiones solo en ciertos frames para optimizar
      if (drawConnections) {
        particlesRef.current.forEach((p1, i) => {
          // Limitar número de conexiones para optimizar
          const limit = isMobileRef.current ? 3 : 5
          particlesRef.current.slice(i + 1, i + limit).forEach(p2 => {
            const dx = p1.x - p2.x
            const dy = p1.y - p2.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle = `rgba(${neonBlue}, ${lineOpacity * (1 - distance / connectionDistance)})`
              ctx.lineWidth = theme === 'dark' ? 2 : 2.5
              
              // Reducir sombras en móviles para mejor rendimiento
              if (!isMobileRef.current) {
                ctx.shadowColor = `rgba(${neonBlue}, 0.5)`
                ctx.shadowBlur = 10
              }
              
              ctx.stroke()
              ctx.shadowBlur = 0
            }
          })
        })
      }

      animationFrameIdRef.current = requestAnimationFrame(animate)
    }

    // Inicializar y comenzar animación
    window.addEventListener('resize', handleResize)
    handleResize()
    animate()

    // Cleanup
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])

  // Manejar el movimiento del mouse de forma separada
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: theme === 'dark' ? 0.5 : 0.3 }}
    />
  )
} 