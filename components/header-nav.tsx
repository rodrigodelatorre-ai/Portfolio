"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react"
import { Button } from "./ui/button"

export function HeaderNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Botón de tema */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="neon-border rounded-full p-1"
          >
            <ThemeToggle />
          </motion.div>

          {/* Iconos centrados */}
          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-6"
            >
              <Link
                href="mailto:rodrigodelatorreai@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors neon-border"
              >
                <Mail className="w-6 h-6 text-[#00F2FF]" />
              </Link>
              <Link
                href="https://www.instagram.com/rodrigodelatorre_ai/"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors neon-border"
              >
                <Instagram className="w-6 h-6 text-[#00F2FF]" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rodrigo-de-la-torre-ai"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors neon-border"
              >
                <Linkedin className="w-6 h-6 text-[#00F2FF]" />
              </Link>
              <Link
                href="https://youtube.com/@RodrigoDeLaTorre-IA"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors neon-border"
              >
                <Youtube className="w-6 h-6 text-[#00F2FF]" />
              </Link>
            </motion.div>
          </div>

          {/* Espacio para mantener el balance */}
          <div className="w-10"></div>
        </div>
      </div>
    </header>
  )
} 