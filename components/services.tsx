import { CarIcon, BikeIcon, DocumentIcon, ShieldIcon, CheckCircleIcon, ExternalLinkIcon } from './icons'

const rtoServices = [
  { name: 'Learning Licence', nameHi: 'लर्निंग लायसन्स' },
  { name: 'Permanent Licence', nameHi: 'परमनंट लायसन्स' },
  { name: 'Licence Renewal', nameHi: 'लायसन्स नूतनीकरण' },
  { name: 'Duplicate Licence', nameHi: 'डुप्लिकेट लायसन्स' },
  { name: 'RC Transfer', nameHi: 'आरसी ट्रान्सफर' },
  { name: 'Ownership Transfer', nameHi: 'मालकी हस्तांतरण' },
  { name: 'Vehicle Registration', nameHi: 'वाहन नोंदणी' },
  { name: 'NOC', nameHi: 'ना हरकत प्रमाणपत्र' },
  { name: 'Address Change', nameHi: 'पत्ता बदल' },
  { name: 'HSRP Number Plate', nameHi: 'HSRP नंबर प्लेट' },
  { name: 'Commercial Vehicle', nameHi: 'व्यावसायिक वाहन काम' },
]

const drivingCourses: {
  title: string
  titleEn: string
  description: string
  features: string[]
  icon: typeof CarIcon
  comingSoon?: boolean
}[] = [
  {
    title: 'कार ड्रायव्हिंग',
    titleEn: 'Car Driving',
    description: 'पूर्ण कार ड्रायव्हिंग ट्रेनिंग - Highway Practice सह',
    features: ['Beginner Course', 'Highway Practice', 'Parking & Reverse', 'Traffic Rules'],
    icon: CarIcon,
  },
  {
    title: 'दुचाकी ट्रेनिंग',
    titleEn: 'Two Wheeler',
    description: 'बाइक आणि स्कूटर चालवायला शिका',
    features: ['Bike Training', 'Scooter Training', 'Balance Practice', 'Road Safety'],
    icon: BikeIcon,
    comingSoon: true,
  },
  {
    title: 'महिला विशेष',
    titleEn: 'Ladies Special',
    description: 'महिलांसाठी विशेष ट्रेनिंग बॅच - सुरक्षित वातावरण',
    features: ['Female Instructor', 'Flexible Timing', 'Safe Environment', 'Personal Attention'],
    icon: CarIcon,
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            आमच्या सेवा
          </h2>
          <p className="text-muted-foreground text-lg">Our Services</p>
        </div>

        {/* Driving Courses */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <CarIcon className="w-6 h-6 text-primary" />
            ड्रायव्हिंग कोर्सेस (Driving Training)
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {drivingCourses.map((course, index) => (
              <div
                key={course.title}
                className={`bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative group ${course.comingSoon ? 'opacity-80' : 'hover:-translate-y-1'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {course.comingSoon && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <course.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-1">{course.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{course.titleEn}</p>
                <p className="text-foreground/80 text-sm mb-4">{course.description}</p>
                <ul className="space-y-2">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* RTO Services */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <DocumentIcon className="w-6 h-6 text-primary" />
            RTO सेवा (RTO Services)
          </h3>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {rtoServices.map((service) => (
                <div
                  key={service.name}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{service.nameHi}</p>
                    <p className="text-xs text-muted-foreground">{service.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Links */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">शासकीय वेबसाइट लिंक्स:</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://sarathi.parivahan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Sarathi Parivahan <ExternalLinkIcon className="w-3 h-3" />
                </a>
                <a
                  href="https://parivahan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Parivahan Sewa <ExternalLinkIcon className="w-3 h-3" />
                </a>
                <a
                  href="https://vahan.parivahan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Vahan Services <ExternalLinkIcon className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/9822502053?text=नमस्कार%2C%20मला%20सेवांबद्दल%20माहिती%20हवी%20आहे."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            <ShieldIcon className="w-5 h-5" />
            संपर्क करा - Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
