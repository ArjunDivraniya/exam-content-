"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StudyModal({item,onClose}:{item:any|null,onClose:()=>void}){
  const [mounted,setMounted] = useState(false)
  useEffect(()=>{ setMounted(true) },[])
  if(!item) return null

  const renderConcept = (ce:any)=>{
    if(!ce) return null
    if(typeof ce === 'string') return <div className="mt-2 prose prose-invert max-w-none text-sm">{ce}</div>
    if(typeof ce === 'object'){
      const title = ce.title || null
      const detail = ce.detailed_explanation || Object.values(ce).join(' ')
      return (
        <div className="mt-2 max-w-none text-sm">
          {title && <div className="font-semibold text-sm text-indigo-200">{title}</div>}
          <div className="mt-1 prose prose-invert text-sm">{detail}</div>
        </div>
      )
    }
    return <div className="mt-2 prose prose-invert max-w-none text-sm">{String(ce)}</div>
  }

  const conceptText = (()=>{
    const ce = item.concept_explanation
    if(!ce) return ''
    if(typeof ce === 'string') return ce
    if(typeof ce === 'object') return [ce.title, ce.detailed_explanation].filter(Boolean).join(' ')
    return String(ce)
  })()
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6">
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="relative z-50 w-full max-w-3xl max-h-[92dvh] overflow-y-auto overscroll-contain glass rounded-2xl p-4 sm:p-6 shadow-2xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold leading-tight">{item.topic}</h2>
            <div className="mt-2 text-xs sm:text-sm text-gray-300">Estimated reading: {Math.max(1, Math.round((conceptText.split(' ').length)/200))} min • Last studied: <span className="font-medium">—</span></div>
          </div>
          <button onClick={onClose} className="self-start text-gray-300 rounded-full border border-white/10 px-3 py-1 text-sm">Close</button>
        </div>
        <section className="mt-4">
          <h3 className="text-sm font-medium text-indigo-300">Topic Overview</h3>
          {renderConcept(item.concept_explanation)}
        </section>
        <section className="mt-4">
          <h3 className="text-sm font-medium text-indigo-300">Problem Statement</h3>
          <pre className="mt-2 p-3 mono-box bg-black/20 rounded text-sm whitespace-pre-wrap break-words">{item.problem_statement}</pre>
        </section>
        <section className="mt-4">
          <h3 className="text-sm font-medium text-indigo-300">Step-by-Step Solution</h3>
          <div className="mt-2 space-y-3">
            {(() => {
              const steps = Array.isArray(item.solution_steps)
                ? item.solution_steps
                : item.solution_steps && typeof item.solution_steps === 'object'
                ? Object.values(item.solution_steps)
                : []
              return steps.map((s:any,i:number)=> (
                <motion.div key={i} initial={{opacity:0, x:-8}} animate={{opacity:1,x:0}} className="p-3 rounded-md bg-white/3">
                  <div className="font-semibold">Step {i+1}</div>
                  <div className="text-sm text-gray-200 mt-1 whitespace-pre-wrap break-words">{s}</div>
                </motion.div>
              ))
            })()}
          </div>
        </section>
        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-indigo-300">Exam Insight</h3>
            <div className="mt-2 p-3 rounded bg-gradient-to-r from-indigo-700/30 to-cyan-700/10 text-sm sm:text-base whitespace-pre-wrap break-words">{item.exam_insight}</div>
          </div>
          <div className="w-full md:w-56">
            <h4 className="text-sm font-medium text-indigo-300">Quick Revision</h4>
            <ul className="mt-2 text-sm text-gray-300 list-disc ml-4 space-y-1">
              <li>Key concept highlight</li>
              <li>Important formula</li>
            </ul>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
