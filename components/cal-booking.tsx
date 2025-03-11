"use client"

import { useState } from "react"
import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function CalBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"asesoria-con-rodrigo-1-hr"})
      cal("ui", {"hideEventTypeDetails":false,"layout":"week_view"})
    })()
  }, [])
  
  return (
    <>
      <Card className="p-8 neon-border h-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00F2FF] to-[#FF00E5] flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Agenda una asesoría</h3>
        </div>
        
        <div className="h-[500px] w-full overflow-hidden relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
          {/* Capa para hacer clicable sin interactuar con el iframe */}
          <div className="absolute inset-0 z-10"></div>
          
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full flex items-center">
              <span className="text-sm font-medium mr-2">Abrir calendario</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          
          <Cal 
            namespace="asesoria-con-rodrigo-1-hr"
            calLink="rodrigo-de-la-torre/asesoria-con-rodrigo-1-hr"
            style={{width:"100%", height:"100%", overflow:"hidden", pointerEvents: "none"}}
            config={{"layout":"month_view"}}
          />
        </div>
      </Card>
      
      {/* Modal de calendario */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl max-h-[90vh] bg-background rounded-lg shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="text-xl font-bold">Agenda una asesoría con Rodrigo</h3>
                <button 
                  className="w-8 h-8 rounded-full bg-background/50 flex items-center justify-center text-foreground hover:bg-background/70 transition-colors"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>
              </div>
              
              <div className="h-[700px] w-full">
                <Cal 
                  namespace="asesoria-con-rodrigo-1-hr"
                  calLink="rodrigo-de-la-torre/asesoria-con-rodrigo-1-hr"
                  style={{width:"100%", height:"100%"}}
                  config={{"layout":"month_view"}}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 