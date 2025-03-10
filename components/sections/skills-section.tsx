"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"

// Categorías de habilidades
const skillCategories = [
  {
    id: "ai",
    name: "IA & ML",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "LangChain", level: 95 },
      { name: "Agentes IA", level: 90 },
      { name: "Prompt Engineering", level: 95 },
      { name: "OpenAI API", level: 90 },
      { name: "HuggingFace", level: 85 },
      { name: "TensorFlow", level: 80 },
    ]
  },
  {
    id: "frontend",
    name: "Frontend",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "ShadcnUI", level: 85 },
    ]
  },
  {
    id: "backend",
    name: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 90 },
      { name: "API REST/GraphQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "Serverless", level: 90 },
    ]
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "GitHub Actions", level: 80 },
      { name: "Monitoring", level: 75 },
    ]
  }
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)
  const { theme } = useTheme()
  
  // Encuentra la categoría activa
  const currentCategory = skillCategories.find(cat => cat.id === activeCategory) || skillCategories[0]
  
  return (
    <section id="skills" className="py-20 relative">
      {/* Fondo con patrón */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px"
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
            <span className="relative z-10">Habilidades</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conjunto completo de habilidades técnicas y conocimientos especializados
          </p>
        </motion.div>
        
        {/* Tabs de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-5 py-3 rounded-xl font-medium transition-all
                ${activeCategory === category.id 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                  : 'bg-background/50 text-muted-foreground border border-border hover:bg-background/80'}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* Contenido de habilidades */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 neon-border overflow-hidden relative">
            {/* Gradiente de fondo */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${currentCategory.color}`}></div>
            
            <h3 className="text-xl font-bold mb-8 text-center">
              {currentCategory.name}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${currentCategory.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Complemento visual */}
            <div className="absolute bottom-0 right-0 p-8 opacity-10 pointer-events-none">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="120" 
                height="120" 
                viewBox="0 0 24 24" 
                stroke={theme === 'dark' ? "#00F2FF" : "#0066FF"}
                strokeWidth="1" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M12 12h4.5m-4.5 0v4.5m-4.5-9h4.5V3" />
              </svg>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 