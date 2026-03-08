"use client"

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PropertyProvider } from '@/lib/property-context'
import { AdminProvider } from '@/lib/admin-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Home, Building2, LandPlot, Store } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'

const propertyTypes = [
  { value: 'casa', label: 'Casa', icon: Home },
  { value: 'departamento', label: 'Departamento', icon: Building2 },
  { value: 'terreno', label: 'Terreno', icon: LandPlot },
  { value: 'comercial', label: 'Comercial', icon: Store },
]

export default function RegisterPropertyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    propertyTitle: '',
    propertyType: '',
    propertyLocation: '',
    propertyPrice: '',
    propertyArea: '',
    bedrooms: '',
    bathrooms: '',
    description: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('[v0] Property registration submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <AdminProvider>
        <PropertyProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-32 pb-24 bg-secondary">
              <div className="mx-auto max-w-2xl px-6 lg:px-8">
                <Card className="text-center">
                  <CardContent className="p-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                      ¡Registro Exitoso!
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      Hemos recibido la información de tu propiedad. 
                      Un asesor se pondrá en contacto contigo en las próximas 24 horas.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>
                      Registrar Otra Propiedad
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </main>
            <Footer />
          </div>
        </PropertyProvider>
      </AdminProvider>
    )
  }

  return (
    <AdminProvider>
      <PropertyProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-secondary">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
                    Vende con Nosotros
                  </p>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                    Registra Tu Propiedad
                  </h1>
                  <p className="text-muted-foreground text-lg text-pretty">
                    Completa el formulario y nuestro equipo de expertos te ayudará a vender 
                    tu propiedad al mejor precio del mercado.
                  </p>
                </div>
              </div>
            </section>

            {/* Form Section */}
            <section className="py-16 bg-background">
              <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <form onSubmit={handleSubmit}>
                  {/* Owner Information */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="font-serif">Información del Propietario</CardTitle>
                      <CardDescription>
                        Ingresa tus datos de contacto para que podamos comunicarnos contigo.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="ownerName">Nombre Completo</FieldLabel>
                          <Input
                            id="ownerName"
                            placeholder="Juan Pérez García"
                            value={formData.ownerName}
                            onChange={(e) => handleChange('ownerName', e.target.value)}
                            required
                          />
                        </Field>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field>
                            <FieldLabel htmlFor="ownerEmail">Correo Electrónico</FieldLabel>
                            <Input
                              id="ownerEmail"
                              type="email"
                              placeholder="juan@email.com"
                              value={formData.ownerEmail}
                              onChange={(e) => handleChange('ownerEmail', e.target.value)}
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="ownerPhone">Teléfono</FieldLabel>
                            <Input
                              id="ownerPhone"
                              type="tel"
                              placeholder="+52 55 1234 5678"
                              value={formData.ownerPhone}
                              onChange={(e) => handleChange('ownerPhone', e.target.value)}
                              required
                            />
                          </Field>
                        </div>
                      </FieldGroup>
                    </CardContent>
                  </Card>

                  {/* Property Information */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="font-serif">Información de la Propiedad</CardTitle>
                      <CardDescription>
                        Describe las características principales de tu propiedad.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="propertyTitle">Título de la Propiedad</FieldLabel>
                          <Input
                            id="propertyTitle"
                            placeholder="Ej: Casa de Lujo en Polanco"
                            value={formData.propertyTitle}
                            onChange={(e) => handleChange('propertyTitle', e.target.value)}
                            required
                          />
                        </Field>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field>
                            <FieldLabel htmlFor="propertyType">Tipo de Propiedad</FieldLabel>
                            <Select
                              value={formData.propertyType}
                              onValueChange={(value) => handleChange('propertyType', value)}
                              required
                            >
                              <SelectTrigger id="propertyType">
                                <SelectValue placeholder="Seleccionar tipo" />
                              </SelectTrigger>
                              <SelectContent>
                                {propertyTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    <span className="flex items-center gap-2">
                                      <type.icon className="h-4 w-4" />
                                      {type.label}
                                    </span>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="propertyLocation">Ubicación</FieldLabel>
                            <Input
                              id="propertyLocation"
                              placeholder="Ej: Polanco, Ciudad de México"
                              value={formData.propertyLocation}
                              onChange={(e) => handleChange('propertyLocation', e.target.value)}
                              required
                            />
                          </Field>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field>
                            <FieldLabel htmlFor="propertyPrice">Precio Estimado (MXN)</FieldLabel>
                            <Input
                              id="propertyPrice"
                              type="number"
                              placeholder="15,000,000"
                              value={formData.propertyPrice}
                              onChange={(e) => handleChange('propertyPrice', e.target.value)}
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="propertyArea">Área (m²)</FieldLabel>
                            <Input
                              id="propertyArea"
                              type="number"
                              placeholder="350"
                              value={formData.propertyArea}
                              onChange={(e) => handleChange('propertyArea', e.target.value)}
                              required
                            />
                          </Field>
                        </div>

                        {formData.propertyType !== 'terreno' && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Field>
                              <FieldLabel htmlFor="bedrooms">Recámaras</FieldLabel>
                              <Select
                                value={formData.bedrooms}
                                onValueChange={(value) => handleChange('bedrooms', value)}
                              >
                                <SelectTrigger id="bedrooms">
                                  <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                    <SelectItem key={num} value={num.toString()}>
                                      {num} {num === 1 ? 'recámara' : 'recámaras'}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="bathrooms">Baños</FieldLabel>
                              <Select
                                value={formData.bathrooms}
                                onValueChange={(value) => handleChange('bathrooms', value)}
                              >
                                <SelectTrigger id="bathrooms">
                                  <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                    <SelectItem key={num} value={num.toString()}>
                                      {num} {num === 1 ? 'baño' : 'baños'}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </Field>
                          </div>
                        )}

                        <Field>
                          <FieldLabel htmlFor="description">Descripción</FieldLabel>
                          <Textarea
                            id="description"
                            placeholder="Describe las características especiales de tu propiedad, acabados, amenidades, etc."
                            rows={5}
                            value={formData.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                            required
                          />
                        </Field>
                      </FieldGroup>
                    </CardContent>
                  </Card>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Registro
                  </Button>
                </form>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </PropertyProvider>
    </AdminProvider>
  )
}
