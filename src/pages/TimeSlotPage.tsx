import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export function TimeSlotPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700 mb-6 font-geist">
                <Icon icon="solar:calendar-linear" className="mr-2" width={16} />
                Starta Gratis
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl font-jakarta">
                TimeSlot
              </h1>
              <p className="mt-6 text-lg text-stone-500 leading-relaxed font-geist">
                Självservice-bokning som låter kunder boka möten direkt. Minska administration
                och öka konvertering med ett smart bokningssystem.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#signup"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20 active:scale-95 font-geist"
                >
                  Kom igång gratis
                  <Icon icon="solar:arrow-right-linear" width={18} />
                </a>
                <a
                  href="/#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:border-stone-300 font-geist"
                >
                  Se demo
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-2 shadow-sm">
              <div className="aspect-[4/3] rounded-lg bg-stone-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <Icon icon="solar:calendar-linear" className="text-stone-300 mx-auto mb-4" width={64} />
                  <p className="text-sm font-medium text-stone-400 tracking-wide uppercase font-geist">
                    [TimeSlot Demo]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">
              Funktioner
            </h2>
            <p className="mt-4 text-stone-500 text-lg font-geist">
              Allt för smidig och effektiv mötesbokning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
                <Icon icon="solar:calendar-mark-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Kalenderintegration</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Synka med Google Calendar, Outlook eller iCal. Undvik dubbelbokningar automatiskt.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
                <Icon icon="solar:bell-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Påminnelser</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Automatiska påminnelser via e-post och SMS minskar no-shows dramatiskt.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
                <Icon icon="solar:users-group-rounded-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Flera resurser</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Hantera flera anställda, rum eller utrustning med individuella scheman.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
                <Icon icon="solar:settings-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Flexibla regler</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Sätt buffertid, max bokningar per dag, och avbokningsregler.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
                <Icon icon="solar:chat-line-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">AI-integration</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Kombinera med DocuChat så kan din chatbot boka möten direkt i konversationen.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
                <Icon icon="solar:card-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Betalningar</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Ta betalt vid bokning med Stripe eller Swish. Minska avbokningar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-t border-stone-100 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">
              Användningsområden
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-stone-900 font-geist mb-2">Konsultbolag</h3>
              <p className="text-sm text-stone-500 leading-relaxed font-geist">
                Låt kunder boka kostnadsfria rådgivningssamtal direkt. Öka leads utan extra administration.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-stone-900 font-geist mb-2">Frisörer & Salonger</h3>
              <p className="text-sm text-stone-500 leading-relaxed font-geist">
                Kunder bokar sin tid online. Du fokuserar på att leverera bra service.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-stone-900 font-geist mb-2">Vårdcentraler</h3>
              <p className="text-sm text-stone-500 leading-relaxed font-geist">
                Minska telefonköer genom att låta patienter boka tider själva.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-stone-900 font-geist mb-2">Säljteam</h3>
              <p className="text-sm text-stone-500 leading-relaxed font-geist">
                Boka demo-samtal direkt från hemsidan. Ingen mejltennis fram och tillbaka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">
              Priser
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50/50">
                <tr>
                  <th className="px-6 py-4 font-medium text-stone-900 font-geist">Plan</th>
                  <th className="px-6 py-4 font-medium text-stone-900 font-geist">TimeSlot-tillägg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr>
                  <td className="px-6 py-4 text-stone-900 font-geist">Starter</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 font-geist">Gratis</span>
                    <span className="block text-xs text-stone-400 mt-1 font-geist">10 bokningar/mån</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-stone-900 font-geist">Bas</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+290 kr/mån</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-stone-900 font-geist">Standard</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+490 kr/mån</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-stone-900 font-geist">Pro</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+990 kr/mån</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-center text-stone-400 font-geist">Alla priser exkl. moms.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-stone-100 bg-[#FAFAFA]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">
            Redo att förenkla din bokning?
          </h2>
          <p className="mt-4 text-stone-500 text-lg font-geist">
            Testa TimeSlot gratis med 10 bokningar per månad.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/#signup"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20 active:scale-95 font-geist"
            >
              Kom igång gratis
              <Icon icon="solar:arrow-right-linear" width={18} />
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:border-stone-300 font-geist"
            >
              Tillbaka till startsidan
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
