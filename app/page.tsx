"use client"
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SearchFilter from "../components/SearchFilter";
import CardGrid from "../components/CardGrid";
import StudyModal from "../components/StudyModal";
import StreakWidget from "../components/StreakWidget";

export default function Home(){
  const [items,setItems] = useState<any[]>([])
  const [filtered,setFiltered] = useState<any[]>([])
  const [q,setQ] = useState('')
  const [category,setCategory] = useState('All')
  const [selected,setSelected] = useState<any|null>(null)

  useEffect(()=>{
    fetch('/data.json')
      .then((r) => r.json())
      .then((json) => {
        // Normalize data: support either an array or an object with `os_numericals` key
        let list: any[] = []
        if (Array.isArray(json)) list = json
        else if (Array.isArray(json?.os_numericals)) list = json.os_numericals
        else list = []
        setItems(list)
        setFiltered(list)
      })
      .catch(() => {
        setItems([])
        setFiltered([])
      })
  },[])

  useEffect(()=>{
    const s = q.toLowerCase()
    const normalizeText = (it:any)=>{
      const parts = [it.topic, it.category]
      if(!it.concept_explanation) return parts.join(' ')
      if(typeof it.concept_explanation === 'string') parts.push(it.concept_explanation)
      else if(typeof it.concept_explanation === 'object') parts.push(Object.values(it.concept_explanation).join(' '))
      return parts.join(' ')
    }
    const f = items.filter(it=> normalizeText(it).toLowerCase().includes(s) && (category==='All' || it.category===category))
    setFiltered(f)
  },[q,category,items])

  return (
    <main className="pb-32 overflow-x-hidden">
      <Hero onStart={()=>{ window.scrollTo({top:600,behavior:'smooth'}) }} />
      <SearchFilter onSearch={(s)=>setQ(s)} onCategory={(c)=>setCategory(c)} />
      <CardGrid items={filtered} onOpen={(i)=>setSelected(i)} />
      <StreakWidget />
      <StudyModal item={selected} onClose={()=>setSelected(null)} />
    </main>
  )
}
