"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Menu, X, User, Code, Briefcase, GraduationCap } from "lucide-react"

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Cerrar menú mobile al cambiar tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Variantes para animaciones
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      } 
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 shadow-lg shadow-primary/5' 
          : 'bg-background/80'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Selector de Tema */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="neon-border rounded-full p-1">
              <ThemeToggle />
            </div>
          </motion.div>

          {/* Navegación Desktop */}
          <div className="hidden lg:block">
            <motion.nav
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-8"
            >
              {[
                { href: "#about", label: "Sobre mí", icon: User },
                { href: "#skills", label: "Habilidades", icon: Code },
                { href: "#projects", label: "Proyectos", icon: Briefcase },
                { href: "#journey", label: "Trayectoria", icon: GraduationCap },
                { href: "#contact", label: "Contacto", icon: User },
              ].map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </div>

          {/* Espacio para mantener el balance */}
          <div className="w-10"></div>

          {/* Botón Menú Móvil */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full neon-border"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#00F2FF]" />
            ) : (
              <Menu className="w-5 h-5 text-[#00F2FF]" />
            )}
          </motion.button>
        </div>
      </div>
      
      {/* Menú Móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                {[
                  { href: "#about", label: "Sobre mí", icon: User },
                  { href: "#skills", label: "Habilidades", icon: Code },
                  { href: "#projects", label: "Proyectos", icon: Briefcase },
                  { href: "#journey", label: "Trayectoria", icon: GraduationCap },
                  { href: "#contact", label: "Contacto", icon: User },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 p-3 hover:bg-background/80 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5 text-[#00F2FF]" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 