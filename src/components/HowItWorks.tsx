export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Registrera',
      description: 'Skapa konto med e-post. Inget kreditkort krävs.',
      highlight: false,
    },
    {
      number: '2',
      title: 'Konfigurera',
      description: 'Peka på din webbplats eller ladda upp dokument för träning.',
      highlight: false,
    },
    {
      number: '3',
      title: 'Publicera',
      description: 'Välj inbäddning, popup eller direktlänk till din portal.',
      highlight: false,
    },
    {
      number: '4',
      title: 'Klar',
      description: 'Dina besökare kan nu chatta och boka.',
      highlight: true,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 font-jakarta">
              Portal: Live på 5 minuter
            </h2>
            <p className="mt-4 text-stone-500 mb-10 text-lg font-geist">
              Inga komplexa integrationer. Gothia AI Portal är byggt för att du ska kunna göra allt själv, direkt i webbläsaren.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="group flex gap-5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold shadow-sm font-geist ${
                      step.highlight
                        ? 'bg-stone-900 text-white'
                        : 'border border-stone-200 bg-white text-stone-900 group-hover:border-orange-500 group-hover:text-orange-600 transition-colors'
                    }`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900 font-geist">{step.title}</h4>
                    <p className="text-sm text-stone-500 mt-1 leading-relaxed font-geist">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pl-0 lg:pl-10">
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-2 shadow-sm">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-white border border-stone-100 flex flex-col items-center justify-center p-8 relative">
                {/* Code Editor Mockup */}
                <div className="w-full h-full flex flex-col">
                  <div className="flex items-center gap-1.5 mb-4 px-2">
                    <div className="w-3 h-3 rounded-full bg-stone-200"></div>
                    <div className="w-3 h-3 rounded-full bg-stone-200"></div>
                    <div className="w-3 h-3 rounded-full bg-stone-200"></div>
                  </div>
                  <div className="flex-1 rounded bg-stone-50 p-4 border border-stone-100 flex items-center justify-center">
                    <p className="text-xs font-medium text-stone-400 font-mono text-center font-geist">
                      [Integration Code Example]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
