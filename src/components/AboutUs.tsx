import React from 'react';
import { BUSINESS_INFO } from '../data/constants';
import { MapPin, Phone, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F3F0E6] border-y border-[#E0DCCF] relative overflow-hidden">
      {/* Decorative leaf blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 w-72 h-72 bg-[#40916C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-md border-4 border-white bg-[#FDFCF9]">
                <img
                  src="https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=800&q=80"
                  alt="Assorted natural grains, pulses, and organic spices"
                  className="w-full h-72 sm:h-88 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Local Madurai badge overlay */}
              <div className="absolute -bottom-4 -right-2 sm:right-6 bg-[#FDFCF9] p-4 rounded-2xl border border-[#E0DCCF] shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#F3F0E6] text-[#1B4332] flex-shrink-0 border border-[#E0DCCF]">
                    <MapPin className="w-5 h-5 text-[#40916C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#40916C]">Store Location</h4>
                    <p className="text-sm font-semibold text-[#1B4332]">{BUSINESS_INFO.location}</p>
                    <p className="text-[11px] text-[#8A8F8A] mt-0.5">Enquire online via WhatsApp or phone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDFCF9] text-[#1B4332] border border-[#E0DCCF] text-xs font-bold tracking-widest uppercase">
              <Heart className="w-3.5 h-3.5 text-[#40916C] fill-[#40916C]" />
              <span>Our Story & Mission</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B4332] tracking-tight">
              About Eswari Organic Store
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#2D332D] leading-relaxed">
              <p className="font-medium text-[#1B4332]">
                Eswari Organic Store is an organic food business serving customers in Madurai, Tamil Nadu. We offer a range of natural and organic food products for everyday use.
              </p>
              <p className="text-[#5C635C] text-sm sm:text-base">
                From traditional jaggery varieties and pure honey to staple millets, healthy flours, wholesome pulses, spices, and natural snacks — our catalogue brings clean, wholesome choices for your kitchen and family health.
              </p>
            </div>

            {/* Core Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFCF9] border border-[#E0DCCF]">
                <CheckCircle2 className="w-5 h-5 text-[#40916C] flex-shrink-0" />
                <span className="text-sm font-semibold text-[#1B4332]">Natural & Everyday Staples</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFCF9] border border-[#E0DCCF]">
                <CheckCircle2 className="w-5 h-5 text-[#40916C] flex-shrink-0" />
                <span className="text-sm font-semibold text-[#1B4332]">Direct Customer Enquiries</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFCF9] border border-[#E0DCCF]">
                <CheckCircle2 className="w-5 h-5 text-[#40916C] flex-shrink-0" />
                <span className="text-sm font-semibold text-[#1B4332]">Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFCF9] border border-[#E0DCCF]">
                <CheckCircle2 className="w-5 h-5 text-[#40916C] flex-shrink-0" />
                <span className="text-sm font-semibold text-[#1B4332]">Serving Madurai & Tamil Nadu</span>
              </div>
            </div>

            {/* Quick Contact CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#1B4332] bg-[#FDFCF9] hover:bg-white border border-[#E0DCCF] transition-all"
              >
                <Phone className="w-4 h-4 text-[#40916C]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
