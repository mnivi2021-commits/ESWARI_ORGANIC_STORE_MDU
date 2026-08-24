import React from 'react';
import { BUSINESS_INFO } from '../data/constants';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

export const MaduraiMap: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-[#E0DCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F0E6] text-[#1B4332] border border-[#E0DCCF] text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#40916C]" />
              <span>Location Overview</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4332] tracking-tight">
              Located in {BUSINESS_INFO.location}
            </h2>
            <p className="text-sm text-[#5C635C] mt-1">
              Providing natural and organic foods to households across Madurai city and surrounding districts.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FDFCF9] border border-[#E0DCCF] text-[#1B4332] text-xs sm:text-sm font-semibold hover:bg-[#F3F0E6] transition-all shadow-xs self-start md:self-auto"
          >
            <Navigation className="w-4 h-4 text-[#40916C]" />
            <span>Open Madurai on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8A8F8A]" />
          </a>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm border border-[#E0DCCF] bg-[#F3F0E6] h-80 sm:h-96">
          <iframe
            title="Madurai, Tamil Nadu Location Map - Eswari Organic Store"
            src="https://maps.google.com/maps?q=Madurai,%20Tamil%20Nadu,%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />

          {/* Non-intrusive bottom information bar */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-[#FDFCF9]/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#E0DCCF] shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#1B4332] text-white flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-[#40916C]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1B4332]">Eswari Organic Store</p>
              <p className="text-[11px] text-[#5C635C]">{BUSINESS_INFO.location}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
