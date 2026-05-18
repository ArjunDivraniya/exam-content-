"use client"
export default function FloatingOrbs(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 floating-orb animate-[floatOrb_8s_ease-in-out_infinite]" style={{left: '10%', top: '-10%'}} />
      <div className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 floating-orb animate-[floatOrb_10s_ease-in-out_infinite]" style={{right: '8%', bottom: '-8%', animationDelay: '1.5s'}} />
    </div>
  )
}
