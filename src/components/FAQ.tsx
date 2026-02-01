import { useState } from 'react'
import { Icon } from '@iconify/react'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="py-5">
      <button
        onClick={onToggle}
        className="w-full flex cursor-pointer items-center justify-between font-medium text-stone-900 transition-colors hover:text-orange-600 text-left font-geist"
      >
        {question}
        <span
          className={`ml-6 flex h-6 w-6 items-center justify-center text-stone-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <Icon icon="solar:alt-arrow-down-linear" width={20} />
        </span>
      </button>
      {isOpen && (
        <p className="mt-3 text-sm leading-relaxed text-stone-500 pr-12 font-geist">{answer}</p>
      )}
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Vad räknas som en "källa"?',
      answer:
        'Varje uppladdad fil (t.ex. en PDF) eller en crawlad webbsida räknas som en källa. Om du laddar upp en årsredovisning är det en källa.',
    },
    {
      question: 'Kan jag testa utan att betala?',
      answer:
        'Ja, Starter-planen är gratis för alltid med begränsad kapacitet. Du behöver inte registrera något kreditkort.',
    },
    {
      question: 'Vad ingår i Portal-prenumerationen?',
      answer:
        'DocuChat ingår alltid som bas-plugin. Tilläggs-plugins (TimeSlot, Receptionist) adderas separat till din prenumeration.',
    },
    {
      question: 'Hur fungerar produktnätverket?',
      answer:
        'Alla produkter delar samma databas per kund. DocuChat kan t.ex. boka möten via TimeSlot direkt i chatten utan att du behöver koppla ihop systemen manuellt.',
    },
    {
      question: 'Kan jag byta plan senare?',
      answer:
        'Ja, du kan uppgradera eller nedgradera när som helst. Ändringen träder i kraft direkt i portalen.',
    },
    {
      question: 'Vilka filformat stöds?',
      answer:
        'Vi stöder PDF, Word, text, markdown och webbsidor (via robots.txt eller manuella URL:er).',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-10 text-center font-jakarta">
          Vanliga frågor
        </h2>

        <div className="divide-y divide-stone-100">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
