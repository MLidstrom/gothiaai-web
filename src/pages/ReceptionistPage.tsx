import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export function ReceptionistPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-600 mb-6 font-geist">
                <Icon icon="solar:user-speak-linear" className="mr-2" width={16} />
                Premium
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl font-jakarta">
                Receptionist
              </h1>
              <p className="mt-6 text-lg text-stone-500 leading-relaxed font-geist">
                Din AI-drivna receptionist som kvalificerar leads, svarar på frågor och bokar möten.
                Sömlös handoff till säljteamet när det behövs.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#signup"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20 active:scale-95 font-geist"
                >
                  Kontakta oss
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
                  <Icon icon="solar:user-speak-linear" className="text-stone-300 mx-auto mb-4" width={64} />
                  <p className="text-sm font-medium text-stone-400 tracking-wide uppercase font-geist">
                    [Receptionist Demo]
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
              En komplett lösning för lead-hantering och kundkommunikation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                <Icon icon="solar:user-check-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Lead-kvalificering</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                AI:n ställer rätt frågor för att förstå kundens behov och prioritet innan handoff.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                <Icon icon="solar:chat-round-dots-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Naturlig konversation</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Känns som att prata med en riktig person. Anpassar ton och stil efter samtalet.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                <Icon icon="solar:hand-shake-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Smart handoff</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Skickar sammanfattning och kontext till säljaren. Ingen information går förlorad.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                <Icon icon="solar:calendar-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Integrerad bokning</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Kombinerar DocuChat och TimeSlot. Kunden kan boka möte direkt i chatten.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                <Icon icon="solar:database-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">CRM-integration</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Anslut till HubSpot, Salesforce eller Pipedrive. Leads skapas automatiskt.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                <Icon icon="solar:chart-2-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Konverteringsanalys</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Följ upp varje konversation. Se vad som leder till bokade möten och stängda affärer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-t border-stone-100 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">
              Så fungerar det
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto mb-4 text-lg font-semibold font-geist">1</div>
              <h3 className="font-medium text-stone-900 font-geist mb-2">Besökaren startar chatt</h3>
              <p className="text-sm text-stone-500 font-geist">Receptionist hälsar välkommen och frågar hur den kan hjälpa.</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto mb-4 text-lg font-semibold font-geist">2</div>
              <h3 className="font-medium text-stone-900 font-geist mb-2">Kvalificering sker</h3>
              <p className="text-sm text-stone-500 font-geist">AI:n samlar in information och förstår kundens behov.</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto mb-4 text-lg font-semibold font-geist">3</div>
              <h3 className="font-medium text-stone-900 font-geist mb-2">Möte bokas</h3>
              <p className="text-sm text-stone-500 font-geist">Kunden väljer tid direkt i chatten via TimeSlot.</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto mb-4 text-lg font-semibold font-geist">4</div>
              <h3 className="font-medium text-stone-900 font-geist mb-2">Säljaren tar vid</h3>
              <p className="text-sm text-stone-500 font-geist">Komplett sammanfattning skickas till CRM och säljare.</p>
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
            <p className="mt-4 text-stone-500 font-geist">
              Receptionist är ett premium-tillägg för företag med aktiv försäljning.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50/50">
                <tr>
                  <th className="px-6 py-4 font-medium text-stone-900 font-geist">Plan</th>
                  <th className="px-6 py-4 font-medium text-stone-900 font-geist">Receptionist-tillägg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr>
                  <td className="px-6 py-4 text-stone-900 font-geist">Starter</td>
                  <td className="px-6 py-4 text-stone-300 font-geist">–</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-stone-900 font-geist">Bas</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+1 990 kr/mån</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-stone-900 font-geist">Standard</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+2 990 kr/mån</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-stone-900 font-geist">Pro</td>
                  <td className="px-6 py-4 text-stone-600 font-geist">+4 990 kr/mån</td>
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
            Redo att automatisera din försäljning?
          </h2>
          <p className="mt-4 text-stone-500 text-lg font-geist">
            Kontakta oss för en demo av Receptionist.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/#signup"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20 active:scale-95 font-geist"
            >
              Kontakta oss
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
