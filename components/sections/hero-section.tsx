"use client"

import { motion } from "framer-motion"
import { NeonTitle } from '@/components/ui/neon-title'
import Image from "next/image"
import { useTheme } from 'next-themes'
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const { theme } = useTheme()
  
  return (
    <section id="top" className="h-screen relative flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen de perfil - Ahora a la izquierda en desktop, visible también en móvil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto md:mx-0 order-2 md:order-1"
          >
            <div className="relative w-48 h-48 md:w-72 md:h-72 xl:w-96 xl:h-96">
              {/* Blob animado detrás de la imagen */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00F2FF] to-[#FF00E5] opacity-20 blur-2xl animate-pulse"></div>
              
              {/* Elementos decorativos tecnológicos */}
              <motion.div 
                className="absolute -top-8 -right-8 w-16 h-16 opacity-30"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.05, 1, 0.95, 1] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut"
                }}
              >
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="50" stroke="#00F2FF" strokeWidth="2"/>
                  <circle cx="100" cy="100" r="80" stroke="#00F2FF" strokeWidth="1" strokeDasharray="10 10"/>
                  <circle cx="100" cy="100" r="30" stroke="#FF00E5" strokeWidth="3"/>
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-12 w-24 h-24 opacity-30"
                animate={{ 
                  rotate: [0, -15, 0, 15, 0],
                  y: [0, -5, 0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10,
                  ease: "easeInOut"
                }}
              >
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="50" width="100" height="100" stroke="#00F2FF" strokeWidth="2" />
                  <path d="M50 100H150" stroke="#FF00E5" strokeWidth="2" />
                  <path d="M100 50V150" stroke="#FF00E5" strokeWidth="2" />
                  <circle cx="100" cy="100" r="25" stroke="#00F2FF" strokeWidth="2" strokeDasharray="5 5"/>
                </svg>
              </motion.div>
              
              {/* Imagen principal */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#00F2FF] neon-border">
                <Image
                  src="/images/Rodrigodelatorre.webp"
                  alt="Rodrigo De La Torre"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
          
          {/* Texto principal - Ahora a la derecha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-center md:text-left order-1 md:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-6"
            >
              <NeonTitle text="< Code the future />" className="mb-4 text-2xl md:text-3xl" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
              <span className="absolute inset-0 text-[#00F2FF]" style={{
                textShadow: theme === 'dark'
                  ? "0 0 10px rgba(0, 242, 255, 0.7), 0 0 20px rgba(0, 242, 255, 0.5)"
                  : "0 0 10px rgba(0, 162, 255, 0.9), 0 0 20px rgba(0, 162, 255, 0.7)"
              }}>
                Rodrigo De La Torre
              </span>
              <span className="relative text-white" style={{
                opacity: theme === 'dark' ? 0.7 : 0.9
              }}>
                Rodrigo De La Torre
              </span>
            </h1>
            
            <div className="flex flex-col mb-8">
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                AI Developer & Content Creator
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="h-1 md:w-48 mx-auto md:mx-0 bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] rounded-full"
              />
            </div>
            
            <motion.p 
              className="text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Especialista en inteligencia artificial y creador de soluciones 
              tecnológicas que transforman la manera en que interactuamos con la tecnología.
              Fundador de CognitiveDS y AlquimIA Elite.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              {/* Cambiando el orden de los botones y aplicando efecto neón al botón de Contáctame */}
              <Link 
                href="#contact"
                className="px-6 py-3 rounded-full bg-background border border-[#00F2FF] text-[#00F2FF] font-medium transition-all relative neon-text"
                style={{
                  textShadow: "0 0 5px #00F2FF, 0 0 10px #00F2FF",
                }}
              >
                <span className="relative z-10">Contáctame</span>
                <div className="absolute inset-0 rounded-full opacity-20 blur-sm bg-[#00F2FF]"></div>
              </Link>
              
              <Link 
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] text-white font-medium hover:shadow-lg hover:shadow-[#00F2FF]/20 transition-all"
              >
                Ver proyectos
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <Link href="#about" className="w-10 h-10 rounded-full flex items-center justify-center bg-background/20 backdrop-blur-sm border border-border hover:bg-background/40 transition-colors">
            <ArrowDown className="w-5 h-5 text-[#00F2FF]" />
          </Link>
        </motion.div>
        <span className="text-xs text-muted-foreground mt-2">Scroll</span>
      </motion.div>
    </section>
  )
} 