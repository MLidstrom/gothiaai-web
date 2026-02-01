export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#FAFAFA] pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-16">
          <div>
            <h4 className="font-medium text-stone-900 mb-4 text-sm font-geist">Produkter</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors font-geist">
                  DocuChat{' '}
                  <span className="text-xs text-orange-600 ml-1 bg-orange-50 px-1.5 py-0.5 rounded font-geist">
                    Ingår
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors font-geist">
                  TimeSlot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors font-geist">
                  Receptionist
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-stone-900 mb-4 text-sm font-geist">Resurser</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors font-geist">
                  Dokumentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors font-geist">
                  Prislogik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors font-geist">
                  Statuspage
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-stone-900 mb-4 text-sm font-geist">Företag</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors font-geist">
                  Om oss
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors font-geist">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-stone-900 mb-4 text-sm font-geist">Legal</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors font-geist">
                  Integritetspolicy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors font-geist">
                  Användarvillkor
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-stone-200 pt-8 gap-4">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-stone-900 flex items-center justify-center text-white text-[10px] font-bold font-geist">
              G
            </div>
            <span className="text-sm font-semibold text-stone-900 font-geist">Gothia AI Solutions</span>
          </div>
          <p className="text-xs text-stone-400 font-geist">
            © 2026 Gothia AI Solutions. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  )
}
