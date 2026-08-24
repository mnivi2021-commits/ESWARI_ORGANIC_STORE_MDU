import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/constants';
import { Phone, Mail, MessageCircle, MapPin, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B4332] text-[#F3F0E6] border-t border-[#40916C]/40 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#40916C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#40916C]/40">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="footer" />
            
            <p className="text-sm text-[#E0DCCF] font-medium">
              Organic Foods | Madurai, Tamil Nadu
            </p>

            <p className="text-xs text-[#E0DCCF]/80 leading-relaxed max-w-sm">
              Providing natural and organic everyday food products to families in Madurai, Tamil Nadu. Connect with us for product availability, prices, and orders.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneUrl}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F3F0E6] border border-white/20 text-xs font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#40916C]" />
                <span>Call</span>
              </a>

              <a
                href={BUSINESS_INFO.emailUrl}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F3F0E6] border border-white/20 text-xs font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#40916C]" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="text-[#E0DCCF] hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#E0DCCF] hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#catalogue" className="text-[#E0DCCF] hover:text-white transition-colors">
                  Organic Foods
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-[#E0DCCF] hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#E0DCCF] hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
              Store Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#E0DCCF]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#40916C] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#40916C] flex-shrink-0" />
                <a href={BUSINESS_INFO.phoneUrl} className="hover:text-white font-semibold transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#40916C] flex-shrink-0" />
                <a href={BUSINESS_INFO.emailUrl} className="hover:text-white break-all transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#E0DCCF]/80 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#40916C] flex-shrink-0" />
                <span>Enquiry-based business catalogue</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E0DCCF]/70">
          <p>© {BUSINESS_INFO.year} Eswari Organic Store. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px] text-[#E0DCCF]/60">
              Made with <Heart className="w-3 h-3 text-[#40916C] fill-[#40916C]" /> for Madurai
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F3F0E6] border border-white/20 text-xs transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
