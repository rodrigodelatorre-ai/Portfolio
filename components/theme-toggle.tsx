"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Evitar hidratación incorrecta
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-background/30"></div>
      </div>
    )
  }
  
  const isDark = theme === "dark" || resolvedTheme === "dark"
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center relative overflow-hidden"
      aria-label="Cambiar tema"
    >
      <div className="relative w-full h-full">
        {/* Fondo animado */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr"
          animate={{
            background: isDark 
              ? "linear-gradient(to top right, rgba(0, 0, 0, 0.2), rgba(30, 30, 60, 0.4))" 
              : "linear-gradient(to top right, rgba(255, 255, 255, 0.2), rgba(200, 230, 255, 0.4))"
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Iconos con animación */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={false}
            animate={{
              rotate: isDark ? 45 : 0,
              opacity: isDark ? 0 : 1,
              scale: isDark ? 0.5 : 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute"
          >
            <Sun className="h-5 w-5 text-yellow-500" />
          </motion.div>
          
          <motion.div
            initial={false}
            animate={{
              rotate: isDark ? 0 : -45,
              opacity: isDark ? 1 : 0,
              scale: isDark ? 1 : 0.5,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute"
          >
            <Moon className="h-5 w-5 text-[#00F2FF]" />
          </motion.div>
        </div>
        
        {/* Partículas decorativas */}
        {isDark ? (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#00F2FF]"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (i % 2 === 0 ? -1 : 1) * Math.random() * 10],
                  y: [0, -Math.random() * 10],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 0.2,
                }}
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${30 + Math.random() * 40}%`,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-yellow-300"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [(i % 2 === 0 ? -1 : 1) * Math.random() * 10, 0],
                  y: [Math.random() * 10, 0],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 0.2,
                }}
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${30 + Math.random() * 40}%`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.button>
  )
} 