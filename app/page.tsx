"use client"

import { NeonTitle } from '@/components/ui/neon-title'
import { HeaderNav } from '@/components/header-nav'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { NeuralBackground } from '@/components/neural-background'

export default function Home() {
  return (
    <main className="h-screen bg-background relative overflow-hidden">
      {/* Fondo Neural */}
      <NeuralBackground />

      {/* Header */}
      <HeaderNav />

      {/* Contenido Principal */}
      <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-5rem)] flex flex-col justify-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-8 mb-12"
        >
          <div className="text-center">
            <NeonTitle text="< Code the future />" className="mb-4" />
            <h2 className="text-4xl font-bold mb-2 neon-text" data-text="Rodrigo De La Torre">
              Rodrigo De La Torre
            </h2>
            <p className="text-xl text-muted-foreground">AI Developer & Content Creator</p>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] rounded-full mt-4" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-48 h-48 shrink-0"
          >
            <Image
              src="/images/Rodrigodelatorre.webp"
              alt="Rodrigo De La Torre"
              fill
              className="rounded-full object-cover border-4 border-[#00F2FF] neon-border"
            />
          </motion.div>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-3 gap-6">
          {/* CognitiveDS Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="https://www.cognitiveds.ai/" target="_blank" className="block h-full">
              <Card className="p-4 neon-border card-hover h-full">
                <h3 className="text-lg font-bold mb-2">CognitiveDS</h3>
                <p className="text-sm text-muted-foreground mb-2">Escala tu negocio con soluciones fullstack - agentes</p>
                <div className="relative h-[200px] rounded-lg overflow-hidden bg-black">
                  <iframe
                    src="https://www.cognitiveds.ai"
                    className="w-full h-full border-0 scale-[1.02]"
                    style={{
                      pointerEvents: 'none',
                      transform: 'scale(1.02)',
                      transformOrigin: '0 0',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-medium">Ver sitio web</span>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* AlquimIA Elite Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="https://www.skool.com/alquimia-elite/about" target="_blank" className="block h-full">
              <Card className="p-4 neon-border card-hover h-full">
                <h3 className="text-lg font-bold mb-2">AlquimIA Elite</h3>
                <p className="text-sm text-muted-foreground mb-2">La comunidad para apasionados por la IA construyendo el futuro</p>
                <div className="relative h-[200px] rounded-lg overflow-hidden bg-black">
                  <Image
                    src="/images/AlquimIA.webp"
                    alt="AlquimIA Elite"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-medium">Únete a la comunidad</span>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* YouTube Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="https://youtube.com/@RodrigoDeLaTorre-IA" target="_blank" className="block h-full">
              <Card className="p-4 neon-border card-hover h-full">
                <h3 className="text-lg font-bold mb-2">YouTube</h3>
                <p className="text-sm text-muted-foreground mb-2">Tutoriales y contenido sobre IA</p>
                <div className="relative h-[200px] rounded-lg overflow-hidden bg-black">
                  <iframe
                    src="https://www.youtube.com/embed?listType=user_uploads&list=RodrigoDeLaTorre-IA&autoplay=1&mute=1"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
