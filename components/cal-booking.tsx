"use client"

import { useState, useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { useTheme } from "next-themes"

export function CalBooking() {
  const [calApiLoaded, setCalApiLoaded] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi()
        if (cal) {
          cal("ui", {
            theme: resolvedTheme === "dark" ? "dark" : "light",
            styles: {
              branding: { brandColor: "#00F2FF" }
            },
          })
          setCalApiLoaded(true)
        }
      } catch (error) {
        console.error("Error loading Cal.com API:", error)
      }
    })()
  }, [resolvedTheme])
  
  return (
    <Card className="p-8 neon-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">Agenda una asesoría</h3>
      </div>
      
      <div className="w-full">
        {calApiLoaded && (
          <div className="w-full">
            <Cal 
              calLink="rodrigo-de-la-torre/asesoria-1-1-con-rodrigo-de-la-torre"
              style={{
                width:"100%", 
                minHeight:"700px",
                '--cal-brand-color': '#00F2FF'
              } as any}
              config={{
                theme: resolvedTheme === "dark" ? "dark" : "light",
                layout: "month_view"
              }}
            />
          </div>
        )}
      </div>
    </Card>
  )
} 