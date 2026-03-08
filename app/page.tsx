import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProperties } from '@/components/home/featured-properties'
import { ServicesSection } from '@/components/home/services-section'
import { StatsSection } from '@/components/home/stats-section'
import { CTASection } from '@/components/home/cta-section'
import { PropertyProvider } from '@/lib/property-context'
import { AdminProvider } from '@/lib/admin-context'

export default function HomePage() {
  return (
    <AdminProvider>
      <PropertyProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <HeroSection />
            <FeaturedProperties />
            <ServicesSection />
            <StatsSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </PropertyProvider>
    </AdminProvider>
  )
}
