"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MapPin, Bed, Bath, Maximize } from "lucide-react"

export function PropertyCard({ property }: any) {

// Asegura que siempre haya un arreglo de imágenes
const images = property.images && property.images.length
? property.images
: property.image
? [property.image]
: ["/placeholder.jpg"]

const [index, setIndex] = useState(0)

const next = () => {
setIndex((prev) => (prev + 1) % images.length)
}

const prev = () => {
setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
}

const formattedPrice = new Intl.NumberFormat("es-MX", {
style: "currency",
currency: "MXN",
maximumFractionDigits: 0
}).format(property.price)

return (
<Link href={`/propiedades/${property.id}`}> <div className="border rounded-xl overflow-hidden hover:shadow-xl transition">

```
    <div className="relative h-64">

      <Image
        src={images[index]}
        alt={property.title}
        fill
        className="object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault()
              prev()
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.preventDefault()
              next()
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded"
          >
            ›
          </button>
        </>
      )}
    </div>

    <div className="p-5">

      <p className="text-sm text-gray-500 flex gap-1 items-center">
        <MapPin size={14} />
        {property.location}
      </p>

      <h3 className="text-lg font-semibold mt-1">
        {property.title}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {property.description}
      </p>

      <div className="flex gap-4 mt-3 text-sm">

        {property.bedrooms && (
          <span className="flex items-center gap-1">
            <Bed size={16} />
            {property.bedrooms}
          </span>
        )}

        {property.bathrooms && (
          <span className="flex items-center gap-1">
            <Bath size={16} />
            {property.bathrooms}
          </span>
        )}

        {property.area && (
          <span className="flex items-center gap-1">
            <Maximize size={16} />
            {property.area} m²
          </span>
        )}

      </div>

      <div className="mt-4 pt-3 border-t">

        <p className="text-xl font-bold text-blue-600">
          {formattedPrice}
        </p>

        <p className="text-xs text-gray-500">
          El precio no incluye gastos de escrituración ni impuestos.
        </p>

      </div>

    </div>

  </div>
</Link>
```

)
}
