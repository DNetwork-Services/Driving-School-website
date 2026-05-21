'use client'

import { PhoneIcon, WhatsAppIcon, MapPinIcon } from './icons'

export function FloatingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border shadow-lg safe-area-pb">
      <div className="grid grid-cols-3 gap-1 p-2">
        {/* Call Button */}
        <a
          href="tel:9822502053"
          className="flex flex-col items-center justify-center gap-1 p-3 rounded-lg bg-primary text-primary-foreground active:scale-95 transition-transform"
          aria-label="Call Now"
        >
          <PhoneIcon className="w-6 h-6" />
          <span className="text-xs font-medium">कॉल करा</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9822502053?text=नमस्कार%2C%20मला%20ड्रायव्हिंग%20स्कूल%20बद्दल%20माहिती%20हवी%20आहे."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 p-3 rounded-lg bg-[#25D366] text-white active:scale-95 transition-transform"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>

        {/* Map Button */}
        <a
          href="https://maps.app.goo.gl/CcXPGmcQj7cYhAaz5"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 p-3 rounded-lg bg-accent text-accent-foreground active:scale-95 transition-transform"
          aria-label="View on Map"
        >
          <MapPinIcon className="w-6 h-6" />
          <span className="text-xs font-medium">नकाशा</span>
        </a>
      </div>
    </div>
  )
}

// Sticky WhatsApp button for desktop
export function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/9822502053?text=नमस्कार%2C%20मला%20ड्रायव्हिंग%20स्कूल%20बद्दल%20माहिती%20हवी%20आहे."
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#22c55e] transition-all hover:scale-105 animate-pulse-soft"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="font-medium">WhatsApp वर चॅट करा</span>
    </a>
  )
}
