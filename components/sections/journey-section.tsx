"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap, Star } from "lucide-react"
import { useTheme } from "next-themes"

// Datos de la trayectoria actualizados
const journeyItems = [
  {
    id: "journey1",
    year: "2023 - Presente",
    title: "Founder & CEO",
    organization: "CognitiveDS & AlquimIA Elite",
    description: "Fundador y director ejecutivo de dos proyectos de impacto: CognitiveDS, una agencia especializada en soluciones de IA para empresas, y AlquimIA Elite, comunidad exclusiva para profesionales y entusiastas de la inteligencia artificial.",
    icon: Briefcase,
    type: "work",
  },
  {
    id: "journey2",
    year: "2024 - Presente",
    title: "Creador de Contenido",
    organization: "YouTube",
    description: "Desarrollo y producción de contenido educativo sobre inteligencia artificial, automatización y tecnologías emergentes. Tutoriales, análisis y guías prácticas para ayudar a otros a entender y aprovechar el potencial de las nuevas tecnologías.",
    icon: Star,
    type: "content",
  },
  {
    id: "journey3",
    year: "2023 - Presente",
    title: "AI Developer",
    organization: "Proyectos Independientes",
    description: "Desarrollo de soluciones avanzadas basadas en inteligencia artificial, incluyendo sistemas multiagente, procesamiento de lenguaje natural, y automatizaciones utilizando las últimas tecnologías y frameworks de IA.",
    icon: Briefcase,
    type: "work",
  },
  {
    id: "journey4",
    year: "2022 - 2023",
    title: "IoT & Robots Developer",
    organization: "Sector Tecnológico",
    description: "Diseño y desarrollo de soluciones tecnológicas que combinan hardware y software para la automatización de procesos industriales. Implementación de sistemas IoT para monitoreo en tiempo real y control de dispositivos conectados.",
    icon: Briefcase,
    type: "work",
  },
  {
    id: "journey5",
    year: "2022",
    title: "Ingeniería Mecatrónica",
    organization: "Universidad Tecnológica",
    description: "Formación académica en ingeniería mecatrónica, combinando elementos de mecánica, electrónica, informática y control. Desarrollo de proyectos multidisciplinares que sentaron las bases para mi posterior especialización en tecnologías avanzadas.",
    icon: GraduationCap,
    type: "education",
  }
]

export function JourneySection() {
  const { theme } = useTheme()
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  
  // Función para determinar el color según el tipo
  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "from-cyan-500 to-blue-500";
      case "education":
        return "from-violet-500 to-purple-500";
      case "community":
        return "from-amber-500 to-orange-500";
      case "content":
        return "from-emerald-500 to-green-500";
      default:
        return "from-[#00F2FF] to-[#FF00E5]";
    }
  }
  
  // Efecto para activar el primer item al cargar
  useEffect(() => {
    if (journeyItems.length > 0 && !activeItem) {
      setActiveItem(journeyItems[0].id)
    }
  }, [activeItem])
  
  return (
    <section id="journey" className="py-20 relative">
      {/* Fondo con efecto de patrón */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: theme === 'dark' 
            ? `linear-gradient(rgba(0, 242, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 255, 0.05) 1px, transparent 1px)` 
            : `linear-gradient(rgba(0, 162, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 162, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Trayectoria</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi camino profesional en el mundo de la tecnología y la inteligencia artificial
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-12 gap-8">
          {/* Línea de tiempo (lateral en desktop, superior en móvil) */}
          <motion.div 
            className="md:col-span-4 overflow-auto pb-4 md:pb-0 md:pr-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            ref={timelineRef}
          >
            <div className="flex md:flex-col gap-4 md:gap-0 min-w-max md:min-w-0">
              {journeyItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`relative flex items-center ${index !== journeyItems.length - 1 ? 'md:pb-8' : ''}`}
                >
                  {/* Conector vertical (solo en desktop) */}
                  {index !== journeyItems.length - 1 && (
                    <div className="hidden md:block absolute top-8 bottom-0 left-5 w-0.5 bg-border"></div>
                  )}
                  
                  <button
                    onClick={() => setActiveItem(item.id)}
                    className={`flex items-center gap-3 md:gap-4 px-4 py-3 rounded-xl transition-all ${
                      activeItem === item.id 
                        ? 'bg-background/80 border-border border shadow-lg' 
                        : 'hover:bg-background/50'
                    }`}
                  >
                    <div 
                      className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center ${
                        activeItem === item.id 
                          ? `bg-gradient-to-br ${getTypeColor(item.type)}` 
                          : 'bg-background border border-border'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${activeItem === item.id ? 'text-white' : 'text-muted-foreground'}`} />
                    </div>
                    
                    <div className="text-left">
                      <div className={`text-xs ${activeItem === item.id ? 'text-[#00F2FF] font-medium' : 'text-muted-foreground'}`}>
                        {item.year}
                      </div>
                      <div className={`text-sm font-medium truncate max-w-[150px] ${activeItem === item.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {item.title}
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Detalle del item seleccionado */}
          <motion.div 
            className="md:col-span-8 h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedJourneyDetail
              item={journeyItems.find(item => item.id === activeItem) || journeyItems[0]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Componente para animar los cambios de detalle
function AnimatedJourneyDetail({ item }: { item: typeof journeyItems[0] }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="p-8 h-full neon-border relative overflow-hidden">
        {/* Barra superior de color */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getTypeColor(item.type)}`} />
        
        {/* Ícono decorativo de fondo */}
        <div className="absolute bottom-4 right-4 opacity-5 w-40 h-40 pointer-events-none">
          <item.icon className="w-full h-full" />
        </div>
        
        {/* Contenido */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${getTypeColor(item.type)}`}>
              <item.icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.organization}</p>
            </div>
          </div>
          
          <div className="mb-4 inline-block px-3 py-1 rounded-full text-sm bg-background/50 border border-border">
            {item.year}
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            {item.description}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}

// Función auxiliar para obtener el color por tipo
function getTypeColor(type: string) {
  switch (type) {
    case "work":
      return "from-cyan-500 to-blue-500";
    case "education":
      return "from-violet-500 to-purple-500";
    case "community":
      return "from-amber-500 to-orange-500";
    case "content":
      return "from-emerald-500 to-green-500";
    default:
      return "from-[#00F2FF] to-[#FF00E5]";
  }
} 