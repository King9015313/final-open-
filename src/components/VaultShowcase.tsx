import React, { useState } from 'react';
import { SAMPLE_SWIPE_TEMPLATES } from '../data/bookData';
import { SwipeTemplate } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const VaultShowcase: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<SwipeTemplate>(SAMPLE_SWIPE_TEMPLATES[0]);
  const [activeTab, setActiveTab] = useState<'scripts' | 'documents'>('scripts');
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);

  const handleCopyTemplate = () => {
    const textToCopy = selectedTemplate.subject 
      ? `Subject: ${selectedTemplate.subject}\n\n${selectedTemplate.content}` 
      : selectedTemplate.content;
    navigator.clipboard.writeText(textToCopy);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <section id="vault" className="py-20 bg-white border-t border-[#1A252F]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] mb-2">
              Part Three · The Bonus Vault
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A252F] tracking-tight">
              Stop Staring at a Blank Screen
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600">
              Never wonder what to say when pitching, following up, or responding to awkward client questions. 12 battle-tested scripts and 2 ready-to-use business documents:
            </p>
          </div>
        </ScrollReveal>

        {/* Tab switch between Scripts and Documents */}
        <ScrollReveal delayMs={100}>
          <div className="flex items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveTab('scripts')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer active:scale-98 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] ${
                activeTab === 'scripts'
                  ? 'bg-[#2C3E50] text-white shadow-sm -translate-y-0.5'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:-translate-y-0.5'
              }`}
            >
              Outreach & Negotiation Scripts (12 Total)
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer active:scale-98 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] ${
                activeTab === 'documents'
                  ? 'bg-[#2C3E50] text-white shadow-sm -translate-y-0.5'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:-translate-y-0.5'
              }`}
            >
              Legal Contracts & Invoices
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={150}>
          {activeTab === 'scripts' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Script Selector List (4 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-2 px-1">
                Click to inspect preview:
              </span>
              {SAMPLE_SWIPE_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => {
                    setSelectedTemplate(tmpl);
                    setCopiedTemplate(false);
                  }}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all duration-200 cursor-pointer active:scale-98 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] ${
                    selectedTemplate.id === tmpl.id
                      ? 'border-[#0E3B33] bg-emerald-50/60 shadow-sm ring-1 ring-[#0E3B33]/20 -translate-y-0.5'
                      : 'border-stone-200 bg-white hover:bg-stone-50 hover:border-stone-300 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold text-[#B8860B]">
                      {tmpl.number}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-stone-100 text-stone-600 rounded">
                      {tmpl.niche}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#1A252F] mt-1">
                    {tmpl.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">
                    {tmpl.useCase}
                  </p>
                </button>
              ))}

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 italic">
                + 8 additional scripts in the full guide including: Day 3 Follow-Up, Day 7 Final Nudge, Asking for a Testimonial, Upwork / Fiverr Pitch, and Responding to Scope Creep.
              </div>
            </div>

            {/* Script Display Surface (7 cols) */}
            <div className="lg:col-span-7 bg-[#FDFBF7] rounded-xl border border-stone-200 p-6 sm:p-8 space-y-4 shadow-sm hover:border-stone-300 transition-colors duration-200">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-mono text-[#B8860B] uppercase font-semibold">
                    {selectedTemplate.number} · {selectedTemplate.useCase}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1A252F]">
                    {selectedTemplate.title}
                  </h3>
                </div>

                <button
                  onClick={handleCopyTemplate}
                  className="group px-3 py-1.5 bg-white border border-stone-300 hover:border-[#B8860B] rounded-md text-xs font-medium text-[#1A252F] flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-2xs hover:shadow-xs cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B]"
                >
                  {copiedTemplate ? (
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
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
              </div>

              {selectedTemplate.subject && (
                <div className="p-2.5 bg-white rounded-md border border-stone-200 text-xs font-mono text-stone-800">
                  <span className="font-bold text-stone-500">SUBJECT: </span>
                  {selectedTemplate.subject}
                </div>
              )}

              <div className="bg-white p-5 rounded-lg border border-stone-200/90 font-mono text-xs sm:text-sm whitespace-pre-line text-[#1A252F] leading-relaxed shadow-2xs">
                {selectedTemplate.content}
              </div>

              <div className="p-3 bg-amber-50/80 rounded-md border border-[#B8860B]/30 text-xs text-amber-950">
                <strong>PRO TIP:</strong> {selectedTemplate.proTip}
              </div>
            </div>

          </div>
        ) : (
          /* Documents Showcase */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-[#FDFBF7] rounded-xl border border-stone-200 p-6 sm:p-8 space-y-4 hover-lift hover:border-stone-300">
              <span className="text-xs font-mono text-[#B8860B] uppercase font-semibold">
                Document 11 (Pages 71–72)
              </span>
              <h3 className="font-serif font-bold text-xl text-[#1A252F]">
                Freelance Service Agreement
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A plain-English contract designed specifically for solo freelancers. Protects your time and enforces a 50% advance before starting work.
              </p>
              <div className="space-y-2 text-xs font-mono bg-white p-4 rounded-md border border-stone-200 text-stone-700 shadow-2xs">
                <p>✓ <strong>Section 2: Scope of Work</strong> — Clearly lists exact deliverables; out-of-scope work billed per Template 12.</p>
                <p>✓ <strong>Section 3: Payment Terms</strong> — 50% Advance mandatory before work starts; 50% on final files.</p>
                <p>✓ <strong>Section 4: Revisions Limit</strong> — Caps minor revisions at agreed rounds; excess billed hourly.</p>
                <p>✓ <strong>Section 6: Copyright</strong> — Freelancer retains all rights until the final invoice is paid in full.</p>
              </div>
            </div>

            <div className="bg-[#FDFBF7] rounded-xl border border-stone-200 p-6 sm:p-8 space-y-4 hover-lift hover:border-stone-300">
              <span className="text-xs font-mono text-[#B8860B] uppercase font-semibold">
                Document 12 (Page 73)
              </span>
              <h3 className="font-serif font-bold text-xl text-[#1A252F]">
                Standard Invoice Format
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A clean, branded invoice format with Indian tax & banking metadata that gets paid on Net 7 or Net 15 without back-and-forth.
              </p>
              <div className="space-y-2 text-xs font-mono bg-white p-4 rounded border border-stone-200 text-stone-700">
                <p>✓ <strong>Invoice # & Due Dates</strong> — Prominently placed Net 7/15 timeline.</p>
                <p>✓ <strong>Bank Transfer Details</strong> — Account number, Bank Name, IFSC code.</p>
                <p>✓ <strong>UPI ID Fast-Track</strong> — QR/VPA field for quick domestic payments.</p>
                <p>✓ <strong>GSTIN & Compliance</strong> — Proper legal header if registered under Indian GST.</p>
              </div>
            </div>

          </div>
        )}
        </ScrollReveal>

      </div>
    </section>
  );
};
