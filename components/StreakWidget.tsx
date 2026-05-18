"use client"
import { useEffect, useState } from "react";

export default function StreakWidget(){
  const [streak,setStreak] = useState(0)
  useEffect(()=>{
    const s = Number(localStorage.getItem('study_streak')||'0')
    setStreak(s)
  },[])
  return (
    <div className="fixed bottom-6 right-6 bg-white/3 glass rounded-full px-4 py-2 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center text-sm font-semibold">🔥</div>
      <div className="text-sm">
        <div className="text-xs text-gray-300">Study Streak</div>
        <div className="font-medium">{streak} days</div>
      </div>
    </div>
  )
}
