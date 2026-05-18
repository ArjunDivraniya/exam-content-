"use client"
import { useEffect, useState } from "react";

export default function BookmarkButton({id}:{id:string}){
  const [bookmarked,setBookmarked] = useState(false)
  useEffect(()=>{
    const b = JSON.parse(localStorage.getItem('bookmarks'||'[]')||'[]')
    setBookmarked(b.includes(id))
  },[id])
  function toggle(){
    const b = JSON.parse(localStorage.getItem('bookmarks')||'[]')
    const set = new Set(b)
    if(set.has(id)){ set.delete(id); setBookmarked(false) } else { set.add(id); setBookmarked(true) }
    localStorage.setItem('bookmarks',JSON.stringify(Array.from(set)))
  }
  return (
    <button onClick={toggle} title="Bookmark" className={`p-2 rounded-md ${bookmarked? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:bg-white/5'}`}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </button>
  )
}
