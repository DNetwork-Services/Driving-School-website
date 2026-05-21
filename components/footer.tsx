import { PhoneIcon, MapPinIcon, ExternalLinkIcon } from './icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">स</span>
              </div>
              <div>
                <p className="font-semibold text-background">श्री संत कृपा प्रसाद</p>
                <p className="text-xs text-background/70">मोटर ड्रायव्हिंग स्कूल</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              रावेर तालुक्यातील विश्वासार्ह ड्रायव्हिंग स्कूल. 
              Learning Licence, Permanent Licence, RTO Services आणि Vehicle Insurance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">
                  सेवा (Services)
                </a>
              </li>
              <li>
                <a href="#documents" className="text-background/70 hover:text-background transition-colors">
                  कागदपत्रे (Documents)
                </a>
              </li>
              <li>
                <a href="#insurance" className="text-background/70 hover:text-background transition-colors">
                  विमा (Insurance)
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">
                  संपर्क (Contact)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">संपर्क</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:9822502053"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                9822502053
              </a>
              <a
                href="tel:9403555482"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                9403555482
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPinIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Savada, Raver, Jalgaon, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Government Links */}
        <div className="border-t border-background/20 pt-6 mb-6">
          <p className="text-xs text-background/50 mb-3">शासकीय वेबसाइट:</p>
          <div className="flex flex-wrap gap-4 text-xs">
            <a
              href="https://sarathi.parivahan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-background/70 hover:text-background transition-colors"
            >
              Sarathi Parivahan <ExternalLinkIcon className="w-3 h-3" />
            </a>
            <a
              href="https://parivahan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-background/70 hover:text-background transition-colors"
            >
              Parivahan Sewa <ExternalLinkIcon className="w-3 h-3" />
            </a>
            <a
              href="https://vahan.parivahan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-background/70 hover:text-background transition-colors"
            >
              Vahan Services <ExternalLinkIcon className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>
            © {currentYear} श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल. All rights reserved.
          </p>
          <p>
            Developed by{' '}
            <a
              href="https://github.com/deepaknemade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background transition-colors"
            >
              Deepak Nemade
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
