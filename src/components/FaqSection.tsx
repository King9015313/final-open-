import React, { useState } from 'react';
import { FAQS } from '../data/bookData';
import { ScrollReveal } from './ScrollReveal';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-stone-100/70 border-t border-[#1A252F]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] mb-2">
              Clear Answers
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A252F] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              Real questions from Indian writers, video editors, designers, and developers before adopting the system:
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="space-y-3.5 mb-16">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <ScrollReveal key={idx} delayMs={idx * 60} distance={14}>
                <div
                  className={`bg-white rounded-lg border transition-all duration-200 overflow-hidden hover-lift ${
                    isOpen ? 'border-[#B8860B]/50 shadow-xs' : 'border-stone-200 hover:border-stone-300 shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/80 transition-colors duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B]"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-[#1A252F]">
                      {faq.q}
                    </span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen ? 'rotate-180 bg-[#B8860B]/10 text-[#B8860B]' : 'bg-stone-100 text-stone-500'
                    }`}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth ease-in-out height transition container */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Guarantee Banner (Official Copy) */}
        <ScrollReveal delayMs={150}>
          <div className="bg-[#0E3B33] text-white rounded-xl p-8 sm:p-10 shadow-lg text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8860B]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-3 relative z-10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                The Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Instant Lifetime Access. High-Quality PDF Downloads.
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans max-w-lg mx-auto">
                You receive full access to the 80-page manual, the 30-day implementation workbook, and all templates instantly upon payment. Read it on any screen, print the worksheets, and start Day 1 immediately.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

