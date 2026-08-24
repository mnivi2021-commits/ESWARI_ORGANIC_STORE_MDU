import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/constants';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, MapPin } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Organic Foods', href: '#catalogue' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro-bar for local presence & phone */}
      <div className="bg-[#1B4332] text-white/90 text-xs py-1.5 px-4 hidden sm:block border-b border-[#143828]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#40916C]" />
            <span className="font-medium text-[#F3F0E6]">Serving Madurai, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#E0DCCF]/90 font-medium">Pure • Natural • Healthy Foods</span>
            <a 
              href={BUSINESS_INFO.phoneUrl} 
              className="flex items-center gap-1.5 text-[#F3F0E6] hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#40916C]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E0DCCF] py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#E0DCCF] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#1B4332] rounded-xl" aria-label="Eswari Organic Store Home">
            <Logo variant="header" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5C635C]" aria-label="Main Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`py-1 transition-colors ${
                  idx === 0 
                    ? 'text-[#1B4332] font-semibold border-b-2 border-[#1B4332]' 
                    : 'text-[#5C635C] hover:text-[#1B4332]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone link */}
            <a
              href={BUSINESS_INFO.phoneUrl}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#1B4332] bg-[#F3F0E6] hover:bg-[#E0DCCF] border border-[#E0DCCF] transition-colors"
              title="Call Eswari Organic Store"
            >
              <Phone className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* WhatsApp CTA Button */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-sm transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
            </a>
          </div>

          {/* Mobile Menu Toggle & Direct WhatsApp */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#25D366] active:scale-95 transition-all shadow-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2D332D] hover:text-[#1B4332] hover:bg-[#F3F0E6] focus:outline-none focus:ring-2 focus:ring-[#1B4332] transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E0DCCF] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#2D332D] hover:bg-[#F3F0E6] hover:text-[#1B4332] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-3 border-t border-[#E0DCCF] flex flex-col gap-2.5">
                <a
                  href={BUSINESS_INFO.phoneUrl}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-[#1B4332] bg-[#F3F0E6] border border-[#E0DCCF]"
                >
                  <Phone className="w-4 h-4 text-[#1B4332]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
