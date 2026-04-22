'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Menu', 'About Us', 'Facilities']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-header-slide ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm shadow-coffee-dark/10 py-3'
          : 'bg-cream/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none cursor-pointer" onClick={() => {}}>
          <span className="font-playfair text-2xl font-bold text-coffee-dark tracking-tight">
            Kopi Senja
          </span>
          <span className="text-[10px] text-coffee-mid tracking-[0.2em] uppercase font-medium">
            Johor Bahru
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {}}
              className="relative text-coffee-dark font-medium text-sm tracking-wide hover:text-golden transition-colors duration-200 group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-golden group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => {}}
          className="hidden md:block bg-coffee-dark text-cream text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-coffee-mid transition-all duration-300 hover:shadow-lg hover:shadow-coffee-dark/20 hover:-translate-y-0.5"
        >
          Order Now
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-coffee-dark p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream/98 backdrop-blur-md px-6 py-4 border-t border-cream-dark/50 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setMobileOpen(false)}
              className="block w-full text-left py-3 text-coffee-dark font-medium hover:text-golden transition-colors border-b border-cream-dark/30 last:border-0"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => {}}
            className="mt-3 w-full bg-coffee-dark text-cream py-3 rounded-full font-semibold text-sm"
          >
            Order Now
          </button>
        </div>
      </div>
    </header>
  )
}
