import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

interface ProductFeature {
  icon: string
  text: string
}

interface ProductCardProps {
  icon: string
  name: string
  description: string
  badge: string
  badgeColor: string
  features: ProductFeature[]
  href: string
  ctaText: string
}

function ProductCard({ icon, name, description, badge, badgeColor, features, href, ctaText }: ProductCardProps) {
  return (
    <div className="group relative rounded-xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/40">
      <div className="flex items-start justify-between mb-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-stone-50 text-stone-900 border border-stone-100">
          <Icon icon={icon} width={24} />
        </div>
        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium font-geist ${badgeColor}`}>
          {badge}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-stone-900 font-geist">{name}</h3>
      <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">{description}</p>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature.text} className="flex items-center gap-3 text-sm text-stone-600 font-geist">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-stone-50 text-stone-500">
              <Icon icon={feature.icon} width={18} />
            </div>
            {feature.text}
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-stone-100">
        <Link to={href}>
          <span className="text-sm text-orange-600 group-hover:text-orange-700 transition-colors flex items-center gap-1 font-medium font-geist">
            {ctaText} <Icon icon="solar:arrow-right-linear" width={14} />
          </span>
        </Link>
      </div>
    </div>
  )
}

export function Products() {
  return (
    <section id="offerings" className="py-20 border-t border-stone-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">
            Tre verktyg, en plattform
          </h2>
          <p className="mt-4 text-stone-500 text-lg font-geist">
            Gothia AI Portal samlar chatbot, bokning och lead-kvalificering i en och samma lösning. Alla delar samma kunddatabas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <ProductCard
            icon="solar:chat-line-linear"
            name="DocuChat"
            description="AI-chatbot som svarar på frågor baserat på dina egna dokument och webbsidor."
            badge="Ingår"
            badgeColor="bg-orange-50 text-orange-700"
            features={[
              { icon: 'solar:file-text-linear', text: 'Träna på PDF, Word och webbsidor' },
              { icon: 'solar:chat-round-dots-linear', text: 'Inbäddningsbar widget' },
              { icon: 'solar:magic-stick-3-linear', text: 'GPT-4o som standard' },
            ]}
            href="/portal/docuchat"
            ctaText="Läs mer"
          />
          <ProductCard
            icon="solar:calendar-linear"
            name="TimeSlot"
            description="Självservice-bokning som låter dina kunder boka möten direkt via chatten eller din webbplats."
            badge="Tillägg"
            badgeColor="bg-stone-100 text-stone-600"
            features={[
              { icon: 'solar:clock-circle-linear', text: 'Konfigurera tillgängliga tider' },
              { icon: 'solar:link-linear', text: 'Integrera med DocuChat' },
              { icon: 'solar:bell-linear', text: 'Automatiska bekräftelser' },
            ]}
            href="/portal/timeslot"
            ctaText="Läs mer"
          />
          <ProductCard
            icon="solar:user-speak-linear"
            name="Receptionist"
            description="AI-driven lead-kvalificering som samlar in besökarens behov innan du tar kontakt."
            badge="Premium"
            badgeColor="bg-stone-100 text-stone-600"
            features={[
              { icon: 'solar:clipboard-list-linear', text: 'Anpassade kvalificeringsfrågor' },
              { icon: 'solar:filter-linear', text: 'Automatisk lead-scoring' },
              { icon: 'solar:letter-linear', text: 'Leads direkt till din inbox' },
            ]}
            href="/portal/receptionist"
            ctaText="Läs mer"
          />
        </div>
      </div>
    </section>
  )
}
