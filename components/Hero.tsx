'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ArrowRight, Coffee } from 'lucide-react'

const stats = [
  { value: '5+', label: 'Tahun\nBerpengalaman' },
  { value: '10K+', label: 'Pelanggan\nSetia' },
  { value: '3', label: 'Cawangan\ndi JB' },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', { opacity: 0, y: 24, duration: 0.6, delay: 0.4 })
        .from('.hero-title', { opacity: 0, y: 56, duration: 0.85 }, '-=0.25')
        .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.65 }, '-=0.35')
        .from('.hero-stat', { opacity: 0, y: 24, stagger: 0.13, duration: 0.55 }, '-=0.3')
        .from('.hero-btns', { opacity: 0, y: 22, duration: 0.5 }, '-=0.25')
        .from('.hero-img-wrap', { opacity: 0, scale: 0.82, duration: 1, ease: 'back.out(1.3)' }, '-=0.65')
        .from('.hero-float-badge', { opacity: 0, x: -20, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.3')

      // Gentle infinite float for the coffee image
      gsap.to('.hero-img-wrap', {
        y: -16,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.8,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-cream flex items-center pt-24 pb-16 overflow-hidden relative"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-golden/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-coffee-light/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left — Text Content */}
        <div className="space-y-0">
          <div className="hero-badge inline-flex items-center gap-2 bg-coffee-dark/8 border border-coffee-dark/12 text-coffee-mid px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            <Coffee size={13} />
            Warung Kopi Premium Johor Bahru
          </div>

          <h1 className="hero-title font-playfair text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-coffee-dark leading-[1.15] mb-6">
            Discover The<br />Art Of{' '}
            <span className="italic text-golden">Perfect Coffee</span>
          </h1>

          <p className="hero-subtitle text-coffee-mid text-base lg:text-lg leading-relaxed mb-10 max-w-md">
            Nikmati kehangatan kopi asli Malaysia yang diseduh dengan penuh kasih sayang,
            di jantung bandar raya Johor Bahru.{' '}
            <span className="font-semibold text-coffee-dark">Rasa kopi, rasa rumah.</span>
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 mb-11">
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat text-center">
                <div className="font-playfair text-3xl font-bold text-coffee-dark leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] text-coffee-mid mt-1.5 leading-tight whitespace-pre-line">
                  {stat.label}
                </div>
                {i < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-cream-dark" />
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="hero-btns flex gap-4 flex-wrap">
            <button
              onClick={() => {}}
              className="group flex items-center gap-2 bg-coffee-dark text-cream px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-coffee-mid transition-all duration-300 shadow-lg shadow-coffee-dark/25 hover:shadow-coffee-dark/40 hover:-translate-y-0.5"
            >
              Terokai Menu
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {}}
              className="border-2 border-coffee-dark text-coffee-dark px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-coffee-dark hover:text-cream transition-all duration-300 hover:-translate-y-0.5"
            >
              Tentang Kami
            </button>
          </div>
        </div>

        {/* Right — Coffee Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="hero-img-wrap relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-golden/20 scale-110 blur-3xl" />

            {/* Main circular image */}
            <div className="relative w-[320px] h-[320px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden border-[10px] border-cream-dark/50 shadow-2xl shadow-coffee-dark/30">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=85"
                alt="Secangkir kopi susu dengan latte art yang indah"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating info badge */}
            <div className="hero-float-badge absolute -bottom-2 -left-4 lg:bottom-6 lg:-left-10 bg-coffee-dark text-cream px-5 py-3.5 rounded-2xl shadow-2xl shadow-coffee-dark/40">
              <div className="text-[10px] text-cream/55 mb-0.5 tracking-wide uppercase">Terlaris</div>
              <div className="font-playfair font-bold text-sm">Kopi Susu Senja</div>
              <div className="text-golden text-xs font-semibold mt-1">RM 8.90</div>
            </div>

            {/* Small decorative dot ring */}
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full border-4 border-golden/40 bg-cream" />
            <div className="absolute top-10 -right-6 w-5 h-5 rounded-full bg-golden/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
