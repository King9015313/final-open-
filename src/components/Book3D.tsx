import React, { useState } from 'react';

interface Book3DProps {
  onOpenPreview?: () => void;
  edition?: 'client-ready' | 'payment-recovery';
  compact?: boolean;
}

export const Book3D: React.FC<Book3DProps> = ({ 
  onOpenPreview, 
  edition = 'client-ready',
  compact = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isClientReady = edition === 'client-ready';

  return (
    <div 
      className={`relative inline-block select-none transition-transform duration-300 ${
        isHovered ? '-translate-y-2' : ''
      } ${onOpenPreview ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpenPreview}
      role={onOpenPreview ? 'button' : undefined}
      tabIndex={onOpenPreview ? 0 : undefined}
      onKeyDown={(e) => {
        if (onOpenPreview && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onOpenPreview();
        }
      }}
    >
      {/* 3D Stack container */}
      <div 
        className={`relative ${
          compact ? 'w-56 h-[320px]' : 'w-72 sm:w-80 h-[430px] sm:h-[470px]'
        } flex items-center justify-center`}
      >
        {/* Soft shadow under the book */}
        <div 
          className="absolute -bottom-6 w-[88%] h-8 bg-[#1A252F]/25 blur-xl rounded-[100%] transition-opacity duration-300"
          style={{ opacity: isHovered ? 0.45 : 0.25 }}
        />

        {/* Paper page edge on the right */}
        <div 
          className={`absolute right-1 top-2 bottom-2 w-6 rounded-r-sm page-edge border-y border-r border-[#D9D2C2] z-0 shadow-inner`}
        />

        {/* Hardcover Front */}
        <div 
          className={`relative z-10 w-[95%] h-full rounded-r-md rounded-l-sm overflow-hidden book-shadow flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 border-r border-t border-b ${
            isClientReady 
              ? 'bg-[#0E3B33] text-[#FDFBF7] border-[#185348]' 
              : 'bg-[#0E1B2A] text-[#FDFBF7] border-[#1A2E46]'
          }`}
        >
          {/* Subtle Spine fold gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-4 binder-spine pointer-events-none" />

          {/* Double border inset line (Authentic from the PDF cover) */}
          <div className="absolute inset-3 sm:inset-4 border border-[#B8860B]/40 pointer-events-none rounded-[2px]" />
          <div className="absolute inset-[15px] sm:inset-[19px] border border-[#B8860B]/20 pointer-events-none" />

          {/* Header Tag / Edition */}
          <div className="relative z-10 text-center pt-2">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
              {isClientReady ? 'PREMIUM EDITION' : 'OPERATING SYSTEM'}
            </span>
            <div className="w-8 h-[1px] bg-[#D4AF37]/50 mx-auto mt-2" />
          </div>

          {/* Title and Subtitle */}
          <div className="relative z-10 text-center my-auto px-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-2 leading-none">
              {isClientReady ? 'CLIENT READY' : 'PAYMENT RECOVERY'}
            </h2>
            <p className="text-xs sm:text-sm italic font-serif text-[#D4AF37] tracking-wide mb-3">
              {isClientReady ? 'The Complete Client-Acquisition System' : 'The Freelancer Recovery Framework'}
            </p>
            <p className="text-[10px] sm:text-xs text-stone-300 font-sans leading-relaxed max-w-[220px] mx-auto opacity-90">
              {isClientReady 
                ? 'A 30-Day Implementation Workbook & Template Vault for Indian Freelancers' 
                : 'Core Playbook & 20 Word-for-Word Invoice Recovery Follow-Ups'}
            </p>
          </div>

          {/* Gold Accent Ribbon (Decorative Bookmark) */}
          <div className="absolute top-0 right-10 w-3 h-14 bg-gradient-to-b from-[#B8860B] to-[#996515] shadow-md transform -skew-y-6">
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#0E3B33]" />
          </div>

          {/* Footer Metadata on Cover */}
          <div className="relative z-10 flex items-center justify-between text-[9px] sm:text-[10px] tracking-wider text-stone-400 border-t border-white/10 pt-3">
            <span>{isClientReady ? 'CLIENT READY SYSTEM' : 'HIMANSHU MANJHI'}</span>
            <span className="text-[#D4AF37] font-mono">2026 EDITION</span>
          </div>
        </div>
      </div>

      {/* Look Inside badge button */}
      {onOpenPreview && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenPreview();
          }}
          className="group mt-3 w-full py-2 px-3 bg-white/95 hover:bg-white text-xs font-medium text-[#1A252F] hover:text-[#0E3B33] border border-stone-200 hover:border-[#B8860B]/60 rounded-md shadow-2xs hover:shadow-md flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:scale-98 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B]"
        >
          <svg className="w-3.5 h-3.5 text-[#B8860B] transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="font-sans">Click to Preview Sample Pages</span>
        </button>
      )}
    </div>
  );
};
