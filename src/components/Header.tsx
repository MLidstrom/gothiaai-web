import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useDocuChat } from '../hooks/useDocuChat'

const portalFeatures = [
  {
    name: 'DocuChat',
    description: 'AI-chatbot baserad på egna dokument',
    icon: 'solar:chat-line-linear',
    href: '/portal/docuchat',
  },
  {
    name: 'TimeSlot',
    description: 'Självservice-bokning för möten',
    icon: 'solar:calendar-linear',
    href: '/portal/timeslot',
  },
  {
    name: 'Receptionist',
    description: 'Lead-kvalificering med AI',
    icon: 'solar:user-speak-linear',
    href: '/portal/receptionist',
  },
]

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, isLoading, isConnected, sendMessage, checkConnection } = useDocuChat()

  // Check connection when chat opens
  useEffect(() => {
    if (isChatOpen) {
      checkConnection()
    }
  }, [isChatOpen, checkConnection])

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue)
      setInputValue('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

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
              Portal
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
                  {portalFeatures.map((product) => (
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
          {/* DocuChat Demo Button */}
          <div className="relative">
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600 transition-all hover:bg-orange-200 hover:scale-105 active:scale-95"
              title="Testa DocuChat"
            >
              <Icon icon="solar:chat-line-linear" width={20} />
            </button>

            {/* Chat Dropdown */}
            {isChatOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsChatOpen(false)}
                />
                <div className="absolute right-0 top-full z-50 mt-2 w-80 sm:w-96">
                  <div className="rounded-2xl border border-stone-200 bg-white shadow-2xl shadow-stone-300/50 overflow-hidden">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between border-b border-stone-100 bg-stone-50 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                          <Icon icon="solar:chat-line-linear" width={18} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-stone-900 font-geist">DocuChat</div>
                          <div className="text-xs text-stone-500 font-geist">
                            {isConnected === null ? 'Ansluter...' : isConnected ? 'Ansluten' : 'Ej ansluten'}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsChatOpen(false)}
                        className="rounded-lg p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600 transition-colors"
                      >
                        <Icon icon="solar:close-circle-linear" width={20} />
                      </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="h-64 overflow-y-auto p-4 space-y-4 bg-white">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'gap-3'}`}>
                          {!message.isUser && (
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                              <Icon icon="solar:chat-line-linear" width={14} />
                            </div>
                          )}
                          <div
                            className={`rounded-2xl px-4 py-2.5 text-sm max-w-[80%] font-geist ${
                              message.isUser
                                ? 'rounded-tr-sm bg-orange-600 text-white'
                                : message.isError
                                  ? 'rounded-tl-sm bg-red-100 text-red-700'
                                  : 'rounded-tl-sm bg-stone-100 text-stone-700'
                            }`}
                          >
                            {message.content}
                            {message.sources && message.sources.length > 0 && (
                              <div className="mt-2 pt-2 border-t border-stone-200 text-xs text-stone-500">
                                <span className="font-medium">Källor:</span> {message.sources.map(s => s.fileName).join(', ')}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* Loading indicator */}
                      {isLoading && (
                        <div className="flex gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                            <Icon icon="solar:chat-line-linear" width={14} />
                          </div>
                          <div className="rounded-2xl rounded-tl-sm bg-stone-100 px-4 py-2.5 text-sm text-stone-500 font-geist">
                            <span className="inline-flex items-center gap-1">
                              <Icon icon="svg-spinners:3-dots-bounce" width={20} />
                            </span>
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input */}
                    <div className="border-t border-stone-100 p-3 bg-stone-50">
                      <form onSubmit={handleSubmit} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder={isConnected === false ? 'Ej ansluten...' : 'Skriv ett meddelande...'}
                          disabled={isLoading || isConnected === false}
                          className="flex-1 rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-orange-300 focus:ring-2 focus:ring-orange-100 font-geist disabled:bg-stone-100 disabled:cursor-not-allowed"
                        />
                        <button
                          type="submit"
                          disabled={isLoading || !inputValue.trim() || isConnected === false}
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white transition-all hover:bg-orange-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Icon icon={isLoading ? 'svg-spinners:ring-resize' : 'solar:arrow-up-linear'} width={18} />
                        </button>
                      </form>
                      <p className="mt-2 text-center text-xs text-stone-400 font-geist">
                        {isConnected === false ? (
                          <span className="text-red-500">DocuChat ej tillgänglig</span>
                        ) : (
                          <>
                            Demo läge -{' '}
                            <Link
                              to="/portal/docuchat"
                              className="text-orange-600 hover:underline"
                              onClick={() => setIsChatOpen(false)}
                            >
                              Läs mer om DocuChat
                            </Link>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <a href="http://localhost:3000/login" className="hidden text-sm font-medium text-stone-500 hover:text-stone-900 sm:block font-geist">
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
