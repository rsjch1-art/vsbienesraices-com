"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  type: 'casa' | 'departamento' | 'terreno' | 'comercial'
  image: string
  featured: boolean
  createdAt: string
}

interface PropertyContextType {
  properties: Property[]
  addProperty: (property: Omit<Property, 'id' | 'createdAt'>) => void
  deleteProperty: (id: string) => void
  updateProperty: (id: string, property: Partial<Property>) => void
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined)

const defaultProperties: Property[] = [
  {
    id: '1',
    title: 'Residencia de Lujo en Polanco',
    description: 'Espectacular residencia con acabados de primera, amplios espacios y jardín privado. Ubicada en una de las zonas más exclusivas de la ciudad.',
    price: 15500000,
    location: 'Polanco, Ciudad de México',
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    type: 'casa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Penthouse con Vista al Mar',
    description: 'Increíble penthouse con terraza panorámica y vista espectacular al océano. Amenidades de primer nivel.',
    price: 22000000,
    location: 'Cancún, Quintana Roo',
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    type: 'departamento',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Casa Moderna en San Pedro',
    description: 'Diseño arquitectónico contemporáneo con materiales de alta calidad y tecnología inteligente integrada.',
    price: 18500000,
    location: 'San Pedro Garza García, Nuevo León',
    bedrooms: 4,
    bathrooms: 5,
    area: 520,
    type: 'casa',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Departamento en Santa Fe',
    description: 'Elegante departamento en torre de lujo con amenidades completas y excelente ubicación.',
    price: 8500000,
    location: 'Santa Fe, Ciudad de México',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    type: 'departamento',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    featured: false,
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    title: 'Terreno en Valle de Bravo',
    description: 'Terreno premium con vista al lago, ideal para construir la casa de tus sueños en un entorno natural único.',
    price: 4500000,
    location: 'Valle de Bravo, Estado de México',
    bedrooms: 0,
    bathrooms: 0,
    area: 2500,
    type: 'terreno',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    featured: false,
    createdAt: new Date().toISOString()
  },
  {
    id: '6',
    title: 'Villa Frente al Mar',
    description: 'Exclusiva villa con acceso directo a la playa, piscina infinity y acabados de diseñador.',
    price: 35000000,
    location: 'Puerto Vallarta, Jalisco',
    bedrooms: 6,
    bathrooms: 7,
    area: 650,
    type: 'casa',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    featured: true,
    createdAt: new Date().toISOString()
  }
]

export function PropertyProvider({ children }: { children: ReactNode }) {
  const [properties, setProperties] = useState<Property[]>(defaultProperties)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('vs-properties')
    if (stored) {
      setProperties(JSON.parse(stored))
    }
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('vs-properties', JSON.stringify(properties))
    }
  }, [properties, isInitialized])

  const addProperty = (property: Omit<Property, 'id' | 'createdAt'>) => {
    const newProperty: Property = {
      ...property,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }
    setProperties(prev => [newProperty, ...prev])
  }

  const deleteProperty = (id: string) => {
    setProperties(prev => prev.filter(p => p.id !== id))
  }

  const updateProperty = (id: string, updates: Partial<Property>) => {
    setProperties(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p))
  }

  return (
    <PropertyContext.Provider value={{ properties, addProperty, deleteProperty, updateProperty }}>
      {children}
    </PropertyContext.Provider>
  )
}

export function useProperties() {
  const context = useContext(PropertyContext)
  if (!context) {
    throw new Error('useProperties must be used within a PropertyProvider')
  }
  return context
}
