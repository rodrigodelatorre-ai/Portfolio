"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Youtube, ArrowRight } from "lucide-react"

// Datos de proyectos
const projects = [
  {
    id: "cognitiveds",
    title: "CognitiveDS",
    description: "Agencia de IA especializada en desarrollo de soluciones personalizadas.",
    category: "IA & Desarrollo",
    image: "/images/Cognitiveds.webp",
    details: "CognitiveDS es una agencia especializada en la creación de soluciones de inteligencia artificial para empresas. Ofrece consultoría, agentes autónomos y soluciones personalizadas para transformar negocios.",
    tech: ["Next.js", "TypeScript", "OpenAI", "LangChain", "Serverless"],
    links: [
      { type: "site", url: "https://www.cognitiveds.ai/" },
    ],
    preview: true
  },
  {
    id: "alquimia",
    title: "AlquimIA Elite",
    description: "Comunidad exclusiva para entusiastas y profesionales de IA.",
    category: "Comunidad",
    image: "/images/AlquimIA.webp",
    details: "AlquimIA Elite es una comunidad exclusiva donde expertos y entusiastas de la IA comparten conocimientos, recursos y oportunidades para crecer profesionalmente en el sector.",
    tech: ["Next.js", "Skool", "n8n", "Cursor"],
    links: [
      { type: "site", url: "https://www.skool.com/alquimia-elite/about" },
    ]
  },
  {
    id: "youtube",
    title: "Canal de YouTube",
    description: "Contenido educativo sobre inteligencia artificial, tecnología y desarrollo.",
    category: "Educación",
    image: "/images/AlquimIA.webp",
    details: "Canal de YouTube especializado en tutoriales, guías y análisis sobre inteligencia artificial, programación y últimas tendencias tecnológicas.",
    tech: ["Educación", "Tutoriales", "IA", "Tecnología"],
    links: [
      { type: "youtube", url: "https://www.youtube.com/channel/UCWmREz2V0nyIQcE7EQCvevQ" },
    ],
    preview: true
  }
]

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  
  return (
    <section id="projects" className="py-20 relative">
      {/* Fondo con efecto de degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Proyectos</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explorando los límites de la tecnología a través de proyectos innovadores
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card 
                className="h-full overflow-hidden neon-border relative group cursor-pointer"
                onClick={() => setActiveProject(project.id)}
              >
                {/* Overlay del proyecto */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />
                
                {/* Imagen o Preview */}
                <div className="w-full h-48 relative">
                  {project.preview ? (
                    project.id === "cognitiveds" ? (
                      <iframe
                        src="https://www.cognitiveds.ai"
                        className="w-full h-full border-0"
                        style={{
                          pointerEvents: 'none',
                          width: '100%',
                          height: '100%',
                          maxWidth: 'unset',
                          transform: 'scale(1)',
                          transformOrigin: 'top center',
                        }}
                      />
                    ) : project.id === "youtube" ? (
                      <iframe
                        src="https://www.youtube.com/embed?listType=user_uploads&list=UCWmREz2V0nyIQcE7EQCvevQ"
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-700"
                      />
                    )
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-700"
                    />
                  )}
                </div>
                
                {/* Contenido */}
                <div className="p-6 relative z-20">
                  <div className="mb-2">
                    <span className="text-xs font-medium bg-background/80 text-[#00F2FF] px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#00F2FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-background/50 border border-border px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs bg-background/50 border border-border px-2 py-1 rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Ver más */}
                  <div className="flex items-center justify-end mt-4 text-sm font-medium text-[#00F2FF] group-hover:translate-x-1 transition-transform">
                    <span>Ver detalles</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Modal de detalle de proyecto */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-3xl max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === activeProject)
                if (!project) return null
                
                return (
                  <Card className="p-0 overflow-hidden relative">
                    <button 
                      className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                      onClick={() => setActiveProject(null)}
                    >
                      ✕
                    </button>
                    
                    {/* Cabecera con imagen */}
                    <div className="w-full h-64 relative">
                      {project.preview ? (
                        project.id === "cognitiveds" ? (
                          <iframe
                            src="https://www.cognitiveds.ai"
                            className="w-full h-full border-0"
                            style={{
                              pointerEvents: 'none',
                              width: '100%',
                              height: '100%',
                              maxWidth: 'unset',
                              transform: 'scale(1)',
                              transformOrigin: 'top center',
                            }}
                          />
                        ) : project.id === "youtube" ? (
                          <iframe
                            src="https://www.youtube.com/embed?listType=user_uploads&list=UCWmREz2V0nyIQcE7EQCvevQ"
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        )
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="mb-2">
                          <span className="text-xs font-medium bg-background/80 text-[#00F2FF] px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                    
                    {/* Contenido */}
                    <div className="p-6">
                      <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                        <p className="text-lg text-muted-foreground">{project.description}</p>
                        <h4 className="text-lg font-semibold mt-6 mb-3">Sobre el proyecto</h4>
                        <p>{project.details}</p>
                        
                        <h4 className="text-lg font-semibold mt-6 mb-3">Tecnologías</h4>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tech.map((tech, i) => (
                            <span 
                              key={i} 
                              className="text-sm bg-background/50 border border-border px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <h4 className="text-lg font-semibold mt-6 mb-3">Enlaces</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.links.map((link, i) => {
                            const LinkIcon = link.type === 'github' 
                              ? Github 
                              : link.type === 'youtube' 
                                ? Youtube 
                                : ExternalLink
                                
                            return (
                              <Link
                                key={i}
                                href={link.url}
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 hover:bg-background border border-border transition-colors"
                              >
                                <LinkIcon className="w-4 h-4" />
                                <span>
                                  {link.type === 'site' 
                                    ? 'Visitar sitio' 
                                    : link.type === 'github' 
                                      ? 'Ver código' 
                                      : 'Ver canal'}
                                </span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 