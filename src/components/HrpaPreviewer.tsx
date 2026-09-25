import React, { useState } from 'react';
import { HRPA_EXAMPLES } from '../data/bookData';
import { ScrollReveal } from './ScrollReveal';

export const HrpaPreviewer: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('copywriting');
  const [copied, setCopied] = useState<boolean>(false);

  const activeExample = HRPA_EXAMPLES[selectedKey];

  const fullPitch = `Subject: Quick idea for [Brand]'s project

Hi [Name],

${activeExample.hook}

${activeExample.relevance}

${activeExample.proof}

${activeExample.ask}

Best,
[Your Name]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hrpa" className="py-20 bg-stone-100/60 border-t border-[#1A252F]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] mb-2">
              Tactical Tool Inside The Book
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A252F] tracking-tight">
              The HRPA Proposal Framework
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600">
              Most freelancers write 500-word essays about their passions. Clients only care about what happens to their business after hiring you. Here is the 4-sentence formula in action:
            </p>
          </div>
        </ScrollReveal>

        {/* Niche Selector */}
        <ScrollReveal delayMs={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {Object.entries(HRPA_EXAMPLES).map(([key, ex]) => (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`px-4.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] ${
                  selectedKey === key
                    ? 'bg-[#2C3E50] text-white shadow-sm -translate-y-0.5'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-300 hover:bg-stone-50 hover:-translate-y-0.5'
                }`}
              >
                {ex.profession}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* HRPA Anatomy Breakdown */}
        <ScrollReveal delayMs={150}>
          <div className="bg-[#FDFBF7] rounded-xl border border-stone-200/90 shadow-sm p-6 sm:p-8 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-6 border-b border-stone-200">
            
            <div className="space-y-1 p-2.5 -m-1 rounded-lg hover:bg-white/70 transition-colors duration-200">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B8860B]">
                01 · Hook
              </span>
              <p className="text-xs font-medium text-[#1A252F]">Proof of inspection</p>
              <p className="text-[11px] text-stone-500">
                Shows you inspected their real page or content, not blasting a bot list.
              </p>
            </div>

            <div className="space-y-1 p-2.5 -m-1 rounded-lg hover:bg-white/70 transition-colors duration-200">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B8860B]">
                02 · Relevance
              </span>
              <p className="text-xs font-medium text-[#1A252F]">Identify business cost</p>
              <p className="text-[11px] text-stone-500">
                Explains why the gap hurts their retention, leads, or bottom line.
              </p>
            </div>

            <div className="space-y-1 p-2.5 -m-1 rounded-lg hover:bg-white/70 transition-colors duration-200">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B8860B]">
                03 · Proof
              </span>
              <p className="text-xs font-medium text-[#1A252F]">Targeted spec sample</p>
              <p className="text-[11px] text-stone-500">
                A free micro-sample or before/after rewrite showing instant capability.
              </p>
            </div>

            <div className="space-y-1 p-2.5 -m-1 rounded-lg hover:bg-white/70 transition-colors duration-200">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B8860B]">
                04 · Ask
              </span>
              <p className="text-xs font-medium text-[#1A252F]">Low-friction next step</p>
              <p className="text-[11px] text-stone-500">
                A 10-minute chat or loom preview instead of an intimidating sales pitch.
              </p>
            </div>

          </div>

          {/* Generated Pitch View */}
          <div className="bg-stone-50 rounded-lg p-5 sm:p-6 border border-stone-200/70 font-sans text-xs sm:text-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200/60 pb-3">
              <span className="font-mono text-xs text-stone-500">
                Generated HRPA Script for {activeExample.profession}
              </span>
              <button
                onClick={handleCopy}
                className="group px-3.5 py-1.5 bg-white border border-stone-300 hover:border-[#B8860B] rounded-md text-xs font-medium text-[#1A252F] flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-2xs hover:shadow-xs cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B]"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-stone-500 group-hover:text-[#B8860B] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Proposal</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-3 font-mono leading-relaxed text-[#1A252F]">
              <p className="text-stone-500 text-xs italic">
                Subject: Quick observation regarding [Brand]'s current setup
              </p>
              <p>Hi [Name],</p>
              
              <p className="bg-amber-50/70 p-2 rounded border-l-2 border-[#B8860B]">
                <span className="font-bold text-[#B8860B] font-sans text-xs mr-2">[HOOK]</span>
                {activeExample.hook}
              </p>

              <p className="bg-blue-50/50 p-2 rounded border-l-2 border-[#2C3E50]">
                <span className="font-bold text-[#2C3E50] font-sans text-xs mr-2">[RELEVANCE]</span>
                {activeExample.relevance}
              </p>

              <p className="bg-emerald-50/50 p-2 rounded border-l-2 border-emerald-700">
                <span className="font-bold text-emerald-700 font-sans text-xs mr-2">[PROOF]</span>
                {activeExample.proof}
              </p>

              <p className="bg-stone-100 p-2 rounded border-l-2 border-stone-500">
                <span className="font-bold text-stone-700 font-sans text-xs mr-2">[ASK]</span>
                {activeExample.ask}
              </p>

              <p>Best,<br />[Your Name]</p>
            </div>

            <div className="text-[11px] text-stone-500 border-t border-stone-200/60 pt-3">
              💡 <em>Rule from Page 14: Never send a bracketed field by accident. Once HRPA becomes second nature, you can write a fresh proposal in under 4 minutes.</em>
            </div>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
