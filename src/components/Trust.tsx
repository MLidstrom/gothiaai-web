import { Icon } from '@iconify/react'

interface TrustItemProps {
  icon: string
  title: string
  description: string
}

function TrustItem({ icon, title, description }: TrustItemProps) {
  return (
    <div className="flex flex-col gap-2 md:items-center md:text-center">
      <div className="h-10 w-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 mb-2 shadow-sm">
        <Icon icon={icon} width={20} height={20} />
      </div>
      <h3 className="font-medium text-stone-900 font-geist">{title}</h3>
      <p className="text-sm text-stone-500 leading-relaxed font-geist">{description}</p>
    </div>
  )
}

export function Trust() {
  return (
    <section className="py-20 border-t border-stone-100 bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 md:text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 font-jakarta">
            Byggt för svenska företag
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <TrustItem
            icon="solar:magic-stick-3-linear"
            title="100% self-service"
            description="Konfigurera, träna och publicera direkt i webbläsaren. Ingen kod krävs."
          />
          <TrustItem
            icon="solar:rocket-2-linear"
            title="Redo på minuter"
            description="Ladda upp dokument, anpassa och publicera. Live på din webbplats samma dag."
          />
          <TrustItem
            icon="solar:map-point-linear"
            title="Svenskt & EU-hostat"
            description="Utvecklat i Sverige, hostat inom EU. Din data lämnar aldrig Europa."
          />
        </div>

        <div className="mx-auto max-w-4xl rounded-lg border border-stone-200 border-dashed bg-stone-50 p-10 text-center">
          <p className="text-sm font-medium text-stone-400 mb-6 uppercase tracking-widest font-geist">
            [Customer Logos]
          </p>
          <div className="flex flex-wrap justify-center gap-10 opacity-30 grayscale">
            <div className="h-8 w-28 bg-stone-400 rounded"></div>
            <div className="h-8 w-28 bg-stone-400 rounded"></div>
            <div className="h-8 w-28 bg-stone-400 rounded"></div>
            <div className="h-8 w-28 bg-stone-400 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
