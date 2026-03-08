"use client"

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PropertyCard } from '@/components/property-card'
import { PropertyProvider, useProperties } from '@/lib/property-context'
import { AdminProvider } from '@/lib/admin-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, SlidersHorizontal } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function PropertiesContent() {
  const { properties } = useProperties()
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [priceSort, setPriceSort] = useState<string>('newest')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProperties = useMemo(() => {
    let filtered = [...properties]

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(
        p => p.title.toLowerCase().includes(searchLower) ||
             p.location.toLowerCase().includes(searchLower) ||
             p.description.toLowerCase().includes(searchLower)
      )
    }

    // Type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(p => p.type === typeFilter)
    }

    // Sort
    switch (priceSort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case 'oldest':
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        break
    }

    return filtered
  }, [properties, search, typeFilter, priceSort])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Catálogo de Propiedades
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Encuentra Tu Propiedad Ideal
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Explora nuestra selección exclusiva de propiedades de lujo en las mejores ubicaciones de México.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-[73px] z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por ubicación o nombre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center w-full lg:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtros
              </Button>

              <div className={`flex flex-wrap gap-4 w-full lg:w-auto ${showFilters ? 'flex' : 'hidden lg:flex'}`}>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-full sm:w-[160px]">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los tipos</SelectItem>
                    <SelectItem value="casa">Casas</SelectItem>
                    <SelectItem value="departamento">Departamentos</SelectItem>
                    <SelectItem value="terreno">Terrenos</SelectItem>
                    <SelectItem value="comercial">Comerciales</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceSort} onValueChange={setPriceSort}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Más recientes</SelectItem>
                    <SelectItem value="oldest">Más antiguos</SelectItem>
                    <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                    <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <p className="text-sm text-muted-foreground ml-auto">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'propiedad' : 'propiedades'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No se encontraron propiedades con los filtros seleccionados.
              </p>
              <Button variant="outline" onClick={() => {
                setSearch('')
                setTypeFilter('all')
                setPriceSort('newest')
              }}>
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default function PropertiesPage() {
  return (
    <AdminProvider>
      <PropertyProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <PropertiesContent />
          </main>
          <Footer />
        </div>
      </PropertyProvider>
    </AdminProvider>
  )
}
