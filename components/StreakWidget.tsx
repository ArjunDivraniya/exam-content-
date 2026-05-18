"use client"
import { useEffect, useState } from "react";

export default function StreakWidget(){
  const [streak,setStreak] = useState(0)
  useEffect(()=>{
    const s = Number(localStorage.getItem('study_streak')||'0')
    setStreak(s)
  },[])
  return (
    <div className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 bg-white/3 glass rounded-2xl sm:rounded-full px-4 py-3 flex items-center gap-3 shadow-lg max-w-md sm:max-w-none mx-auto sm:mx-0">
      <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center text-sm font-semibold">🔥</div>
      <div className="text-sm min-w-0">
        <div className="text-xs text-gray-300">Study Streak</div>
        <div className="font-medium truncate">{streak} days</div>
      </div>
    </div>
  )
}
