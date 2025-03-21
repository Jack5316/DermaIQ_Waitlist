import Header from '@/components/Header'
import WaitlistForm from '@/components/WaitlistForm'
import Testimonials from '@/components/Testimonials'
import ClientHydrationFixWrapper from '@/components/ClientHydrationFixWrapper'
import Founders from '@/components/Founders'

export default function Home() {
  return (
    <ClientHydrationFixWrapper>
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <WaitlistForm />
          <div className="my-16"></div>
          <Founders />
          <Testimonials />
        </div>
      </main>
    </ClientHydrationFixWrapper>
  )
} 