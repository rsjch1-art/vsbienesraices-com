const stats = [
  { value: '15+', label: 'Años de Experiencia' },
  { value: '500+', label: 'Propiedades Vendidas' },
  { value: '98%', label: 'Clientes Satisfechos' },
  { value: '$2B+', label: 'En Transacciones' },
]

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-3">
                {stat.value}
              </p>
              <p className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
