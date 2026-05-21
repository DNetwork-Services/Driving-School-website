'use client'

import { useState } from 'react'
import { ChevronDownIcon } from './icons'

const faqs = [
  {
    question: 'लर्निंग लायसन्ससाठी किती वय लागतो?',
    questionEn: 'What is the minimum age for Learning Licence?',
    answer: 'दुचाकी (गियर नसलेली) साठी 16 वर्षे, दुचाकी (गियर असलेली) आणि चारचाकी साठी 18 वर्षे वय आवश्यक आहे.',
  },
  {
    question: 'ड्रायव्हिंग ट्रेनिंग किती दिवसात पूर्ण होते?',
    questionEn: 'How long does driving training take?',
    answer: 'कार ड्रायव्हिंग साधारणपणे 15-30 दिवसात पूर्ण होते. दुचाकी 7-15 दिवसात. तुमच्या शिकण्याच्या गतीवर अवलंबून आहे.',
  },
  {
    question: 'परमनंट लायसन्ससाठी किती वेळ लागतो?',
    questionEn: 'How long for Permanent Licence?',
    answer: 'लर्निंग लायसन्स घेतल्यानंतर 30 दिवसांनी परमनंट लायसन्ससाठी अर्ज करता येतो. RTO स्लॉट उपलब्धतेनुसार 15-30 दिवसात लायसन्स मिळते.',
  },
  {
    question: 'ट्रेनिंगची फी किती आहे?',
    questionEn: 'What are the training fees?',
    answer: 'फी वाहन प्रकार आणि ट्रेनिंग कालावधीनुसार बदलते. कृपया संपर्क करा - 9822502053. आम्ही परवडणारे दर देतो.',
  },
  {
    question: 'महिलांसाठी विशेष बॅच आहे का?',
    questionEn: 'Is there a special batch for ladies?',
    answer: 'होय, महिलांसाठी विशेष ट्रेनिंग बॅच उपलब्ध आहे. सोयीनुसार वेळ निवडता येते. सुरक्षित आणि आरामदायक वातावरण.',
  },
  {
    question: 'RC Transfer साठी किती दिवस लागतात?',
    questionEn: 'How many days for RC Transfer?',
    answer: 'RC Transfer साधारणपणे 15-20 कामकाजाच्या दिवसात पूर्ण होते. सर्व कागदपत्रे व्यवस्थित असल्यास लवकर होऊ शकते.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            वारंवार विचारले जाणारे प्रश्न
          </h2>
          <p className="text-muted-foreground text-lg">Frequently Asked Questions</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <div className="pr-4">
                  <p className="font-medium text-foreground">{faq.question}</p>
                  <p className="text-sm text-muted-foreground">{faq.questionEn}</p>
                </div>
                <ChevronDownIcon
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-5 pb-5 pt-0 animate-fade-in">
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More Questions */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-3">
            अजून प्रश्न आहेत? आम्हाला विचारा!
          </p>
          <a
            href="https://wa.me/919822502053?text=नमस्कार%2C%20मला%20एक%20प्रश्न%20विचारायचा%20आहे."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            WhatsApp वर प्रश्न विचारा →
          </a>
        </div>
      </div>
    </section>
  )
}
