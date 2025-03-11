"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] })

// Metadata debe estar en un archivo separado o usar una solución alternativa en modo cliente
// Ya que no podemos usar export const metadata con "use client"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>Rodrigo De La Torre | AI Developer & Content Creator</title>
        <meta name="description" content="Desarrollador de IA y creador de contenido especializado en transformar ideas innovadoras en soluciones tecnológicas de vanguardia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
