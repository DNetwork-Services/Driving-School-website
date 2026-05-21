import { PhoneIcon, WhatsAppIcon, StarIcon, CarIcon } from './icons'

export function Hero() {
  return (
    <section id="home" className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Animated Car Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Road at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-foreground/5">
          <div className="absolute bottom-7 left-0 right-0 h-1 bg-white/20 flex gap-6 animate-road-dash">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="w-12 h-full bg-white/40 flex-shrink-0" />
            ))}
          </div>
        </div>
        
        {/* Animated Cars */}
        <div className="absolute bottom-4 animate-drive-left">
          <CarIcon className="w-16 h-16 text-white/20" />
        </div>
        <div className="absolute bottom-4 animate-drive-right delay-500">
          <CarIcon className="w-12 h-12 text-white/15 scale-x-[-1]" />
        </div>
        
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-current rounded-full opacity-10 animate-float" />
        <div className="absolute bottom-32 right-10 w-48 h-48 border-4 border-current rounded-full opacity-10 animate-float delay-300" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-current rounded-full opacity-10 animate-float delay-200" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-slide-in-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">रावेर तालुक्यातील विश्वासार्ह ड्रायव्हिंग स्कूल</span>
          </div>

          {/* Main Heading - Marathi first */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-balance animate-slide-in-up delay-100">
            श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल
          </h1>
          
          {/* English subtitle */}
          <p className="text-lg md:text-xl opacity-90 mb-2 animate-slide-in-up delay-100">
            Shri Sant Krupa Prasad Motor Driving School
          </p>

          {/* Location */}
          <p className="text-base md:text-lg opacity-80 mb-6 animate-slide-in-up delay-200">
            सावदा, ता. रावेर, जि. जळगाव, महाराष्ट्र
          </p>

          {/* Description */}
          <p className="text-base md:text-lg opacity-90 mb-8 max-w-2xl leading-relaxed animate-slide-in-up delay-200">
            गाडी चालवायला शिका आणि आरटीओ सेवांसाठी आम्हाला संपर्क करा. 
            Learning Licence, Permanent Licence, RC Transfer आणि सर्व RTO कामे आम्ही करतो.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up delay-300">
            <a
              href="tel:9822502053"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary px-6 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              <PhoneIcon className="w-6 h-6" />
              <span>कॉल करा: 9822502053</span>
            </a>
            
            <a
              href="https://wa.me/9822502053?text=नमस्कार%2C%20मला%20ड्रायव्हिंग%20शिकायचे%20आहे.%20कृपया%20माहिती%20द्या."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-[#22c55e] transition-colors shadow-lg"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>WhatsApp वर संपर्क करा</span>
            </a>
          </div>

          {/* Quick Info */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl md:text-3xl font-bold">15+</p>
                <p className="text-sm opacity-80">वर्षांचा अनुभव</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl md:text-3xl font-bold">5000+</p>
                <p className="text-sm opacity-80">यशस्वी विद्यार्थी</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl md:text-3xl font-bold">100%</p>
                <p className="text-sm opacity-80">RTO मदत</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl md:text-3xl font-bold">₹</p>
                <p className="text-sm opacity-80">परवडणारे दर</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
