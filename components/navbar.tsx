'use client'

import { useState } from 'react'
import { MenuIcon, XIcon, PhoneIcon } from './icons'

const navLinks = [
  { href: '#home', label: 'होम', labelEn: 'Home' },
  { href: '#services', label: 'सेवा', labelEn: 'Services' },
  { href: '#documents', label: 'कागदपत्रे', labelEn: 'Documents' },
  { href: '#insurance', label: 'विमा', labelEn: 'Insurance' },
  { href: '#contact', label: 'संपर्क', labelEn: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">स</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-foreground text-sm leading-tight">श्री संत कृपा प्रसाद</p>
              <p className="text-xs text-muted-foreground">मोटर ड्रायव्हिंग स्कूल</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:9822502053"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              कॉल करा
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                  <span className="text-muted-foreground text-sm ml-2">({link.labelEn})</span>
                </a>
              ))}
              <a
                href="tel:9822502053"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium mt-2"
              >
                <PhoneIcon className="w-5 h-5" />
                आत्ताच कॉल करा - 9822502053
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
