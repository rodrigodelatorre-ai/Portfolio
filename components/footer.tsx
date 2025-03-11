"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Linkedin, Youtube, Mail, ChevronUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { 
      icon: Mail, 
      href: "mailto:rodrigodelatorreai@gmail.com",
      label: "Email"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/rodrigodelatorre_ai/",
      label: "Instagram"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/rodrigo-de-la-torre-ai",
      label: "LinkedIn"
    },
    { 
      icon: Youtube, 
      href: "https://www.youtube.com/channel/UCWmREz2V0nyIQcE7EQCvevQ",
      label: "YouTube" 
    },
  ]
  
  const footerLinks = [
    {
      title: "Secciones",
      links: [
        { name: "Inicio", href: "#top" },
        { name: "Sobre mí", href: "#about" },
        { name: "Proyectos", href: "#projects" },
        { name: "Habilidades", href: "#skills" },
        { name: "Trayectoria", href: "#journey" },
        { name: "Contacto", href: "#contact" },
      ]
    },
    {
      title: "Proyectos",
      links: [
        { name: "CognitiveDS", href: "https://www.cognitiveds.ai/" },
        { name: "AlquimIA Elite", href: "https://www.skool.com/alquimia-elite/about" },
        { name: "Canal YouTube", href: "https://www.youtube.com/channel/UCWmREz2V0nyIQcE7EQCvevQ" },
      ]
    },
  ]
  
  return (
    <footer className="relative pt-20 pb-10 border-t border-border">
      {/* Botón de volver arriba */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link 
          href="#top"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-background border border-border hover:border-[#00F2FF] transition-colors shadow-lg neon-border"
        >
          <ChevronUp className="w-6 h-6 text-[#00F2FF]" />
        </Link>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <Link 
              href="#top" 
              className="inline-block text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FF] to-[#FF00E5]"
            >
              Rodrigo De La Torre
            </Link>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Desarrollador de IA y creador de contenido, especializado en construir 
              soluciones tecnológicas avanzadas utilizando inteligencia artificial.
            </p>
            
            {/* Iconos sociales */}
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : "_blank"}
                    aria-label={link.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors border border-border"
                  >
                    <link.icon className="w-5 h-5 text-[#00F2FF]" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Enlaces de navegación */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h3 className="font-medium text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Línea divisoria */}
        <div className="h-px w-full bg-border my-8" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Rodrigo De La Torre. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <Link 
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidad.
            </Link>
            
            <div className="text-muted-foreground">•</div>
            
            <Link 
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terminos de Servicio.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 