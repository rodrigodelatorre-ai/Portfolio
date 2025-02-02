"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import { InstagramIcon, LinkedinIcon, YoutubeIcon, MailIcon } from "lucide-react"
import { Button } from "./ui/button"

export function HeaderNav() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header-nav"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="w-10">
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-center space-x-4 flex-1">
          <Button variant="ghost" size="lg" className="neon-border w-12 h-12" asChild>
            <Link href="mailto:rodrigodelatorreai@gmail.com" target="_blank">
              <MailIcon className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="neon-border w-12 h-12" asChild>
            <Link href="https://www.instagram.com/rodrigodelatorre_ai/" target="_blank">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="neon-border w-12 h-12" asChild>
            <Link href="https://www.linkedin.com/in/rodrigo-de-la-torre-ai/" target="_blank">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="neon-border w-12 h-12" asChild>
            <Link href="https://youtube.com/@RodrigoDeLaTorre-IA" target="_blank">
              <YoutubeIcon className="h-6 w-6" />
            </Link>
          </Button>
        </div>
        <div className="w-10" /> {/* Espacio para mantener el centrado */}
      </div>
    </motion.header>
  )
} 