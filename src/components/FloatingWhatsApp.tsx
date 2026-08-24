import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/constants';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show after slight scroll or 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {/* Floating Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FDFCF9]/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg border border-[#E0DCCF] animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="w-2 h-2 rounded-full bg-[#40916C] animate-pulse" />
          <span className="text-xs font-bold text-[#1B4332]">Chat with us on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8A8F8A] hover:text-[#1B4332] p-0.5 rounded-full cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat on WhatsApp with Eswari Organic Store"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="text-sm font-bold tracking-wide pr-1 hidden sm:inline">
          WhatsApp
        </span>
        {/* Pulse effect */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40916C] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#40916C]"></span>
        </span>
      </a>
    </div>
  );
};
