import { Icon } from '@iconify/react'

interface IntegrationCardProps {
  icon: string
  title: string
  description: string
  placeholder: string
}

function IntegrationCard({ icon, title, description, placeholder }: IntegrationCardProps) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-2">
      <div className="aspect-[4/3] rounded-lg bg-stone-100 flex items-center justify-center mb-4 border border-stone-50">
        <span className="text-xs text-stone-400 font-medium uppercase tracking-wider font-geist">
          {placeholder}
        </span>
      </div>
      <div className="px-4 pb-4">
        <h3 className="font-medium text-stone-900 flex items-center gap-2 mb-2 font-geist">
          <Icon icon={icon} className="text-stone-400" />
          {title}
        </h3>
        <p className="text-sm text-stone-500 font-geist">{description}</p>
      </div>
    </div>
  )
}

export function Integration() {
  return (
    <section className="py-20 border-t border-stone-100 bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">
            Tre sätt att publicera
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <IntegrationCard
            icon="solar:code-linear"
            title="Inbäddning"
            description="En rad JavaScript – widgeten syns direkt på sidan."
            placeholder="[Inbäddning Preview]"
          />
          <IntegrationCard
            icon="solar:maximize-square-minimalistic-linear"
            title="Popup"
            description="Triggeras från valfri knapp eller länk på din hemsida."
            placeholder="[Popup Preview]"
          />
          <IntegrationCard
            icon="solar:link-linear"
            title="Portal-länk"
            description="Direktlänk till sida i portalen – ingen kod behövs."
            placeholder="[Portal Link Preview]"
          />
        </div>
      </div>
    </section>
  )
}
