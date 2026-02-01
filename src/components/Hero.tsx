import { Icon } from '@iconify/react'

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-stone-900 md:text-6xl lg:text-7xl font-jakarta">
          En portal. <br className="hidden md:block" />
          <span className="text-stone-400 font-jakarta tracking-tight font-semibold">Alla AI-verktyg.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-500 leading-relaxed font-geist">
          Gothia AI Portal samlar chatbot, bokning och support i en self-service plattform. Byggt för svenska företag. Gratis att starta.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20 active:scale-95 font-geist"
          >
            Kom igång gratis
            <Icon icon="solar:arrow-right-linear" width={18} height={18} />
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900 hover:border-stone-300 font-geist"
          >
            Se hur det fungerar
          </a>
        </div>

        {/* Dashboard Placeholder */}
        <div id="demo" className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-stone-200 bg-white p-2 shadow-sm ring-1 ring-stone-200/50">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-stone-100 flex items-center justify-center relative">
            <div className="text-center p-8">
              <Icon icon="solar:widget-linear" className="text-stone-300 mx-auto mb-4" width={64} height={64} />
              <p className="text-sm font-medium text-stone-400 tracking-wide uppercase font-geist">
                [Portal Dashboard Screenshot]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
