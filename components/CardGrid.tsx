"use client"
import NumericalCard from "./NumericalCard";

export default function CardGrid({items,onOpen}:{items:any[],onOpen:(i:any)=>void}){
  if(!items.length) return <div className="text-center text-gray-400 py-12">No numericals found.</div>
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {items.map(it=> (
          <NumericalCard key={it.id} item={it} onOpen={onOpen} />
        ))}
      </div>
    </div>
  )
}
