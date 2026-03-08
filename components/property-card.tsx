"use client"

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Bed, Bath, Maximize } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Property } from '@/lib/property-context'

interface PropertyCardProps {
  property: Property
}

const typeLabels = {
  casa: 'Casa',
  departamento: 'Departamento',
  terreno: 'Terreno',
  comercial: 'Comercial'
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }).format(property.price)

  return (
    <Link href={`/propiedades/${property.id}`}>
      <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="secondary" className="bg-background/90 text-foreground backdrop-blur-sm">
              {typeLabels[property.type]}
            </Badge>
            {property.featured && (
              <Badge className="bg-primary text-primary-foreground">
                Destacada
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{property.location}</span>
          </div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {property.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Maximize className="h-4 w-4" />
              <span>{property.area} m²</span>
            </div>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="font-serif text-xl font-bold text-primary">
              {formattedPrice}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
