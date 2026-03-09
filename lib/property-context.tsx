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
  images: string[]
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
title: 'Casa en Venta SMA - 3 MDP',
description: 'Casa en venta por 3,000,000 MXN. ⚠️ NO INCLUYE GASTOS NOTARIALES.',
price: 3000000,
location: 'San Miguel de Allende, Guanajuato',
bedrooms: 3,
bathrooms: 2,
area: 180,
type: 'casa',
images: [
'/Venta SMA 3 MDP (15).jpg',
'/Venta SMA 3 MDP (14).jpg',
'/Venta SMA 3 MDP (16).jpg',
'/Venta SMA 3 MDP (9).jpg',
'/Venta SMA 3 MDP (6).jpg',
'/Venta SMA 3 MDP (5).jpg',
'/Venta SMA 3 MDP (4).jpg',
'/Venta SMA 3 MDP (3).jpg',
'/Venta SMA 3 MDP (2).jpg',
'/Venta SMA 3 MDP (1).jpg',
'/Venta SMA 3 MDP (10).jpg'
],
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
