"use client"

import { motion } from "framer-motion"
import { Terminal, Brain, Rocket, Briefcase } from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 relative">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Sobre mí</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desarrollador de IA y creador de contenido especializado en transformar ideas innovadoras en soluciones tecnológicas de vanguardia
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Imagen y texto principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative mx-auto md:ml-0 w-64 h-64 md:w-80 md:h-80 mb-6 md:mb-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00F2FF] to-[#FF00E5] opacity-20 blur-xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#00F2FF] neon-border">
                <Image
                  src="/images/Rodrigodelatorre.webp"
                  alt="Rodrigo De La Torre"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">
              Construyendo el futuro con inteligencia artificial
            </h3>
            
            <p className="text-muted-foreground mb-4">
              Soy Rodrigo De La Torre, apasionado por la IA y las tecnologías emergentes. Mi misión es democratizar el acceso a la inteligencia artificial, permitiendo a empresas y personas aprovechar todo su potencial.
            </p>
            
            <p className="text-muted-foreground">
              A través de mis proyectos y contenido educativo, busco inspirar y capacitar a otros para que se unan a la revolución tecnológica que está transformando el mundo.
            </p>
            
            {/* Tarjetas de habilidades principales */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {[
                { icon: Terminal, title: "Desarrollo IA", color: "from-cyan-500 to-blue-500" },
                { icon: Brain, title: "Agentes IA", color: "from-pink-500 to-purple-500" },
                { icon: Rocket, title: "Innovación", color: "from-green-500 to-emerald-500" },
                { icon: Briefcase, title: "Consultoría", color: "from-amber-500 to-orange-500" }
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="p-4 flex flex-col items-center justify-center h-full neon-border">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 bg-gradient-to-r ${item.color} text-white`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium text-center">{item.title}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 