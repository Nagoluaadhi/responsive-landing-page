import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
