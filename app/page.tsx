"use client"

import { NeonTitle } from '@/components/ui/neon-title'
import { HeaderNav } from '@/components/header-nav'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { NeuralBackground } from '@/components/neural-background'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme } = useTheme()

  return (
    <main className="min-h-screen bg-background relative">
      <NeuralBackground />
      <HeaderNav />

      {/* Vista Móvil */}
      <div className="lg:hidden relative z-10 container mx-auto px-4 pt-20 pb-20">
        <div className="flex flex-col items-center space-y-6">
          {/* Foto de Perfil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-32"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/Rodrigodelatorre.webp"
                alt="Rodrigo De La Torre"
                fill
                className="rounded-full object-cover border-4 border-[#00F2FF] neon-border"
              />
            </div>
          </motion.div>

          {/* Texto central */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <NeonTitle text="< Code the future />" className="text-2xl mb-2" />
            <h2 className="text-2xl font-bold mb-2 relative">
              <span className="absolute inset-0 text-[#00F2FF]" style={{
                textShadow: theme === 'dark'
                  ? "0 0 10px rgba(0, 242, 255, 0.7), 0 0 20px rgba(0, 242, 255, 0.5)"
                  : "0 0 10px rgba(0, 162, 255, 0.9), 0 0 20px rgba(0, 162, 255, 0.7)"
              }}>
                Rodrigo De La Torre
              </span>
              <span className="relative text-white" style={{
                opacity: theme === 'dark' ? 0.7 : 0.9
              }}>
                Rodrigo De La Torre
              </span>
            </h2>
            <p className="text-base text-muted-foreground mb-4">AI Developer & Content Creator</p>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] rounded-full" />
          </motion.div>

          {/* Grid de Proyectos */}
          <div className="w-full space-y-4 mt-4">
            {/* CognitiveDS Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="https://www.cognitiveds.ai/" target="_blank" className="block">
                <Card className="p-4 neon-border card-hover">
                  <h3 className="text-lg font-bold mb-2">CognitiveDS</h3>
                  <p className="text-sm text-muted-foreground mb-3">Escala tu negocio con soluciones fullstack - agentes</p>
                  <div className="relative h-48 rounded-lg overflow-hidden bg-black">
                    <iframe
                      src="https://www.cognitiveds.ai"
                      className="w-full h-full border-0"
                      style={{
                        pointerEvents: 'none',
                        width: '100%',
                        height: '200%',
                        maxWidth: 'unset',
                        transform: 'scale(0.5)',
                        transformOrigin: 'top center',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="text-white font-medium">Ver sitio web</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>

            {/* AlquimIA Elite Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="https://www.skool.com/alquimia-elite/about" target="_blank" className="block">
                <Card className="p-4 neon-border card-hover">
                  <h3 className="text-lg font-bold mb-2">AlquimIA Elite</h3>
                  <p className="text-sm text-muted-foreground mb-3">La comunidad para apasionados por la IA construyendo el futuro</p>
                  <div className="relative h-48 rounded-lg overflow-hidden bg-black">
                    <Image
                      src="/images/AlquimIA.webp"
                      alt="AlquimIA Elite"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="text-white font-medium">Únete a la comunidad</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>

            {/* YouTube Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="https://youtube.com/@RodrigoDeLaTorre-IA" target="_blank" className="block">
                <Card className="p-4 neon-border card-hover">
                  <h3 className="text-lg font-bold mb-2">YouTube</h3>
                  <p className="text-sm text-muted-foreground mb-3">Tutoriales y contenido sobre IA</p>
                  <div className="relative h-48 rounded-lg overflow-hidden bg-black">
                    <iframe
                      src="https://www.youtube.com/embed/5aA5KOJ17So?autoplay=1&mute=1"
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
      </div>

      {/* Vista Desktop (mantiene el diseño actual) */}
      <div className="hidden lg:block relative z-10 container mx-auto px-4 h-[calc(100vh-4rem)]">
        {/* Hero Section */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center h-[35vh] lg:h-[40vh] pt-20 lg:pt-8">
          {/* Foto de Perfil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 lg:mb-0 lg:ml-12"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-72 lg:h-72">
              <Image
                src="/images/Rodrigodelatorre.webp"
                alt="Rodrigo De La Torre"
                fill
                className="rounded-full object-cover border-4 border-[#00F2FF] neon-border"
              />
            </div>
          </motion.div>

          {/* Texto central */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center lg:text-center flex-1 lg:px-12"
          >
            <NeonTitle text="< Code the future />" className="mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 relative">
              <span className="absolute inset-0 text-[#00F2FF]" style={{
                textShadow: theme === 'dark'
                  ? "0 0 10px rgba(0, 242, 255, 0.7), 0 0 20px rgba(0, 242, 255, 0.5)"
                  : "0 0 10px rgba(0, 162, 255, 0.9), 0 0 20px rgba(0, 162, 255, 0.7)"
              }}>
                Rodrigo De La Torre
              </span>
              <span className="relative text-white" style={{
                opacity: theme === 'dark' ? 0.7 : 0.9
              }}>
                Rodrigo De La Torre
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-4">AI Developer & Content Creator</p>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] rounded-full" />
          </motion.div>

          <div className="hidden lg:block w-72"></div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[55vh] lg:h-[50vh] pb-4">
          {/* CognitiveDS Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="h-full"
          >
            <Link href="https://www.cognitiveds.ai/" target="_blank" className="block h-full">
              <Card className="p-4 neon-border card-hover h-full">
                <h3 className="text-lg font-bold mb-2">CognitiveDS</h3>
                <p className="text-sm text-muted-foreground mb-3">Escala tu negocio con soluciones fullstack - agentes</p>
                <div className="relative flex-1 h-[calc(100%-5rem)] rounded-lg overflow-hidden bg-black">
                  <iframe
                    src="https://www.cognitiveds.ai"
                    className="w-full h-full border-0"
                    style={{
                      pointerEvents: 'none',
                      width: '100%',
                      height: '200%',
                      maxWidth: 'unset',
                      transform: 'scale(0.5)',
                      transformOrigin: 'top center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white font-medium">Ver sitio web</span>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* AlquimIA Elite Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="h-full"
          >
            <Link href="https://www.skool.com/alquimia-elite/about" target="_blank" className="block h-full">
              <Card className="p-4 neon-border card-hover h-full">
                <h3 className="text-lg font-bold mb-2">AlquimIA Elite</h3>
                <p className="text-sm text-muted-foreground mb-3">La comunidad para apasionados por la IA construyendo el futuro</p>
                <div className="relative flex-1 h-[calc(100%-5rem)] rounded-lg overflow-hidden bg-black">
                  <Image
                    src="/images/AlquimIA.webp"
                    alt="AlquimIA Elite"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white font-medium">Únete a la comunidad</span>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* YouTube Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="h-full"
          >
            <Link href="https://youtube.com/@RodrigoDeLaTorre-IA" target="_blank" className="block h-full">
              <Card className="p-4 neon-border card-hover h-full">
                <h3 className="text-lg font-bold mb-2">YouTube</h3>
                <p className="text-sm text-muted-foreground mb-3">Tutoriales y contenido sobre IA</p>
                <div className="relative flex-1 h-[calc(100%-5rem)] rounded-lg overflow-hidden bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/5aA5KOJ17So?autoplay=1&mute=1"
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
