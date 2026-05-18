"use client"
import { useEffect, useState } from "react";

export default function ProgressBar(){
  const [progress,setProgress] = useState(0)
  useEffect(()=>{
    function handler(){
      const sc = document.documentElement.scrollTop || document.body.scrollTop
      const sh = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const p = sh ? Math.min(100, Math.round((sc/sh)*100)) : 0
      setProgress(p)
    }
    window.addEventListener('scroll', handler)
    handler()
    return ()=> window.removeEventListener('scroll', handler)
  },[])
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div style={{width:`${progress}%`}} className="h-1 bg-gradient-to-r from-indigo-500 to-cyan-400"></div>
    </div>
  )
}
