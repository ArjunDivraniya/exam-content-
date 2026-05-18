"use client"
import { motion } from "framer-motion";
import BookmarkButton from "./BookmarkButton";

export default function NumericalCard({item,onOpen}:{item:any,onOpen:(i:any)=>void}){
  const getPreview = (it:any)=>{
    if(!it) return ''
    const ce = it.concept_explanation
    if(!ce) return ''
    if(typeof ce === 'string') return ce
    if(typeof ce === 'object'){
      // prefer title, then detailed_explanation, otherwise join values
      if(ce.title) return `${ce.title} — ${ce.detailed_explanation || ''}`
      if(ce.detailed_explanation) return ce.detailed_explanation
      return Object.values(ce).join(' ')
    }
    return String(ce)
  }

  return (
    <motion.article whileHover={{scale:1.02}} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.35}} className="glass rounded-xl p-4 sm:p-5 h-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold leading-snug">{item.topic}</h3>
          <p className="mt-2 text-sm text-gray-300 line-clamp-3 break-words">{getPreview(item)}</p>
        </div>
        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-2 shrink-0">
          <span className="px-2 py-1 text-xs rounded-full bg-white/6">{item.difficulty}</span>
          <BookmarkButton id={item.id} />
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button onClick={()=>onOpen(item)} className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full text-sm text-white">Study Now</button>
        <div className="text-xs text-gray-400 sm:text-right">{item.category}</div>
      </div>
    </motion.article>
  )
}
