'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Bell } from 'lucide-react'

export default function Newsletter() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.newsletter-inner', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 50,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-22 bg-coffee-dark overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-golden/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-coffee-light/10 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center newsletter-inner relative z-10 py-16">
        <div className="inline-flex items-center gap-2 bg-golden/15 border border-golden/25 text-golden px-4 py-2 rounded-full text-xs font-bold tracking-[0.18em] uppercase mb-6">
          <Bell size={12} />
          Kekal Terkini
        </div>

        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5">
          Stay Up To Date On<br />
          <span className="italic text-golden">All News & Offers</span>
        </h2>

        <p className="text-cream/55 mb-10 max-w-sm mx-auto text-[15px] leading-relaxed">
          Daftarkan e-mel anda dan jadilah yang pertama mengetahui promosi eksklusif,
          menu baru, dan acara istimewa di Kopi Senja.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Masukkan e-mel anda..."
            className="flex-1 px-6 py-3.5 rounded-full bg-cream/8 border border-cream/15 text-cream placeholder-cream/35 focus:outline-none focus:border-golden/60 transition-colors duration-200 text-sm"
          />
          <button
            type="button"
            onClick={() => {}}
            className="group flex items-center justify-center gap-2 bg-golden text-cream px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-coffee-light transition-colors duration-300 whitespace-nowrap shadow-lg shadow-golden/25"
          >
            Subscribe
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-cream/25 text-xs mt-4">
          Kami tidak akan menghantar spam. Anda boleh berhenti langganan pada bila-bila masa.
        </p>
      </div>
    </section>
  )
}
