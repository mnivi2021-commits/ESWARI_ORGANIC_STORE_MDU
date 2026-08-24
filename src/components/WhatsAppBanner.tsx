import React from 'react';
import { BUSINESS_INFO } from '../data/constants';
import { MessageCircle, Phone, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export const WhatsAppBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#1B4332] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#40916C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E0DCCF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#143828] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#40916C]/30 backdrop-blur-sm shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B4332] text-[#F3F0E6] border border-[#40916C]/40 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#40916C]" />
                <span>Instant Enquiry Available</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Have questions about our organic products or pricing?
              </h2>

              <p className="text-sm sm:text-base text-[#F3F0E6]/90 max-w-2xl leading-relaxed">
                Connect directly with Eswari Organic Store on WhatsApp. Tell us which organic foods you need, and we will promptly confirm current availability and pricing.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-[#E0DCCF]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#40916C]" />
                  <span>Direct WhatsApp Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#40916C]" />
                  <span>Prompt Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#40916C]" />
                  <span>Madurai, Tamil Nadu</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] active:scale-98 transition-all shadow-lg text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneUrl}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-[#F3F0E6] bg-white/10 hover:bg-white/20 border border-white/20 active:scale-98 transition-all text-center"
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
