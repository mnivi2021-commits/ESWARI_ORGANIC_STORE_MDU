import React from 'react';
import { Leaf, Award, Users, MapPin, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: Leaf,
      title: 'Natural & Organic',
      description: 'Natural food choices for everyday living.',
      badge: 'Wholesome',
      accent: 'border-emerald-200 bg-emerald-50/50'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Carefully selected products with quality in mind.',
      badge: 'Selected',
      accent: 'border-amber-200 bg-amber-50/50'
    },
    {
      icon: Users,
      title: 'Customer Friendly',
      description: 'Simple enquiry and easy customer support.',
      badge: 'Direct WhatsApp',
      accent: 'border-emerald-200 bg-emerald-50/50'
    },
    {
      icon: MapPin,
      title: 'Local Store',
      description: 'Proudly serving customers in Madurai, Tamil Nadu.',
      badge: 'Madurai, TN',
      accent: 'border-stone-200 bg-stone-50/60'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white relative border-b border-[#E0DCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3F0E6] text-[#1B4332] border border-[#E0DCCF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#40916C]" />
            <span>Our Commitment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B4332] tracking-tight">
            Why Choose Eswari Organic Store
          </h2>
          <p className="mt-3 text-base text-[#5C635C]">
            Dedicated to bringing healthy, natural food choices directly to your home with trustworthy service.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="relative bg-[#FDFCF9] rounded-2xl p-6 border border-[#E0DCCF] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon and badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#1B4332] text-white flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#143828] transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#40916C]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B4332] bg-[#F3F0E6] border border-[#E0DCCF] px-2.5 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1B4332] mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5C635C] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle bottom line */}
                <div className="mt-6 pt-4 border-t border-[#E0DCCF] flex items-center text-xs font-semibold text-[#40916C]">
                  <span>Eswari Organic Store</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
