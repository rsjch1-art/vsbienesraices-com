"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PropertyCard } from '@/components/property-card'
import { useProperties } from '@/lib/property-context'

export function FeaturedProperties() {
  const { properties } = useProperties()
  const featuredProperties = properties.filter(p => p.featured).slice(0, 3)

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Propiedades Destacadas
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
              Exclusividad y Elegancia
            </h2>
          </div>
          <Link href="/propiedades">
            <Button variant="outline" className="group">
              Ver Todas
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {featuredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No hay propiedades destacadas en este momento.</p>
          </div>
        )}
      </div>
    </section>
  )
}
