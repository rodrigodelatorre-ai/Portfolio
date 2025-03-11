"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"asesoria-con-rodrigo-1-hr"})
      cal("ui", {"hideEventTypeDetails":false,"layout":"week_view"})
    })()
  }, [])
  
  return (
    <Card className="p-8 neon-border h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold">Agenda una asesoría</h3>
      </div>
      
      <div className="h-[500px] w-full">
        <Cal 
          namespace="asesoria-con-rodrigo-1-hr"
          calLink="rodrigo-de-la-torre/asesoria-con-rodrigo-1-hr"
          style={{width:"100%", height:"100%", overflow:"scroll"}}
          config={{"layout":"month_view"}}
        />
      </div>
    </Card>
  )
} 