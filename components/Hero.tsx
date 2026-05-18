"use client"
import FloatingOrbs from "./FloatingOrbs";

export default function Hero({onStart}:{onStart?:()=>void}){
  return (
    <section className="relative w-full max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <FloatingOrbs />
      <div className="rounded-2xl gradient-border p-[1px]">
        <div className="glass rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-start gap-6 sm:gap-8">
          <div className="flex-1">
            <h1 className="animate-[fadeUp_0.6s_ease-out_both] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">Master Operating System Numericals</h1>
            <p className="animate-[fadeUp_0.8s_ease-out_both] mt-4 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl">Learn OS Numericals with deep explanations and step-by-step solutions. Designed for exam success with focused study flows.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={onStart} className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-gradient-to-r from-indigo-600 to-cyan-400 text-white px-5 py-3 rounded-full shadow-lg transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]">Start Learning</button>
              <button className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border border-white/10 text-gray-200 px-4 py-3 rounded-full transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]">Explore Topics</button>
            </div>
          </div>
          <div className="animate-[fadeUp_1s_ease-out_both] w-full md:w-80">
            <div className="rounded-xl bg-gradient-to-b from-white/3 to-transparent p-4 glass card-glow">
              <div className="h-40 sm:h-48 bg-black/20 rounded-lg flex items-center justify-center"> 
                <div className="text-center text-sm text-gray-300">Animated study illustration placeholder</div>
              </div>
              <div className="mt-3 text-sm text-gray-300">Track progress, bookmark numericals, and reveal step-by-step solutions.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
