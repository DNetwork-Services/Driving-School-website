import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Documents } from '@/components/documents'
import { Insurance } from '@/components/insurance'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { FloatingBar, StickyWhatsApp } from '@/components/floating-bar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Documents />
        <Insurance />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Mobile bottom navigation & Desktop WhatsApp CTA */}
      <FloatingBar />
      <StickyWhatsApp />
      
      {/* Bottom padding for mobile floating bar */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  )
}
