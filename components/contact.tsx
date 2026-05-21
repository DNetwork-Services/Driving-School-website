import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from './icons'

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            आमच्याशी संपर्क साधा
          </h2>
          <p className="text-muted-foreground text-lg">Contact Us</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            {/* Phone Numbers */}
            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-primary" />
                फोन नंबर (Phone)
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:9822502053"
                  className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-foreground">9822502053</p>
                    <p className="text-sm text-muted-foreground">मुख्य संपर्क नंबर</p>
                  </div>
                </a>
                
                <a
                  href="tel:9403555482"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-foreground">9403555482</p>
                    <p className="text-sm text-muted-foreground">पर्यायी नंबर</p>
                  </div>
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/9822502053?text=नमस्कार%2C%20मला%20ड्रायव्हिंग%20स्कूल%20बद्दल%20माहिती%20हवी%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#25D366] rounded-xl hover:bg-[#22c55e] transition-colors mb-6"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <WhatsAppIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-white">WhatsApp वर मेसेज करा</p>
                <p className="text-sm text-white/80">तात्काळ प्रतिसाद मिळेल</p>
              </div>
            </a>

            {/* Address & Timing */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-primary" />
                  पत्ता (Address)
                </h3>
                <address className="not-italic text-foreground/80 text-sm leading-relaxed">
                  Shop No 15, In Front of Bus Stand,<br />
                  Sarode Complex, Savada,<br />
                  Tal. Raver, Dist. Jalgaon - 425508<br />
                  Maharashtra, India
                </address>
                <a
                  href="https://maps.app.goo.gl/CcXPGmcQj7cYhAaz5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-3 hover:underline"
                >
                  <MapPinIcon className="w-4 h-4" />
                  Google Maps वर पहा →
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-primary" />
                  वेळ (Timing)
                </h3>
                <div className="text-foreground/80 text-sm">
                  <p className="mb-1">
                    <span className="font-medium">सोमवार - शनिवार:</span> सकाळी 9:00 - संध्याकाळी 7:00
                  </p>
                  <p>
                    <span className="font-medium">रविवार:</span> बंद (Appointment Only)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-full min-h-[400px]">
            <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.4176766123945!2d75.89970767433657!3d21.274700080477927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd977d4c6a8cd79%3A0x8c5bf12345abcdef!2sSavada%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल - Location Map"
              />
            </div>
          </div>
        </div>

        {/* Owner Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            मालक: <span className="text-foreground font-medium">उल्हास नेमाडे</span> (Ulhas Nemade)
          </p>
        </div>
      </div>
    </section>
  )
}
