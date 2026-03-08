"use client"

import { use, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PropertyProvider, useProperties } from '@/lib/property-context'
import { AdminProvider } from '@/lib/admin-context'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Bed, Bath, Maximize, ArrowLeft, Phone, Mail, Calendar } from 'lucide-react'

const typeLabels = {
  casa: 'Casa',
  departamento: 'Departamento',
  terreno: 'Terreno',
  comercial: 'Comercial'
}

function PropertyDetailContent({ id }: { id: string }) {
  const { properties } = useProperties()
  
  const property = useMemo(() => {
    return properties.find(p => p.id === id)
  }, [properties, id])

  if (!property) {
    notFound()
  }

  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }).format(property.price)

  const formattedDate = new Date(property.createdAt).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-28 pb-8 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/propiedades" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Propiedades
          </Link>
        </div>
      </section>

      {/* Property Content */}
      <section className="pb-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-8">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
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

              {/* Title and Location */}
              <div className="mb-8">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-lg">{property.location}</span>
                </div>
              </div>

              {/* Features */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Características
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bed className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-foreground">{property.bedrooms}</p>
                          <p className="text-sm text-muted-foreground">Recámaras</p>
                        </div>
                      </div>
                    )}
                    {property.bathrooms > 0 && (
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bath className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-foreground">{property.bathrooms}</p>
                          <p className="text-sm text-muted-foreground">Baños</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Maximize className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{property.area}</p>
                        <p className="text-sm text-muted-foreground">m² construidos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Publicado</p>
                        <p className="text-sm text-muted-foreground">{formattedDate}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Descripción
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-28">
                <CardContent className="p-6">
                  <p className="font-serif text-3xl font-bold text-primary mb-6">
                    {formattedPrice}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <Button className="w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar Ahora
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h3 className="font-medium text-foreground mb-4">Contacto Directo</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>+52 55 1234 5678</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>info@vsbienesraices.mx</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return (
    <AdminProvider>
      <PropertyProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <PropertyDetailContent id={id} />
          </main>
          <Footer />
        </div>
      </PropertyProvider>
    </AdminProvider>
  )
}
