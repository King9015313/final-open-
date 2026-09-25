import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A252F] text-stone-300 py-16 border-t border-black/20 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-white/10">
          
          <div className="space-y-3 max-w-sm">
            <span className="font-serif font-bold text-xl text-white tracking-tight block">
              CLIENT READY
            </span>
            <p className="text-stone-400 text-xs leading-relaxed">
              The 30-Day Client Acquisition System & Implementation Workbook for Indian freelancers ready to build sustainable client rosters and high-paying retainers.
            </p>
            <p className="text-stone-500 text-[11px] font-mono">
              Prepared by Himanshu Manjhi · 2026 Edition
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="font-serif font-semibold text-white block text-xs">The Framework</span>
              <ul className="space-y-1.5 text-stone-400 text-xs">
                <li><a href="#system" className="hover:text-[#D4AF37] hover:translate-x-0.5 inline-block transition-all duration-150">10 Core Chapters</a></li>
                <li><a href="#hrpa" className="hover:text-[#D4AF37] hover:translate-x-0.5 inline-block transition-all duration-150">HRPA Proposal Model</a></li>
                <li><a href="#problem" className="hover:text-[#D4AF37] hover:translate-x-0.5 inline-block transition-all duration-150">The No-Portfolio Trap</a></li>
                <li><a href="#workbook" className="hover:text-[#D4AF37] hover:translate-x-0.5 inline-block transition-all duration-150">30-Day Daily Missions</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-serif font-semibold text-white block text-xs">The Vault</span>
              <ul className="space-y-1.5 text-stone-400 text-xs">
                <li><a href="#vault" className="hover:text-[#D4AF37] hover:translate-x-0.5 inline-block transition-all duration-150">12 Swipe Templates</a></li>
                <li><a href="#system" className="hover:text-[#D4AF37] hover:translate-x-0.5 inline-block transition-all duration-150">Freelance Contract</a></li>
                <li><a href="#system" className="hover:text-[#D4AF37] hover:translate-x-0.5 inline-block transition-all duration-150">Standard Invoice</a></li>
                <li><a href="#pricing" className="hover:text-[#D4AF37] hover:translate-x-0.5 inline-block transition-all duration-150">Rate Calculator</a></li>
              </ul>
            </div>

            <div className="space-y-2 col-span-2 sm:col-span-1">
              <span className="font-serif font-semibold text-white block text-xs">Direct Support</span>
              <p className="text-stone-400 text-xs leading-relaxed">
                Questions about implementation? Reach out at:
                <br />
                <a href="mailto:manjhihimanshu1@gmail.com" className="text-[#D4AF37] hover:underline font-mono inline-block mt-1 transition-colors">
                  manjhihimanshu1@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Legal & Compliance Disclaimers (Authentic from Page 02) */}
        <div className="space-y-3 text-[11px] text-stone-400 leading-relaxed max-w-4xl">
          <p>
            <strong className="text-stone-300">EDUCATIONAL PURPOSE:</strong> This is a tactical system built from real freelance outreach patterns. It is not a promise of guaranteed income. Your results depend on your execution volume, your skill level, and how consistently you apply the 30-Day Workbook.
          </p>
          <p>
            <strong className="text-stone-300">TAX & COMPLIANCE DISCLAIMER:</strong> Pricing, invoicing, TDS, and GST references in this guide are general information for Indian freelancers, not professional tax advice. Consult a registered CA for your specific situation in India.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Client Ready System. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Instant PDF Deliverables</span>
            <span>·</span>
            <span>Made for Indian Freelancers</span>
            <span>·</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-stone-400 hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1 hover:-translate-y-0.5"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
