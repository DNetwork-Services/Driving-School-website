import { DocumentIcon, CheckCircleIcon } from './icons'

const documentSections = [
  {
    title: 'लर्निंग लायसन्स (Learning Licence)',
    documents: [
      { name: 'आधार कार्ड', nameEn: 'Aadhaar Card' },
      { name: 'पत्त्याचा पुरावा', nameEn: 'Address Proof' },
      { name: 'वयाचा पुरावा (जन्म प्रमाणपत्र)', nameEn: 'Age Proof (Birth Certificate)' },
      { name: 'पासपोर्ट साइज फोटो', nameEn: 'Passport Size Photo' },
      { name: 'मोबाइल नंबर (आधार लिंक)', nameEn: 'Mobile Number (Aadhaar linked)' },
    ],
    note: 'वय: दुचाकीसाठी 16+ वर्षे, चारचाकीसाठी 18+ वर्षे',
  },
  {
    title: 'परमनंट लायसन्स (Permanent Licence)',
    documents: [
      { name: 'लर्नर लायसन्स', nameEn: 'Learner Licence' },
      { name: 'आधार कार्ड', nameEn: 'Aadhaar Card' },
      { name: 'पासपोर्ट साइज फोटो', nameEn: 'Passport Size Photos' },
      { name: 'मेडिकल सर्टिफिकेट (आवश्यक असल्यास)', nameEn: 'Medical Certificate (if required)' },
    ],
    note: 'लर्निंग लायसन्स घेतल्यानंतर 30 दिवसांनी अर्ज करता येतो',
  },
  {
    title: 'RC ट्रान्सफर (RC Transfer)',
    documents: [
      { name: 'मूळ RC (Original RC)', nameEn: 'Original RC Book' },
      { name: 'विमा प्रत (Insurance Copy)', nameEn: 'Insurance Copy' },
      { name: 'PUC प्रमाणपत्र', nameEn: 'PUC Certificate' },
      { name: 'विक्री करार (Sale Agreement)', nameEn: 'Sale Agreement' },
      { name: 'आधार कार्ड (दोन्ही पक्ष)', nameEn: 'Aadhaar Card (Both Parties)' },
      { name: 'फॉर्म 29 व 30', nameEn: 'Form 29 & Form 30' },
    ],
    note: 'वाहन खरेदीनंतर 30 दिवसात RC ट्रान्सफर करणे अनिवार्य',
  },
  {
    title: 'लायसन्स नूतनीकरण (Licence Renewal)',
    documents: [
      { name: 'जुने लायसन्स', nameEn: 'Old Driving Licence' },
      { name: 'आधार कार्ड', nameEn: 'Aadhaar Card' },
      { name: 'पासपोर्ट साइज फोटो', nameEn: 'Passport Size Photo' },
      { name: 'मेडिकल सर्टिफिकेट (40+ वर्षांसाठी)', nameEn: 'Medical Certificate (40+ years)' },
    ],
    note: 'मुदत संपण्यापूर्वी 1 वर्ष आधी किंवा मुदत संपल्यानंतर 1 वर्षात नूतनीकरण करता येते',
  },
]

export function Documents() {
  return (
    <section id="documents" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            आवश्यक कागदपत्रे
          </h2>
          <p className="text-muted-foreground text-lg">Documents Required</p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
            खालील कागदपत्रे तयार ठेवा. आम्ही तुम्हाला संपूर्ण प्रक्रियेत मदत करू.
          </p>
        </div>

        {/* Document Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {documentSections.map((section) => (
            <div
              key={section.title}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DocumentIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{section.title}</h3>
              </div>

              <ul className="space-y-3 mb-4">
                {section.documents.map((doc) => (
                  <li key={doc.name} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground text-sm">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.nameEn}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {section.note && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                  <p className="text-xs text-foreground/80">
                    <span className="font-semibold">टीप:</span> {section.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Help Note */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            कागदपत्रांबद्दल शंका असल्यास आम्हाला संपर्क करा -{' '}
            <a href="tel:9822502053" className="text-primary font-medium hover:underline">
              9822502053
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
