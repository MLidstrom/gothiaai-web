import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export function DocuChatPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 mb-6 font-geist">
                <Icon icon="solar:chat-line-linear" className="mr-2" width={16} />
                Ingår i Portal
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl font-jakarta">
                DocuChat
              </h1>
              <p className="mt-6 text-lg text-stone-500 leading-relaxed font-geist">
                En AI-chatbot som svarar på frågor baserat på dina egna dokument och webbsidor.
                Med exakta källhänvisningar så att dina besökare kan lita på svaren.
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
                  <Icon icon="solar:chat-line-linear" className="text-stone-300 mx-auto mb-4" width={64} />
                  <p className="text-sm font-medium text-stone-400 tracking-wide uppercase font-geist">
                    [DocuChat Demo]
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
              Allt du behöver för att ge dina besökare snabba och korrekta svar.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                <Icon icon="solar:document-text-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Dokumentbaserad</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Ladda upp PDF, Word, markdown eller crawla din webbplats. DocuChat lär sig från ditt innehåll.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                <Icon icon="solar:link-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Källhänvisningar</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Varje svar inkluderar länkar till exakt vilka dokument och sidor informationen kommer från.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                <Icon icon="solar:clock-circle-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">24/7 tillgänglig</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Din chatbot sover aldrig. Besökare får svar direkt, oavsett tid på dygnet.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                <Icon icon="solar:palette-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Anpassningsbar</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Matcha ditt varumärke med egna färger, logotyp och ton. Din chatbot, ditt utseende.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                <Icon icon="solar:chart-2-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">Analysverktyg</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                Se vilka frågor som ställs mest och identifiera kunskapsluckor i ditt innehåll.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                <Icon icon="solar:shield-check-linear" width={24} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-geist">GDPR-anpassad</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed font-geist">
                All data lagras i EU. Dina dokument tränar bara din egen chatbot.
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
              <h3 className="text-lg font-semibold text-stone-900 font-geist mb-2">Kundsupport</h3>
              <p className="text-sm text-stone-500 leading-relaxed font-geist">
                Låt DocuChat svara på vanliga frågor om produkter, leverans och returer. Minska belastningen på kundtjänst.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-stone-900 font-geist mb-2">Intern kunskapsbas</h3>
              <p className="text-sm text-stone-500 leading-relaxed font-geist">
                Ge anställda snabb åtkomst till policyer, manualer och processdokumentation.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-stone-900 font-geist mb-2">E-handel</h3>
              <p className="text-sm text-stone-500 leading-relaxed font-geist">
                Hjälp kunder hitta rätt produkt genom att svara på frågor om specifikationer och användning.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-stone-900 font-geist mb-2">Utbildning</h3>
              <p className="text-sm text-stone-500 leading-relaxed font-geist">
                Skapa en interaktiv FAQ för kursmaterial, studiehandledningar och administrativa frågor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">
            Redo att komma igång?
          </h2>
          <p className="mt-4 text-stone-500 text-lg font-geist">
            DocuChat ingår i alla Portal-planer. Starta gratis idag.
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
