"use client"
import { motion } from "framer-motion";

export default function FloatingOrbs(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 floating-orb"
        style={{left: '10%', top: '-10%'}}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 floating-orb"
        style={{right: '8%', bottom: '-8%'}}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  )
}
