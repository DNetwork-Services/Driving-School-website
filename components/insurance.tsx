import { ShieldIcon, CheckCircleIcon, PhoneIcon } from './icons'

const insuranceCompanies = [
  { name: 'ICICI Lombard', popular: true },
  { name: 'HDFC ERGO', popular: true },
  { name: 'Bajaj Allianz', popular: true },
  { name: 'Tata AIG', popular: false },
  { name: 'Reliance General', popular: false },
  { name: 'SBI General', popular: false },
  { name: 'ACKO', popular: false },
  { name: 'New India Assurance', popular: false },
  { name: 'Oriental Insurance', popular: false },
]

const insuranceTypes = [
  {
    title: 'थर्ड पार्टी विमा',
    titleEn: 'Third Party Insurance',
    description: 'कायद्यानुसार अनिवार्य. अपघातात इतरांना झालेल्या नुकसानासाठी',
    required: true,
  },
  {
    title: 'कॉम्प्रिहेन्सिव्ह विमा',
    titleEn: 'Comprehensive Insurance',
    description: 'तुमच्या वाहनाचे संपूर्ण संरक्षण - चोरी, अपघात, नैसर्गिक आपत्ती',
    required: false,
  },
  {
    title: 'झीरो डेप्रिसिएशन',
    titleEn: 'Zero Depreciation',
    description: 'क्लेम वेळी पार्ट्सची पूर्ण किंमत मिळते',
    required: false,
  },
]

export function Insurance() {
  return (
    <section id="insurance" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            वाहन विमा सेवा
          </h2>
          <p className="text-muted-foreground text-lg">Vehicle Insurance Services</p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
            आम्ही सर्व प्रमुख विमा कंपन्यांचे विमा उपलब्ध करून देतो. नवीन विमा, नूतनीकरण व क्लेम मदत.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Insurance Types */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <ShieldIcon className="w-5 h-5 text-primary" />
              विमा प्रकार (Insurance Types)
            </h3>

            <div className="space-y-4">
              {insuranceTypes.map((type) => (
                <div
                  key={type.title}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{type.title}</h4>
                      <p className="text-sm text-muted-foreground">{type.titleEn}</p>
                    </div>
                    {type.required && (
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-medium">
                        अनिवार्य
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-foreground/80">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance Companies */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              विमा कंपन्या (Insurance Partners)
            </h3>

            <div className="bg-card border border-border rounded-xl p-5">
              <div className="grid grid-cols-2 gap-3">
                {insuranceCompanies.map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50"
                  >
                    <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{company.name}</span>
                    {company.popular && (
                      <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                        Popular
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Insurance Help */}
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  विमा निवडण्यात मदत हवी? आम्हाला संपर्क करा:
                </p>
                <a
                  href="tel:9403555482"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <PhoneIcon className="w-4 h-4" />
                  9403555482
                </a>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-4 bg-primary/5 border border-primary/20 rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-3">आमच्याकडून विमा घेण्याचे फायदे:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircleIcon className="w-4 h-4 text-primary" />
                  सर्वोत्तम दरात विमा
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircleIcon className="w-4 h-4 text-primary" />
                  क्लेम मदत (Claim Assistance)
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircleIcon className="w-4 h-4 text-primary" />
                  तात्काळ पॉलिसी
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircleIcon className="w-4 h-4 text-primary" />
                  सुलभ नूतनीकरण स्मरणपत्र
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
