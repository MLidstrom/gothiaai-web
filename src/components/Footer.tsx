import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#FAFAFA] pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-16">
          <div>
            <h4 className="font-medium text-stone-900 mb-4 text-sm font-geist">Portal</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <Link to="/portal/docuchat" className="hover:text-stone-900 transition-colors font-geist">
                  DocuChat{' '}
                  <span className="text-xs text-orange-600 ml-1 bg-orange-50 px-1.5 py-0.5 rounded font-geist">
                    Ingår
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/portal/timeslot" className="hover:text-stone-900 transition-colors font-geist">
                  TimeSlot
                </Link>
              </li>
              <li>
                <Link to="/portal/receptionist" className="hover:text-stone-900 transition-colors font-geist">
                  Receptionist
                </Link>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-stone-900 transition-colors font-geist">
                  Priser
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-stone-900 mb-4 text-sm font-geist">Resurser</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <a href="/#how-it-works" className="hover:text-stone-900 transition-colors font-geist">
                  Så funkar det
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-stone-900 transition-colors font-geist">
                  Priser
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-stone-900 transition-colors font-geist">
                  Vanliga frågor
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@gothia.ai" className="hover:text-stone-900 transition-colors font-geist">
                  Kontakta oss
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
                <a href="mailto:kontakt@gothia.ai" className="hover:text-stone-900 transition-colors font-geist">
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
