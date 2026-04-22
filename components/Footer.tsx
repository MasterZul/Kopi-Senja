'use client'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'

const quickLinks = ['Home', 'Menu', 'About Us', 'Facilities', 'Blog', 'Kerjaya']

export default function Footer() {
  return (
    <footer className="bg-coffee-black pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <div className="font-playfair text-2xl font-bold text-cream">Kopi Senja</div>
              <div className="text-[10px] text-cream/35 tracking-[0.2em] uppercase mt-0.5">
                Johor Bahru
              </div>
            </div>
            <p className="text-cream/45 text-sm leading-relaxed max-w-xs mb-7">
              Kami percaya bahawa secangkir kopi yang sempurna mampu membawa ketenangan
              dan kegembiraan kepada seharian anda. Rasa kopi, rasa rumah.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  onClick={() => {}}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-cream/8 text-cream/50 flex items-center justify-center border border-cream/10 hover:bg-golden hover:text-cream hover:border-golden transition-all duration-300"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream text-sm font-semibold mb-5 tracking-wide">Pautan Pantas</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {}}
                    className="text-cream/45 text-sm hover:text-golden transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream text-sm font-semibold mb-5 tracking-wide">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={14} className="text-golden mt-0.5 flex-shrink-0" />
                <span className="text-cream/45 text-sm leading-relaxed">
                  No. 28, Jalan Wong Ah Fook,<br />
                  Bandar Johor Bahru,<br />
                  80000 Johor Bahru, Johor
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} className="text-golden flex-shrink-0" />
                <button
                  onClick={() => {}}
                  className="text-cream/45 text-sm hover:text-golden transition-colors"
                >
                  +60 7-224 5678
                </button>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} className="text-golden flex-shrink-0" />
                <button
                  onClick={() => {}}
                  className="text-cream/45 text-sm hover:text-golden transition-colors"
                >
                  hello@kopisenja.com.my
                </button>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-6 pt-5 border-t border-cream/8">
              <h5 className="text-cream/50 text-[10px] font-bold uppercase tracking-wider mb-2">
                Waktu Operasi
              </h5>
              <p className="text-cream/35 text-xs leading-relaxed">
                Isnin – Jumaat: 7:00 pagi – 10:00 malam<br />
                Sabtu – Ahad: 8:00 pagi – 11:00 malam
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/25 text-xs">
            © 2024 Kopi Senja Sdn Bhd. Hak cipta terpelihara.
          </p>
          <div className="flex gap-5">
            {['Dasar Privasi', 'Terma & Syarat'].map((link) => (
              <button
                key={link}
                onClick={() => {}}
                className="text-cream/25 text-xs hover:text-cream/50 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
