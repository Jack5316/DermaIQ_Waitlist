import Header from '@/components/Header'
import WaitlistForm from '@/components/WaitlistForm'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import ClientHydrationFixWrapper from '@/components/ClientHydrationFixWrapper'

export default function Home() {
  return (
    <ClientHydrationFixWrapper>
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <WaitlistForm />
          <Testimonials />
        </div>
        <Footer />
      </main>
    </ClientHydrationFixWrapper>
  )
} 