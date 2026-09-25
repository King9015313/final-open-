import React, { useState } from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#1A252F]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#1A252F] hover:text-[#B8860B] transition-all duration-200 hover:scale-[1.01] whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] rounded-xs"
        >
          CLIENT READY
        </a>

        {/* Zone 2: 4–6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1A252F]/80">
          <a href="#system" className="hover:text-[#1A252F] transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-8">
            The System
          </a>
          <a href="#problem" className="hover:text-[#1A252F] transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-8">
            The Reality
          </a>
          <a href="#hrpa" className="hover:text-[#1A252F] transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-8">
            HRPA Method
          </a>
          <a href="#workbook" className="hover:text-[#1A252F] transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-8">
            30-Day Plan
          </a>
          <a href="#vault" className="hover:text-[#1A252F] transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-8">
            Template Vault
          </a>
          <a href="#testimonials" className="hover:text-[#1A252F] transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-8">
            Testimonials
          </a>
          <a href="#pricing" className="hover:text-[#1A252F] transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-8">
            Pricing
          </a>
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCtaClick}
            className="group px-4.5 py-2 text-xs sm:text-sm font-medium text-white bg-[#2C3E50] hover:bg-[#1A252F] rounded-md transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap cursor-pointer active:scale-95 active:translate-y-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 flex items-center gap-1.5"
          >
            <span>Get Client Ready</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 font-sans">→</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A252F] hover:bg-black/5 rounded-md cursor-pointer transition-all duration-200 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B]"
            aria-label="Toggle navigation menu"
          >
            <svg className={`w-5 h-5 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1A252F]/10 bg-[#FDFBF7] px-6 py-4 space-y-2 text-sm animate-hero-fade-up">
          <a 
            href="#system" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 px-2 rounded font-medium text-[#1A252F] hover:bg-stone-200/50 hover:translate-x-1 transition-all duration-200"
          >
            The System
          </a>
          <a 
            href="#problem" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 px-2 rounded font-medium text-[#1A252F] hover:bg-stone-200/50 hover:translate-x-1 transition-all duration-200"
          >
            The Reality
          </a>
          <a 
            href="#hrpa" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 px-2 rounded font-medium text-[#1A252F] hover:bg-stone-200/50 hover:translate-x-1 transition-all duration-200"
          >
            HRPA Method
          </a>
          <a 
            href="#workbook" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 px-2 rounded font-medium text-[#1A252F] hover:bg-stone-200/50 hover:translate-x-1 transition-all duration-200"
          >
            30-Day Plan
          </a>
          <a 
            href="#vault" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 px-2 rounded font-medium text-[#1A252F] hover:bg-stone-200/50 hover:translate-x-1 transition-all duration-200"
          >
            Template Vault
          </a>
          <a 
            href="#testimonials" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 px-2 rounded font-medium text-[#1A252F] hover:bg-stone-200/50 hover:translate-x-1 transition-all duration-200"
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 px-2 rounded font-medium text-[#1A252F] hover:bg-stone-200/50 hover:translate-x-1 transition-all duration-200"
          >
            Pricing & Tiers
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-white bg-[#2C3E50] hover:bg-[#1A252F] rounded-md transition-all duration-200 active:scale-98 shadow-sm cursor-pointer"
            >
              Get The System (From ₹499)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
