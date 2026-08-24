import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/constants';
import { MessageCircle, ArrowRight, Sparkles, MapPin, CheckCircle2, ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 sm:pt-12 pb-16 lg:pb-24 bg-gradient-to-br from-[#FDFCF9] via-[#F3F0E6]/40 to-[#F9F7F2] border-b border-[#E0DCCF]">
      {/* Decorative organic background leaf patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#40916C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 bg-[#E0DCCF]/50 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle vector watermark in background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1B4332_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Prominent Brand Logo Showcase Card */}
            <div className="p-3 sm:p-3.5 bg-white rounded-2xl border border-[#E0DCCF] shadow-sm inline-flex items-center">
              <Logo variant="hero" />
            </div>

            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F0E6] border border-[#E0DCCF] text-[#1B4332] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              <Leaf className="w-4 h-4 text-[#40916C]" />
              <span>{BUSINESS_INFO.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1B4332] leading-[1.12]">
              Pure. Natural. <br className="hidden sm:inline" />
              <span className="text-[#40916C]">
                Organic.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg sm:leading-relaxed text-[#5C635C] max-w-xl">
              {BUSINESS_INFO.supportingText}
            </p>

            {/* Location Tag */}
            <div className="flex items-center gap-2 text-[#2D332D] bg-[#FDFCF9] border border-[#E0DCCF] px-4 py-2.5 rounded-xl text-sm font-medium shadow-xs">
              <MapPin className="w-4 h-4 text-[#40916C] flex-shrink-0" />
              <span>Serving <strong>{BUSINESS_INFO.locationShort}</strong></span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              {/* Explore Catalogue */}
              <a
                href="#catalogue"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-[#1B4332] hover:bg-[#143828] shadow-lg shadow-[#1B4332]/20 active:scale-[0.98] transition-all"
              >
                <span>Explore Organic Foods</span>
                <ArrowRight className="w-4 h-4 text-[#E0DCCF]" />
              </a>

              {/* WhatsApp Large Action */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md shadow-[#25D366]/20 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Contact Us */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#1B4332] border-2 border-[#1B4332] hover:bg-[#F3F0E6] transition-all"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Micro value tags / Stats */}
            <div className="pt-4 border-t border-[#E0DCCF] w-full grid grid-cols-3 gap-3 text-xs text-[#5C635C]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#40916C] flex-shrink-0" />
                <span>Selected Quality</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#40916C] flex-shrink-0" />
                <span>Direct Enquiry</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <HeartHandshake className="w-4 h-4 text-[#40916C] flex-shrink-0" />
                <span>Madurai Local</span>
              </div>
            </div>

          </div>

          {/* Right Column: Natural Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#1B4332]">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh organic vegetables, grains, and produce in basket - Eswari Organic Store"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10 pointer-events-none" />

                {/* Overlay Brand Plate */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#FDFCF9]/95 backdrop-blur-md border border-[#E0DCCF] shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold tracking-widest text-[#40916C] uppercase">
                        Organic Store Catalogue
                      </p>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#1B4332] leading-tight">
                        15 Natural Food Categories
                      </h4>
                      <p className="text-xs text-[#5C635C] mt-0.5">
                        Jaggery, Millets, Honey, Flours, Pulses & more
                      </p>
                    </div>
                    <a
                      href="#catalogue"
                      className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1B4332] text-white flex items-center justify-center hover:bg-[#143828] transition-colors shadow-sm"
                      aria-label="View catalogue"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#FDFCF9] border border-[#E0DCCF] py-2.5 px-3.5 rounded-2xl shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#F3F0E6] flex items-center justify-center text-[#1B4332] font-bold">
                  <Sparkles className="w-4 h-4 text-[#40916C]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#1B4332]">100% Natural Choices</div>
                  <div className="text-[10px] text-[#8A8F8A]">Everyday Living</div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-[#1B4332] text-white py-2.5 px-4 rounded-2xl shadow-xl items-center gap-3 border border-[#40916C]/40">
                <div className="w-3 h-3 rounded-full bg-[#25D366] animate-ping" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">WhatsApp Fast Enquiry</div>
                  <div className="text-[10px] text-[#E0DCCF]">Click to chat directly</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
