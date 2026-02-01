import { Icon } from '@iconify/react'

interface ProductCardProps {
  icon: string
  name: string
  description: string
  badge: string
  badgeColor: string
  type: string
}

function ProductCard({ icon, name, description, badge, badgeColor, type }: ProductCardProps) {
  return (
    <div className="group relative rounded-xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/40">
      <div className="flex items-start justify-between mb-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-stone-50 text-stone-900 border border-stone-100">
          <Icon icon={icon} width={24} height={24} />
        </div>
        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium font-geist ${badgeColor}`}>
          {badge}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-stone-900 font-geist">{name}</h3>
      <p className="mt-2 text-sm text-stone-500 leading-relaxed h-[60px] font-geist">{description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-stone-50 pt-4">
        <span className="text-xs font-medium text-stone-400 font-geist">{type}</span>
        <span className="text-xs text-stone-400 group-hover:text-orange-600 transition-colors flex items-center gap-1 font-medium font-geist">
          Läs mer <Icon icon="solar:arrow-right-linear" width={12} height={12} />
        </span>
      </div>
    </div>
  )
}

export function Products() {
  return (
    <section id="products" className="py-20 border-t border-stone-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">
            Produkter som samarbetar
          </h2>
          <p className="mt-4 text-stone-500 text-lg font-geist">
            Alla verktyg delar samma kunddatabas. Din chatbot kan boka möten. Din receptionist kan svara på frågor. Automatiskt.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ProductCard
            icon="solar:chat-line-linear"
            name="DocuChat"
            description="24/7 AI-chatbot baserad på egna dokument, med exakta källhänvisningar."
            badge="Ingår i Portal"
            badgeColor="bg-orange-50 text-orange-700"
            type="Bas-plugin"
          />
          <ProductCard
            icon="solar:calendar-linear"
            name="TimeSlot"
            description="Självservice-bokning som minskar administration och ökar konvertering."
            badge="Starta Gratis"
            badgeColor="bg-red-50 text-red-700"
            type="Tillägg"
          />
          <ProductCard
            icon="solar:user-speak-linear"
            name="Receptionist"
            description="Chat, bokning och lead-kvalificering med sömlös CRM-handoff."
            badge="Premium"
            badgeColor="bg-stone-100 text-stone-600"
            type="Tillägg"
          />
        </div>
      </div>
    </section>
  )
}
