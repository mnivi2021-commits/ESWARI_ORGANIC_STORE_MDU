import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/constants';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    productInterested: 'General Enquiry'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Eswari Organic Store,\nMy name is ${formData.name || 'Customer'}.\n${formData.phone ? `Phone: ${formData.phone}\n` : ''}Regarding: ${formData.productInterested}\nMessage: ${formData.message || 'I would like to enquire about your products.'}`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F9F7F2] relative border-b border-[#E0DCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3F0E6] text-[#1B4332] border border-[#E0DCCF] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4332] tracking-tight">
            Contact Eswari Organic Store
          </h2>
          <p className="mt-3 text-base text-[#5C635C]">
            Have a question about our organic foods, bulk requirements, or daily orders? We are here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#FDFCF9] border border-[#E0DCCF] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F3F0E6] text-[#1B4332] border border-[#E0DCCF] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#40916C]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-wider text-[#40916C] uppercase">Location</span>
                <h3 className="text-lg font-bold text-[#1B4332]">{BUSINESS_INFO.location}</h3>
                <p className="text-xs text-[#8A8F8A]">Proudly serving customers across Madurai and nearby regions</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#FDFCF9] border border-[#E0DCCF] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F3F0E6] text-[#1B4332] border border-[#E0DCCF] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#40916C]" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-xs font-bold tracking-wider text-[#40916C] uppercase">Phone Number</span>
                <h3 className="text-lg font-bold text-[#1B4332]">{BUSINESS_INFO.phone}</h3>
                <p className="text-xs text-[#8A8F8A] mb-3">Available for direct voice calls & inquiries</p>
                <a
                  href={BUSINESS_INFO.phoneUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#40916C] hover:text-[#1B4332] underline"
                >
                  <span>Call Now ({BUSINESS_INFO.phone})</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#FDFCF9] border border-[#E0DCCF] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F3F0E6] text-[#1B4332] border border-[#E0DCCF] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#40916C]" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-xs font-bold tracking-wider text-[#40916C] uppercase">Email Address</span>
                <h3 className="text-base sm:text-lg font-bold text-[#1B4332] break-all">{BUSINESS_INFO.email}</h3>
                <p className="text-xs text-[#8A8F8A] mb-3">Send your queries or catalogue requests</p>
                <a
                  href={BUSINESS_INFO.emailUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#40916C] hover:text-[#1B4332] underline"
                >
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* 3 Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <a
                href={BUSINESS_INFO.phoneUrl}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#F3F0E6] text-[#1B4332] border border-[#E0DCCF] font-bold text-xs hover:bg-[#E0DCCF] transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#1B4332]" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba5a] transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.emailUrl}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#FDFCF9] text-[#1B4332] border border-[#E0DCCF] font-bold text-xs hover:bg-[#F3F0E6] transition-all shadow-xs"
              >
                <Mail className="w-4 h-4 text-[#5C635C]" />
                <span>Send Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct WhatsApp Message Composer Form */}
          <div className="lg:col-span-7 bg-white border border-[#E0DCCF] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-[#1B4332]">
                Send a Quick WhatsApp Enquiry
              </h3>
              <p className="text-sm text-[#5C635C] mt-1">
                Fill this brief form and click send to initiate an instant WhatsApp conversation with pre-filled details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#2D332D] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-[#F9F7F2] border border-[#E0DCCF] rounded-xl text-[#2D332D] placeholder-[#8A8F8A] text-sm focus:outline-none focus:ring-2 focus:ring-[#40916C] focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#2D332D] mb-1.5">
                    Your Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 bg-[#F9F7F2] border border-[#E0DCCF] rounded-xl text-[#2D332D] placeholder-[#8A8F8A] text-sm focus:outline-none focus:ring-2 focus:ring-[#40916C] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-xs font-bold uppercase tracking-wider text-[#2D332D] mb-1.5">
                  Category or Product of Interest
                </label>
                <select
                  id="product"
                  value={formData.productInterested}
                  onChange={(e) => setFormData({ ...formData, productInterested: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F9F7F2] border border-[#E0DCCF] rounded-xl text-[#2D332D] text-sm focus:outline-none focus:ring-2 focus:ring-[#40916C] focus:bg-white"
                >
                  <option value="General Enquiry">General Enquiry / Store Info</option>
                  <option value="Jaggery Varieties">Jaggery Varieties (Palm Jaggery / Cubes)</option>
                  <option value="Honey Products">Honey & Honey Products</option>
                  <option value="Millets & Millet Products">Millets & Millet Mixes</option>
                  <option value="Flours">Flours (Ragi, Wheat)</option>
                  <option value="Dry Fruits & Nuts">Dry Fruits and Nuts</option>
                  <option value="Pulses">Pulses (Toor Dal, Green Gram)</option>
                  <option value="Powder Varieties">Powder Varieties (Turmeric, Chilly, Kollu)</option>
                  <option value="Aval Varieties">Aval Varieties</option>
                  <option value="Oils">Coconut Oil & Oil Items</option>
                  <option value="Rice">Karnataka Sona Rice</option>
                  <option value="Soaps">Herbal & Natural Soaps</option>
                  <option value="Vadakam">Traditional Vadakam</option>
                  <option value="Sanitary Pads">Chemical Free Sanitary Pads</option>
                  <option value="Snacks">Snacks (Athirasam, Chips, Kadalai Urundai)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#2D332D] mb-1.5">
                  Message / Required Quantities
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what items or quantities you are looking for..."
                  className="w-full px-4 py-3 bg-[#F9F7F2] border border-[#E0DCCF] rounded-xl text-[#2D332D] placeholder-[#8A8F8A] text-sm focus:outline-none focus:ring-2 focus:ring-[#40916C] focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#1B4332] hover:bg-[#143828] active:scale-[0.99] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Enquiry via WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#5C635C] pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#40916C]" />
                <span>Instant connection with Eswari Organic Store WhatsApp (+91 9597418168)</span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
