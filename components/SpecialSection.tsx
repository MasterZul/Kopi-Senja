'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle } from 'lucide-react'

const highlights = [
  'Biji kopi pilihan dari ladang tempatan',
  'Diseduh segar setiap 30 minit',
  'Barista bertauliah antarabangsa',
]

export default function SpecialSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Section 1
      gsap.from('.spec-text-1', {
        scrollTrigger: { trigger: '.spec-block-1', start: 'top 78%' },
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
      gsap.from('.spec-img-1', {
        scrollTrigger: { trigger: '.spec-block-1', start: 'top 78%' },
        x: 60,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
      })

      // Section 2
      gsap.from('.spec-img-2', {
        scrollTrigger: { trigger: '.spec-block-2', start: 'top 78%' },
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
      gsap.from('.spec-text-2', {
        scrollTrigger: { trigger: '.spec-block-2', start: 'top 78%' },
        x: 60,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 bg-cream-dark/25">
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        {/* Block 1 — Coffee Heaven */}
        <div className="spec-block-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="spec-text-1">
            <span className="inline-block text-xs font-bold text-golden tracking-[0.2em] uppercase mb-4">
              Kelazatan Kopi
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-coffee-dark leading-tight mb-6">
              Coffee Heaven<br />
              <span className="italic text-golden">di Johor Bahru</span>
            </h2>
            <p className="text-coffee-mid leading-relaxed mb-5 text-[15px]">
              Setiap tegukan adalah perjalanan rasa yang memukau — dari biji kopi pilihan yang
              dipanggang sempurna, hingga susu segar yang menghasilkan buih halus. Di Kopi Senja,
              kami percaya bahawa secangkir kopi yang baik mampu mengubah seluruh hari anda.
            </p>
            <p className="text-coffee-mid leading-relaxed mb-8 text-[15px]">
              Barista kami terlatih dengan teknik penyeduhan terbaik, memastikan setiap cawan
              yang sampai ke tangan anda adalah karya yang penuh dedikasi.
            </p>

            <ul className="space-y-3 mb-9">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-coffee-dark text-sm font-medium">
                  <CheckCircle size={16} className="text-golden flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => {}}
              className="bg-golden text-cream px-7 py-3 rounded-full font-semibold text-sm hover:bg-coffee-mid transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-golden/20"
            >
              Ketahui Lebih Lanjut
            </button>
          </div>

          {/* Image */}
          <div className="spec-img-1 relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full bg-golden/12 blur-3xl pointer-events-none" />
            <div className="relative rounded-[2rem] overflow-hidden h-80 lg:h-[420px] shadow-2xl shadow-coffee-dark/20">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=85"
                alt="Biji kopi dan cawan kopi yang hangat"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-5 -right-5 bg-cream border-2 border-cream-dark rounded-2xl px-5 py-3 shadow-lg">
              <div className="text-xs text-coffee-mid mb-0.5">Kualiti</div>
              <div className="font-playfair font-bold text-coffee-dark text-sm">Premium Blend</div>
            </div>
          </div>
        </div>

        {/* Block 2 — Our Story */}
        <div className="spec-block-2 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="spec-img-2 relative order-2 lg:order-1">
            <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full bg-coffee-light/15 blur-3xl pointer-events-none" />
            <div className="relative rounded-[2rem] overflow-hidden h-80 lg:h-[420px] shadow-2xl shadow-coffee-dark/20">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=85"
                alt="Suasana dalam Kopi Senja yang hangat dan selesa"
                fill
                className="object-cover"
              />
            </div>
            {/* Year badge */}
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-coffee-dark flex flex-col items-center justify-center shadow-lg">
              <span className="font-playfair text-lg font-bold text-cream leading-none">Est.</span>
              <span className="font-playfair text-sm font-bold text-golden">2019</span>
            </div>
          </div>

          {/* Text */}
          <div className="spec-text-2 order-1 lg:order-2">
            <span className="inline-block text-xs font-bold text-golden tracking-[0.2em] uppercase mb-4">
              Kisah Kami
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-coffee-dark leading-tight mb-6">
              Kopi Senja —<br />
              <span className="italic text-golden">Rumah Kita Semua</span>
            </h2>
            <p className="text-coffee-mid leading-relaxed mb-5 text-[15px]">
              Bermula dari sebuah gerai kecil di sudut Jalan Wong Ah Fook, Kopi Senja kini telah
              menjadi destinasi kopi kegemaran ramai warga Johor Bahru. Pengasas kami, En. Hafiz,
              bermula dengan satu impian: menciptakan ruang di mana kopi berkualiti bertemu
              suasana yang mesra dan hangat.
            </p>
            <p className="text-coffee-mid leading-relaxed mb-9 text-[15px]">
              Hari ini, kami berbangga melayani lebih dari 10,000 pelanggan setia yang kembali
              semula bukan sekadar kerana kopi, tetapi kerana kehangatan yang terasa seperti
              rumah sendiri.
            </p>
            <button
              onClick={() => {}}
              className="border-2 border-coffee-dark text-coffee-dark px-7 py-3 rounded-full font-semibold text-sm hover:bg-coffee-dark hover:text-cream transition-all duration-300 hover:-translate-y-0.5"
            >
              Baca Kisah Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
