import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-secondary rounded-2xl p-12 lg:p-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            ¿Listo para encontrar tu próximo hogar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 text-pretty">
            Contáctanos hoy y descubre cómo podemos ayudarte a encontrar 
            la propiedad perfecta o vender tu inmueble al mejor precio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" className="text-lg px-8 py-6">
                Contactar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/registrar">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Registrar Mi Propiedad
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
