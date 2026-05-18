"use client"
import { useState } from "react";

const categories = ["All","CPU Scheduling","Memory Management","Deadlock","Performance","Paging"]

export default function SearchFilter({onSearch, onCategory}:{onSearch:(s:string)=>void,onCategory:(c:string)=>void}){
  const [q,setQ] = useState("")
  const [cat,setCat] = useState('All')
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4">
        <div className="flex-1 relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <input value={q} onChange={(e)=>{setQ(e.target.value); onSearch(e.target.value)}} placeholder="Search numericals by topic or keyword" className="pl-10 pr-4 py-3 w-full rounded-lg bg-white/3 border border-white/6 text-white placeholder:text-gray-400 text-sm sm:text-base" />
        </div>
        <div className="flex w-full flex-wrap gap-2 md:justify-end">
          {categories.map(c=> (
            <button key={c} onClick={()=>{setCat(c); onCategory(c)}} className={`whitespace-nowrap px-3 py-2 rounded-full text-sm ${cat===c? 'bg-gradient-to-r from-indigo-600 to-cyan-400 text-white' : 'bg-white/3 text-gray-200'}`}>{c}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
