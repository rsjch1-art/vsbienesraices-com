import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-serif text-3xl font-bold tracking-tight text-primary">VS</span>
              <span className="font-serif text-lg">Bienes Raíces</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Tu socio de confianza en bienes raíces de lujo en México. 
              Más de 15 años de experiencia en el mercado inmobiliario.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/propiedades" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="/registrar" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Registrar Propiedad
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Tipos de Propiedad</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/propiedades?tipo=casa" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Casas
                </Link>
              </li>
              <li>
                <Link href="/propiedades?tipo=departamento" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Departamentos
                </Link>
              </li>
              <li>
                <Link href="/propiedades?tipo=terreno" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Terrenos
                </Link>
              </li>
              <li>
                <Link href="/propiedades?tipo=comercial" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Comerciales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Av. Paseo de la Reforma 500<br />
                  Col. Juárez, Ciudad de México
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-background/70 text-sm">+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-background/70 text-sm">info@vsbienesraices.mx</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-center text-background/50 text-sm">
            © {new Date().getFullYear()} VS Bienes Raíces. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
