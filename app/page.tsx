import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SpecialSection from '@/components/SpecialSection'
import BestSelling from '@/components/BestSelling'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SpecialSection />
      <BestSelling />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
