import { Icon } from '@iconify/react'

interface PlanCardProps {
  name: string
  price: string
  period?: string
  subtitle?: string
  features: string[]
  cta: string
  highlighted?: boolean
  badge?: string
}

function PlanCard({ name, price, period, subtitle, features, cta, highlighted, badge }: PlanCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 shadow-sm transition-colors ${
        highlighted
          ? 'border-2 border-orange-600 shadow-xl shadow-orange-900/5 bg-white scale-[1.02] z-10'
          : 'border border-stone-200 hover:border-stone-300'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white font-geist">
          {badge}
        </div>
      )}
      <div className="mb-4">
        <h3 className={`text-lg font-medium font-geist ${highlighted ? 'text-orange-600' : 'text-stone-900'}`}>
          {name}
        </h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-3xl font-semibold text-stone-900 font-jakarta tracking-tight">{price}</span>
          {period && <span className="text-sm font-medium text-stone-500 font-geist">{period}</span>}
        </div>
        {subtitle && <p className="text-xs text-stone-500 mt-1 font-geist">{subtitle}</p>}
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-stone-600 font-geist">
            <Icon
              icon={highlighted ? 'solar:check-circle-bold' : 'solar:check-circle-linear'}
              className={`flex-shrink-0 ${highlighted ? 'text-orange-600' : 'text-stone-400'}`}
              width={18}
            />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#signup"
        className={`block w-full rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors font-geist ${
          highlighted
            ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-600/20'
            : name === 'Starter'
            ? 'bg-stone-100 text-stone-900 hover:bg-stone-200'
            : 'bg-white border border-stone-200 text-stone-900 hover:bg-stone-50'
        }`}
      >
        {cta}
      </a>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Portal Pricing */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">Välj din plan</h2>
          <p className="mt-4 text-stone-500 text-lg font-geist">Börja gratis. Uppgradera när du behöver mer.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start mb-24">
          <PlanCard
            name="Starter"
            price="Gratis"
            subtitle="För alltid"
            features={['10 källor', '30 frågor/mån', '"Powered by Gothia AI"']}
            cta="Kom igång gratis"
          />
          <PlanCard
            name="Bas"
            price="390"
            period="kr/mån"
            features={['50 källor', '1 000 frågor/mån', 'Valfri branding']}
            cta="Välj Bas"
            highlighted
            badge="Rekommenderad"
          />
          <PlanCard
            name="Standard"
            price="1 190"
            period="kr/mån"
            features={['200 källor', '5 000 frågor/mån', 'Valfri branding']}
            cta="Välj Standard"
          />
          <PlanCard
            name="Pro"
            price="2 790"
            period="kr/mån"
            features={['500 källor', '20 000 frågor/mån', 'Valfri branding']}
            cta="Välj Pro"
          />
        </div>

        {/* Add-on Plugins */}
        <div className="mt-20">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 font-jakarta">
              Lägg till fler verktyg
            </h2>
            <p className="mt-2 text-stone-500 font-geist">
              Utöka portalen med tilläggs-plugins. Alla delar samma kunddatabas.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50/50">
                <tr>
                  <th className="px-6 py-4 font-medium text-stone-900 w-1/4 font-geist">Plugin</th>
                  <th className="px-6 py-4 font-medium text-stone-900 w-1/6 font-geist">Starter</th>
                  <th className="px-6 py-4 font-medium text-stone-900 w-1/6 font-geist">Bas</th>
                  <th className="px-6 py-4 font-medium text-stone-900 w-1/6 font-geist">Standard</th>
                  <th className="px-6 py-4 font-medium text-stone-900 w-1/6 font-geist">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr>
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-900 flex items-center gap-2 font-geist">
                      <Icon icon="solar:calendar-linear" className="text-stone-400" /> TimeSlot
                    </div>
                    <p className="text-xs text-stone-500 mt-1 font-geist">Bokningssystem för möten</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 font-geist">
                      Gratis
                    </span>
                    <span className="block text-xs text-stone-400 mt-1 font-geist">10 bokningar</span>
                  </td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+290 kr</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+490 kr</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+990 kr</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-900 flex items-center gap-2 font-geist">
                      <Icon icon="solar:user-speak-linear" className="text-stone-400" /> Receptionist
                    </div>
                    <p className="text-xs text-stone-500 mt-1 font-geist">Lead-kvalificering med AI</p>
                  </td>
                  <td className="px-6 py-4 text-stone-300 font-geist">–</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+1 990 kr</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+2 990 kr</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+4 990 kr</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-900 flex items-center gap-2 font-geist">
                      <Icon icon="solar:help-linear" className="text-stone-400" /> SupportDesk
                    </div>
                    <p className="text-xs text-stone-500 mt-1 font-geist">Ärendehantering</p>
                  </td>
                  <td colSpan={4} className="px-6 py-4 text-center">
                    <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-500 font-geist">
                      Kommer snart
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-center text-stone-400 font-geist">
            Alla priser exkl. moms. Starter inkluderar 'Powered by Gothia AI'-logotyp.
          </p>
        </div>
      </div>
    </section>
  )
}
