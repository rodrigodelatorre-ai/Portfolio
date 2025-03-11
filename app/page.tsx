"use client"

import { HeaderNav } from '@/components/header-nav'
import { NeuralBackground } from '@/components/neural-background'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { JourneySection } from '@/components/sections/journey-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Fondo Neural */}
      <NeuralBackground />
      
      {/* Navegación */}
      <HeaderNav />
      
      {/* Sección de Hero */}
      <HeroSection />
      
      {/* Sección Sobre Mí */}
      <AboutSection />
      
      {/* Sección de Proyectos - Movida antes que Habilidades */}
      <ProjectsSection />
      
      {/* Sección de Habilidades */}
      <SkillsSection />
      
      {/* Sección de Trayectoria */}
      <JourneySection />
      
      {/* Sección de Contacto */}
      <ContactSection />
      
      {/* Pie de Página */}
      <Footer />
    </main>
  )
}
