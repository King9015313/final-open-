import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#1A252F]/15 shadow-sm' 
          : 'bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#1A252F]/10 shadow-2xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Section: Uploaded Logo + Wordmark, positioned right next to Navigation Links */}
        <div className="flex items-center gap-4 lg:gap-8 min-w-0 shrink">
          <a 
            href="#" 
            className="flex items-center gap-2 sm:gap-3.5 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] rounded-md py-1 shrink-0"
            aria-label="HM Digital Studio Store - DIGITALASSETSUITE"
          >
            {/* Perfectly sized logo fitting comfortably within the header with fixed shrink-0 protection */}
            <div className="relative shrink-0 flex items-center justify-center p-0.5 sm:p-1 bg-white/95 rounded-md border border-stone-200/80 shadow-2xs transition-all duration-200 group-hover:shadow-xs group-hover:border-[#B8860B]/40 group-hover:scale-[1.02]">
              <img 
                src="/images/hm-digital-studio-logo.svg"
                alt="HM Digital Studio Store Logo" 
                width="48"
                height="40"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-8 sm:h-10 md:h-11 w-auto max-w-[48px] sm:max-w-[58px] object-contain rounded-xs shrink-0 select-none"
              />
            </div>

            {/* Brand Titles: separate container, guaranteed no overlap with logo, permanent metallic gradient shift */}
            <div className="flex flex-col shrink-0 min-w-0 select-none">
              <span className="text-xs xs:text-sm sm:text-base md:text-lg font-sans font-black tracking-[0.06em] sm:tracking-[0.08em] uppercase leading-tight whitespace-nowrap animate-digital-asset-suite">
                DIGITALASSETSUITE
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#B8860B] uppercase font-semibold leading-none mt-0.5 hidden xs:block whitespace-nowrap">
                HM Digital Studio Store
              </span>
            </div>
          </a>

          {/* Navigation links positioned directly next to the brand logo */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-[#1A252F]/80">
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
        </div>

        {/* Medium-screen navigation fallback for tablet (md to lg) */}
        <nav className="hidden md:flex lg:hidden items-center gap-4 text-xs font-medium text-[#1A252F]/80">
          <a href="#system" className="hover:text-[#1A252F] transition-colors">System</a>
          <a href="#hrpa" className="hover:text-[#1A252F] transition-colors">HRPA</a>
          <a href="#workbook" className="hover:text-[#1A252F] transition-colors">30-Day</a>
          <a href="#vault" className="hover:text-[#1A252F] transition-colors">Vault</a>
          <a href="#testimonials" className="hover:text-[#1A252F] transition-colors">Reviews</a>
          <a href="#pricing" className="hover:text-[#1A252F] transition-colors">Pricing</a>
        </nav>

        {/* Right CTA Action with proportional scaling and zero overlap guarantee */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onCtaClick}
            className="group px-2.5 xs:px-3.5 sm:px-5 py-1.5 sm:py-2 text-[11px] xs:text-xs sm:text-sm font-semibold text-white bg-[#2C3E50] hover:bg-[#1A252F] rounded-md transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap cursor-pointer active:scale-95 active:translate-y-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 flex items-center gap-1 sm:gap-1.5 shrink-0"
          >
            <span>Get Client Ready</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 font-sans">→</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-[#1A252F] hover:bg-black/5 rounded-md cursor-pointer transition-all duration-200 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] shrink-0"
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
        <div className="md:hidden border-t border-[#1A252F]/10 bg-[#FDFBF7] px-6 py-4 space-y-3 text-sm animate-hero-fade-up max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto shadow-lg">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200/70">
            <div className="shrink-0 p-1 bg-white/95 rounded-md border border-stone-200/80 shadow-2xs">
              <img 
                src="/images/hm-digital-studio-logo.svg"
                alt="HM Digital Studio Store Logo" 
                width="42"
                height="35"
                loading="lazy"
                decoding="async"
                className="h-9 w-auto max-w-[48px] object-contain rounded-xs shrink-0 select-none"
              />
            </div>
            <div className="flex flex-col shrink-0 min-w-0">
              <span className="font-sans font-black text-xs sm:text-sm tracking-[0.06em] sm:tracking-[0.08em] uppercase leading-tight whitespace-nowrap animate-digital-asset-suite">
                DIGITALASSETSUITE
              </span>
              <span className="text-[9px] font-mono tracking-wider text-[#B8860B] uppercase font-semibold whitespace-nowrap">
                HM Digital Studio Store
              </span>
            </div>
          </div>

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
