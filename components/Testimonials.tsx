'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Nurul Ain Zulaikha',
    role: 'Pelanggan Setia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    rating: 5,
    text: 'Kopi Susu Senja adalah kopi terbaik yang pernah saya minum di Johor Bahru. Setiap pagi saya mesti singgah ke sini sebelum ke pejabat. Suasana yang cozy dan staff yang mesra membuatkan saya berasa seperti di rumah sendiri.',
  },
  {
    id: 2,
    name: 'Ahmad Farid Hakim',
    role: 'Food Blogger JB',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    rating: 5,
    text: 'Sebagai seorang food blogger, saya telah mencuba banyak kafe di JB. Kopi Senja benar-benar berbeza — kualiti kopi mereka konsisten, dan persekitaran yang hangat sangat menarik. Sangat disyorkan kepada semua!',
  },
  {
    id: 3,
    name: 'Melissa Tan',
    role: 'Pelajar UTM Skudai',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    rating: 5,
    text: 'Tempat terbaik untuk belajar dan kerja! WiFi laju, kopi sedap, dan suasana yang tenang. Americano Johor mereka membantu saya kekal fokus sepanjang hari. Harga pun sangat berpatutan untuk kualiti yang ditawarkan.',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.testi-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
      })
      gsap.from('.testi-card', {
        scrollTrigger: { trigger: '.testi-grid', start: 'top 82%' },
        y: 52,
        opacity: 0,
        stagger: 0.14,
        duration: 0.7,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="testi-header text-center mb-14">
          <span className="text-xs font-bold text-golden tracking-[0.2em] uppercase mb-4 block">
            Kata-Kata Mereka
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-coffee-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-coffee-mid max-w-md mx-auto text-[15px]">
            Kepuasan pelanggan adalah motivasi terbesar kami untuk terus meningkatkan kualiti
            dan pengalaman di Kopi Senja.
          </p>
        </div>

        {/* Cards */}
        <div className="testi-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testi-card relative bg-cream-dark/35 border border-cream-dark/60 rounded-3xl p-7 hover:shadow-xl hover:shadow-coffee-dark/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Decorative quote */}
              <Quote
                size={40}
                className="absolute top-5 right-5 text-golden/20"
                strokeWidth={1.5}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" className="text-golden" />
                ))}
              </div>

              {/* Text */}
              <p className="text-coffee-mid text-[14px] leading-relaxed mb-6 relative z-10">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-golden/30">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-coffee-dark text-sm">{t.name}</div>
                  <div className="text-[11px] text-coffee-mid mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
