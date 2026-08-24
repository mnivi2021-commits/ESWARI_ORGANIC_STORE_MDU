import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'header' | 'hero' | 'footer' | 'icon-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
  size = 'md'
}) => {
  const isDark = variant === 'dark' || variant === 'footer';
  const isHero = variant === 'hero';

  const textColor = isDark ? 'text-white' : 'text-[#1B4332]';
  const subTextColor = isDark ? 'text-[#40916C]' : 'text-[#40916C]';
  const badgeColor = isDark ? 'text-[#D8B4E2]' : 'text-[#5C635C]';

  if (variant === 'icon-only') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#1C4B37" stroke="#34D399" strokeWidth="2" />
          {/* Inner ring */}
          <circle cx="50" cy="50" r="41" stroke="#D1FAE5" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          {/* Sun rays & leaf motif */}
          <path d="M50 20C50 20 62 32 62 48C62 58 54 66 50 70C46 66 38 58 38 48C38 32 50 20 50 20Z" fill="#34D399" />
          <path d="M50 24V68" stroke="#1C4B37" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 36L44 42" stroke="#1C4B37" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 46L42 54" stroke="#1C4B37" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 36L56 42" stroke="#1C4B37" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 46L58 54" stroke="#1C4B37" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="50" cy="74" r="3.5" fill="#FBBF24" />
        </svg>
      </div>
    );
  }

  if (isHero) {
    return (
      <div className={`flex items-center gap-3.5 sm:gap-4.5 ${className}`}>
        {/* Emblem */}
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-[#1C4B37] via-[#153a2a] to-[#0d261b] p-2 shadow-lg shadow-emerald-950/20 border border-emerald-500/30 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="44" stroke="#6EE7B7" strokeWidth="1.5" strokeDasharray="3 2" />
              {/* Organic Sprout / Tree Motif */}
              <path d="M50 18C50 18 64 32 64 50C64 62 55 70 50 74C45 70 36 62 36 50C36 32 50 18 50 18Z" fill="url(#heroLeafGrad)" />
              <path d="M50 22V72" stroke="#0D261B" strokeWidth="2" strokeLinecap="round" />
              <path d="M50 34L42 42M50 46L40 54M50 34L58 42M50 46L60 54" stroke="#0D261B" strokeWidth="1.8" strokeLinecap="round" />
              {/* Sun dot */}
              <circle cx="50" cy="80" r="4" fill="#F59E0B" />
              <defs>
                <linearGradient id="heroLeafGrad" x1="50" y1="18" x2="50" y2="74" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34D399" />
                  <stop offset="1" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-amber-500 text-stone-900 rounded-full p-1 shadow">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-emerald-700 uppercase bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-300/60">
              EST. MADURAI
            </span>
          </div>
          <span className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-[#143828] leading-none mt-1">
            ESWARI
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] text-[#2D6A4F] uppercase">
              ORGANIC STORE
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-stone-500 font-medium tracking-wide mt-0.5">
            Natural Foods • Pure & Wholesome
          </span>
        </div>
      </div>
    );
  }

  // Header / Default / Footer
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Emblem */}
      <div className={`relative flex-shrink-0 ${
        isDark 
          ? 'w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-900/90 border border-emerald-400/30 shadow-inner' 
          : 'w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#1C4B37] to-[#123325] border border-emerald-600/30 shadow-md shadow-emerald-950/10'
      } p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" stroke="#6EE7B7" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
          <path d="M50 18C50 18 64 32 64 50C64 62 55 70 50 74C45 70 36 62 36 50C36 32 50 18 50 18Z" fill="#34D399" />
          <path d="M50 22V72" stroke="#0D261B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 34L42 42M50 46L40 54M50 34L58 42M50 46L60 54" stroke="#0D261B" strokeWidth="2" strokeLinecap="round" />
          <circle cx="50" cy="80" r="3.5" fill="#FBBF24" />
        </svg>
      </div>

      {/* Brand Name Text */}
      <div className="flex flex-col text-left">
        <span className={`font-serif-title text-lg sm:text-xl font-bold tracking-tight leading-none ${textColor}`}>
          ESWARI
        </span>
        <span className={`text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] uppercase leading-tight mt-0.5 ${subTextColor}`}>
          ORGANIC STORE
        </span>
        <span className={`text-[9px] font-medium tracking-wider uppercase opacity-80 ${badgeColor}`}>
          Madurai • Tamil Nadu
        </span>
      </div>
    </div>
  );
};
