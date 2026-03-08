"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-20">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-8">
            Bienes Raíces de Lujo en México
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-8 leading-tight text-balance">
            VS Bienes Raíces
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            Descubre propiedades exclusivas que transformarán tu estilo de vida. 
            Experiencia, confianza y resultados excepcionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/propiedades">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-medium">
                Ver Propiedades
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contacto">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 font-medium border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Contactar
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
