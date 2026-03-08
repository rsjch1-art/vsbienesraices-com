import { Home, Building2, FileText, Users } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Venta de Propiedades',
    description: 'Te ayudamos a vender tu propiedad al mejor precio con estrategias de marketing efectivas y una amplia red de compradores.'
  },
  {
    icon: Building2,
    title: 'Compra de Inmuebles',
    description: 'Encuentra la propiedad ideal para ti o tu familia. Te guiamos en cada paso del proceso de compra.'
  },
  {
    icon: FileText,
    title: 'Asesoría Legal',
    description: 'Contamos con expertos legales que aseguran transacciones seguras y transparentes para tu tranquilidad.'
  },
  {
    icon: Users,
    title: 'Inversión Inmobiliaria',
    description: 'Maximiza tu retorno de inversión con nuestro análisis de mercado y oportunidades exclusivas.'
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Soluciones Integrales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Ofrecemos un servicio completo para todas tus necesidades inmobiliarias, 
            respaldado por años de experiencia y un equipo profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
