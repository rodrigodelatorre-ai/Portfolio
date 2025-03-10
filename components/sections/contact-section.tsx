"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mail, Send, Instagram, Linkedin, Youtube, MessageSquare } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulación de envío (aquí se integraría con un servicio real)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reiniciar formulario después de un tiempo
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({
        name: "",
        email: "",
        message: ""
      })
    }, 5000)
  }
  
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
      href: "https://youtube.com/@RodrigoDeLaTorre-IA",
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Interesado en colaborar o tienes alguna pregunta? ¡Contáctame!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 neon-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Envíame un mensaje</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium block">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-[#00F2FF] focus:ring-1 focus:ring-[#00F2FF] transition-colors outline-none"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-[#00F2FF] focus:ring-1 focus:ring-[#00F2FF] transition-colors outline-none"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium block">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-[#00F2FF] focus:ring-1 focus:ring-[#00F2FF] transition-colors outline-none resize-none"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`
                    w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2
                    ${isSubmitted 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] text-white hover:shadow-lg hover:shadow-[#00F2FF]/20'}
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                      <span>Enviando...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <span>¡Mensaje enviado!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </motion.button>
              </form>
            </Card>
          </motion.div>
          
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-8 neon-border">
              <h3 className="text-xl font-bold mb-6">Conectemos</h3>
              <p className="text-muted-foreground mb-6">
                Estoy siempre abierto a nuevas oportunidades, colaboraciones y proyectos interesantes. 
                No dudes en contactarme a través de cualquiera de estos canales.
              </p>
              
              <div className="space-y-4">
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
                        <h4 className="font-medium">{link.name}</h4>
                        <p className="text-sm text-muted-foreground">
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
            
            {/* Mensaje adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-6 neon-border bg-gradient-to-br from-background to-background/70">
                <p className="text-center font-medium">
                  "Me apasiona combinar la tecnología con la creatividad para construir un futuro mejor."
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 