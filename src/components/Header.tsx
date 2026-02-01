import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const products = [
  {
    name: 'DocuChat',
    description: 'AI-chatbot baserad på egna dokument',
    icon: 'solar:chat-line-linear',
    href: '/produkter/docuchat',
  },
  {
    name: 'TimeSlot',
    description: 'Självservice-bokning för möten',
    icon: 'solar:calendar-linear',
    href: '/produkter/timeslot',
  },
  {
    name: 'Receptionist',
    description: 'Lead-kvalificering med AI',
    icon: 'solar:user-speak-linear',
    href: '/produkter/receptionist',
  },
]

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#FAFAFA]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-stone-900 group font-geist">
          <div className="h-6 w-6 rounded bg-stone-900 flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-105 font-geist">
            G
          </div>
          Gothia AI
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-stone-500">
          {/* Produkter Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-stone-900 transition-colors font-geist">
              Produkter
              <Icon
                icon="solar:alt-arrow-down-linear"
                className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                width={16}
              />
            </button>

            {/* Dropdown Menu */}
            {isProductsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="w-72 rounded-xl border border-stone-200 bg-white p-2 shadow-xl shadow-stone-200/50">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-stone-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-600">
                        <Icon icon={product.icon} width={20} />
                      </div>
                      <div>
                        <div className="font-medium text-stone-900 font-geist">{product.name}</div>
                        <div className="text-xs text-stone-500 font-geist">{product.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/#how-it-works" className="hover:text-stone-900 transition-colors font-geist">Så funkar det</a>
          <a href="/#pricing" className="hover:text-stone-900 transition-colors font-geist">Priser</a>
          <a href="/#faq" className="hover:text-stone-900 transition-colors font-geist">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden text-sm font-medium text-stone-500 hover:text-stone-900 sm:block font-geist">
            Logga in
          </a>
          <a
            href="#signup"
            className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-900/10 active:scale-95 font-geist"
          >
            Kom igång gratis
          </a>
        </div>
      </div>
    </header>
  )
}
