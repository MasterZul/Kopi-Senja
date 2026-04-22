'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShoppingCart, Star } from 'lucide-react'

const categories = ['Semua', 'Panas', 'Sejuk', 'Snek']

const products = [
  {
    id: 1,
    name: 'Kopi Susu Senja',
    category: 'Panas',
    price: 'RM 8.90',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=85',
    tag: 'Terlaris',
  },
  {
    id: 2,
    name: 'Americano Johor',
    category: 'Panas',
    price: 'RM 7.90',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&q=85',
    tag: 'Popular',
  },
  {
    id: 3,
    name: 'Espresso Pekat',
    category: 'Panas',
    price: 'RM 6.90',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=85',
    tag: null,
  },
  {
    id: 4,
    name: 'Es Kopi Senja',
    category: 'Sejuk',
    price: 'RM 9.90',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=85',
    tag: 'Baru',
  },
  {
    id: 5,
    name: 'Teh Tarik Harum',
    category: 'Panas',
    price: 'RM 5.90',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca3d3aba4?w=500&q=85',
    tag: 'Klasik',
  },
  {
    id: 6,
    name: 'Kek Lapis Sarawak',
    category: 'Snek',
    price: 'RM 4.90',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=85',
    tag: null,
  },
]

export default function BestSelling() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const hasAnimatedHeader = useRef(false)

  const filtered =
    activeCategory === 'Semua' ? products : products.filter((p) => p.category === activeCategory)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (!hasAnimatedHeader.current) {
        gsap.from('.bs-header', {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          y: 40,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
          onComplete: () => { hasAnimatedHeader.current = true },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Animate cards each time the filtered list changes
    gsap.fromTo(
      '.product-card',
      { opacity: 0, y: 48, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.15)',
      }
    )
  }, [activeCategory])

  return (
    <section ref={sectionRef} className="py-24 bg-coffee-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="bs-header text-center mb-12">
          <span className="text-xs font-bold text-golden tracking-[0.2em] uppercase mb-4 block">
            Menu Pilihan
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-cream mb-4">
            Best Selling Item
          </h2>
          <p className="text-cream/55 max-w-md mx-auto text-[15px]">
            Pilihan yang telah dicintai ribuan pelanggan setia kami setiap hari.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-golden text-cream shadow-lg shadow-golden/25'
                  : 'bg-cream/8 text-cream/60 border border-cream/10 hover:bg-cream/15 hover:text-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="product-card group bg-[#1e0d04] border border-cream/8 rounded-2xl overflow-hidden hover:border-golden/35 hover:shadow-2xl hover:shadow-golden/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-golden text-cream text-[11px] font-bold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] text-cream/40 bg-cream/6 border border-cream/8 px-2.5 py-0.5 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="currentColor" className="text-golden" />
                    <span className="text-xs text-cream/55">{product.rating}</span>
                  </div>
                </div>

                <h3 className="font-playfair text-lg font-bold text-cream mb-1">{product.name}</h3>
                <p className="text-golden font-semibold text-base mb-4">{product.price}</p>

                <button
                  onClick={() => {}}
                  className="w-full flex items-center justify-center gap-2 bg-cream/6 text-cream/80 border border-cream/12 py-2.5 rounded-xl text-sm font-semibold hover:bg-golden hover:text-cream hover:border-golden transition-all duration-300"
                >
                  <ShoppingCart size={14} />
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button
            onClick={() => {}}
            className="border border-cream/25 text-cream/70 px-8 py-3 rounded-full text-sm font-semibold hover:border-golden hover:text-golden transition-all duration-300"
          >
            Lihat Semua Menu →
          </button>
        </div>
      </div>
    </section>
  )
}
