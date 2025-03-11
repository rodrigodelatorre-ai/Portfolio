"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mail, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import { CalBooking } from "@/components/cal-booking"

export function ContactSection() {
  const socialLinks = [
    { 
      name: "Email", 
      icon: Mail, 
      href: "mailto:rodrigodelatorreai@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://www.instagram.com/rodrigodelatorre_ai/",
      color: "from-pink-500 to-purple-500"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/rodrigo-de-la-torre-ai",
      color: "from-sky-500 to-blue-600"
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      href: "https://www.youtube.com/channel/UCWmREz2V0nyIQcE7EQCvevQ",
      color: "from-red-500 to-rose-600" 
    },
  ]
  
  return (
    <section id="contact" className="py-20 relative">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Contacto</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] rounded-full"></span>
          </h2>
          <p className="text-white text-base opacity-90 max-w-2xl mx-auto">
            ¿Interesado en colaborar o tienes alguna pregunta? ¡Contáctame!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Calendario de Cal.com */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="w-full h-full neon-border-full">
              <CalBooking />
            </div>
          </motion.div>
          
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <Card className="p-8 neon-border-full h-full flex flex-col">
              <h3 className="text-xl font-bold mb-6 text-white">Conectemos</h3>
              <p className="text-white text-base opacity-90 mb-6">
                Estoy siempre abierto a nuevas oportunidades, colaboraciones y proyectos interesantes. 
                No dudes en contactarme a través de cualquiera de estos canales.
              </p>
              
              <div className="space-y-4 flex-grow">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <Link
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : "_blank"}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-background/50 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${link.color} flex items-center justify-center`}>
                        <link.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{link.name}</h4>
                        <p className="text-sm text-white opacity-80">
                          {link.name === "Email" 
                            ? "rodrigodelatorreai@gmail.com" 
                            : `@rodrigodelatorre_ai`}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 