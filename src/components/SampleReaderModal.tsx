import React, { useState } from 'react';

interface SampleReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetSystemClick: () => void;
}

export const SampleReaderModal: React.FC<SampleReaderModalProps> = ({
  isOpen,
  onClose,
  onGetSystemClick
}) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  if (!isOpen) return null;

  const samplePages = [
    {
      label: 'Cover & Title',
      pageNumber: '01',
      section: 'Front Matter',
      title: 'CLIENT READY: The Complete Client-Acquisition System',
      subtitle: 'A 30-Day Implementation Workbook & Template Vault for Indian Freelancers Who Are Done Waiting for Work to Find Them.',
      content: (
        <div className="space-y-4 text-center py-6">
          <div className="w-16 h-[1px] bg-[#B8860B] mx-auto mb-2" />
          <p className="text-xs font-mono tracking-widest text-[#B8860B] uppercase">Premium Edition · 2026</p>
          <h2 className="text-3xl font-serif font-bold text-[#1A252F]">CLIENT READY</h2>
          <p className="text-sm italic font-serif text-[#0E3B33]">The Complete Client-Acquisition System</p>
          <div className="max-w-md mx-auto text-xs text-stone-600 leading-relaxed pt-4 border-t border-stone-200">
            Written specifically for Indian writers, video editors, designers, and developers tired of sending generic proposals into a void.
          </div>
          <div className="pt-6 grid grid-cols-3 gap-2 text-[11px] text-stone-500 font-mono">
            <div>Part 1: The System</div>
            <div>Part 2: 30-Day Workbook</div>
            <div>Part 3: Bonus Vault</div>
          </div>
        </div>
      )
    },
    {
      label: 'Chapter 01: The Reality Check',
      pageNumber: '06',
      section: 'Part One · The System',
      title: 'Diagnosing the Silence in Your Inbox',
      subtitle: 'Why 9 out of 10 beginner freelancers in India get ghosted.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <p>
            You have skills, but you don't have clients. You send proposals into a void and hear nothing back.
          </p>
          <p>
            When an Indian client finally does ask for your rate, you freeze — scared that quoting a fair number will make them disappear. So you either lowball yourself or you never send the quote at all.
          </p>
          <p>
            This is the reality for roughly <strong>9 out of 10 beginner freelancers in India</strong>. And here is the part almost nobody tells you: the problem was never your writing, your editing, or your design work. The problem is that nobody taught you the <em>logic of client acquisition</em>. It is not a talent. It is a system.
          </p>
          <div className="p-4 bg-emerald-50 rounded-lg border-l-3 border-[#0E3B33] text-xs">
            <strong className="text-[#0E3B33] uppercase tracking-wider block mb-1">REFRAME</strong>
            A client who ghosts you is not rejecting your skill. They are reacting to risk signals you didn't know you were sending — a generic proposal, no proof, no clear next step.
          </div>
        </div>
      )
    },
    {
      label: 'Chapter 02: No-Portfolio Trap',
      pageNumber: '07',
      section: 'Part One · The System',
      title: 'How to Build Proof Without Permission',
      subtitle: 'Targeted spec work, micro projects, and contra deals.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <p>
            Clients don't avoid beginners because your work is bad. They avoid beginners because hiring one is a risk-management exercise, and you haven't given them a way to de-risk it.
          </p>
          <p>
            Without a portfolio, you represent unknown risk to their business, their deadline, and their budget. The fix is not to wait until you have "enough" experience — it is to manufacture proof before permission:
          </p>
          <ol className="space-y-2.5 pl-4 list-decimal">
            <li>
              <strong>Targeted spec work:</strong> Create an unsolicited sample for a real brand. Instead of a generic portfolio piece, write a high-retention YouTube script or re-edit a creator's Reel. You do not need permission to use a brand privately in a pitch.
            </li>
            <li>
              <strong>Micro projects:</strong> Offer a specific, low-friction entry point (e.g. "1-Page Retention Drop-Off Audit with 3 Actionable Fixes").
            </li>
            <li>
              <strong>Contra deals:</strong> Trade a small service for a filmed testimonial or direct introduction to another business owner.
            </li>
          </ol>
          <div className="p-3 bg-amber-50 rounded border border-amber-200/80 text-xs text-amber-900">
            ⚠️ <em>Rule: Keep spec work to under 2 hours. If it takes longer, you are perfecting instead of prospecting.</em>
          </div>
        </div>
      )
    },
    {
      label: 'Chapter 06: HRPA Framework',
      pageNumber: '13',
      section: 'Part One · The System',
      title: 'Proposals That Get Replies',
      subtitle: 'The 4-part skeleton replacing 500-word essays.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <p>
            Most beginners write proposals focused entirely on themselves — their backstory, their favorite tools, their passion. Clients only care about what happens to their business after they hire you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <span className="font-bold text-[#B8860B] block mb-1">1. Hook</span>
              Prove you actually looked at their business — a specific page, post, or product.
            </div>
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <span className="font-bold text-[#B8860B] block mb-1">2. Relevance</span>
              Name a specific gap or commercial opportunity you noticed, not generic pain.
            </div>
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <span className="font-bold text-[#B8860B] block mb-1">3. Proof</span>
              Show a relevant past result or a spec-work sample built for exactly this client.
            </div>
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <span className="font-bold text-[#B8860B] block mb-1">4. Ask</span>
              Propose one low-friction next step (a 10-minute call, not "let me know").
            </div>
          </div>
          <p className="text-xs text-stone-500 italic">
            Once HRPA feels natural, you can write a fresh, personalized proposal in under 4 minutes.
          </p>
        </div>
      )
    },
    {
      label: 'Workbook: Day 01 Mission',
      pageNumber: '23',
      section: 'Part Two · The 30-Day Workbook',
      title: 'Define Your Core Niche and Target Audience',
      subtitle: 'The first actionable step on your 30-day transformation.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <span className="font-mono text-xs text-[#B8860B] font-bold">DAY 01 OF 30</span>
            <span className="text-[11px] text-stone-500">WEEK 1 · FOUNDATION</span>
          </div>
          <p className="font-semibold text-stone-900">
            Why this matters: A proposal written for "anyone" gets read by no one. Naming your niche is what makes a stranger think: "This was written for me."
          </p>
          <div className="p-3 bg-stone-50 border border-stone-200 rounded text-xs font-mono">
            ★ Write your niche as one sentence: <br />
            <strong className="text-[#0E3B33]">[What you do] for [Audience] who want [Result].</strong>
          </div>
          <div className="border border-dashed border-stone-300 rounded p-4 bg-[#FDFBF7] space-y-2">
            <span className="text-[11px] text-stone-400 font-mono block">Document your outreach metrics, client replies, and observations here:</span>
            <div className="h-16 w-full text-xs text-stone-500 italic">
              Example: "I help Shopify jewelry brands increase return customer checkout with automated post-purchase email sequences."
            </div>
            <div className="pt-2 border-t border-stone-200 flex items-center gap-2 text-xs font-medium text-emerald-800">
              <span>[✓]</span> <span>I completed today's mission</span>
            </div>
          </div>
        </div>
      )
    },
    {
      label: 'The Bonus Vault: Contract',
      pageNumber: '71',
      section: 'Part Three · Document 11',
      title: 'Freelance Service Agreement (Plain English)',
      subtitle: '1-page contract protecting scope, 50% advance, and copyright.',
      content: (
        <div className="space-y-3 text-xs text-stone-700 leading-relaxed font-mono bg-stone-50 p-4 rounded-lg border border-stone-200">
          <p className="font-bold text-[#1A252F]">1. The Parties</p>
          <p>This agreement is between [Your Name/Business] ("Freelancer") and [Client Name/Company] ("Client").</p>
          <p className="font-bold text-[#1A252F] pt-1">2. Scope of Work</p>
          <p>Freelancer will provide the following services: [List exact deliverables]. Any additional work outside this scope will be billed separately at [Rate].</p>
          <p className="font-bold text-[#1A252F] pt-1">3. Payment Terms</p>
          <p>— Total Project Fee: [Amount]<br />— Advance Payment: 50% due before work begins<br />— Final Payment: 50% due upon delivery of final files</p>
          <p className="font-bold text-[#1A252F] pt-1">4. Revisions & Delays</p>
          <p>Fee includes [Number] rounds of minor revisions. Client agrees to supply feedback within 3 business days.</p>
        </div>
      )
    }
  ];

  const activePageData = samplePages[currentPage];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-3xl bg-[#FDFBF7] rounded-xl shadow-2xl border border-stone-300 overflow-hidden my-8 flex flex-col max-h-[90vh]">
        
        {/* Top bar of reader */}
        <div className="bg-[#0E3B33] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37] font-serif font-bold">📖</span>
            <div>
              <h3 className="font-serif font-bold text-sm sm:text-base leading-tight">
                Client Ready · Interactive Sample Reader
              </h3>
              <p className="text-[11px] text-stone-300">
                Browsing verified excerpts from the 80-page manual
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-all duration-200 cursor-pointer hover:rotate-90 active:scale-90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Close reader"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Page Selector Tabs */}
        <div className="bg-stone-100 border-b border-stone-200 px-4 py-2 flex items-center gap-1.5 overflow-x-auto shrink-0">
          {samplePages.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C3E50] ${
                currentPage === idx
                  ? 'bg-white text-[#1A252F] font-semibold shadow-xs border border-stone-300 -translate-y-0.5'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Reader Document Surface (Paper styling) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#FDFBF7] text-[#1A252F]">
          <div className="max-w-xl mx-auto space-y-5">
            
            {/* Page Header (Authentic from PDF header) */}
            <div className="flex items-center justify-between text-xs text-stone-400 uppercase tracking-widest font-mono border-b border-stone-200 pb-3">
              <span>{activePageData.section}</span>
              <span>PAGE {activePageData.pageNumber}</span>
            </div>

            {/* Content Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A252F]">
                {activePageData.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-serif italic mt-1">
                {activePageData.subtitle}
              </p>
            </div>

            {/* Body Content */}
            <div className="pt-2">
              {activePageData.content}
            </div>

          </div>
        </div>

        {/* Reader Footer Controls */}
        <div className="bg-stone-100 border-t border-stone-200 px-6 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 0}
              onClick={() => setCurrentPage((c) => Math.max(0, c - 1))}
              className="px-3.5 py-1.5 bg-white border border-stone-300 rounded-md text-xs font-medium text-stone-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-0.5 active:scale-95 hover:border-stone-400 hover:shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C3E50]"
            >
              ← Previous Excerpt
            </button>
            <button
              disabled={currentPage === samplePages.length - 1}
              onClick={() => setCurrentPage((c) => Math.min(samplePages.length - 1, c + 1))}
              className="px-3.5 py-1.5 bg-white border border-stone-300 rounded-md text-xs font-medium text-stone-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-0.5 active:scale-95 hover:border-stone-400 hover:shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C3E50]"
            >
              Next Excerpt →
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onGetSystemClick();
            }}
            className="group px-4 py-2 bg-[#2C3E50] hover:bg-[#1A252F] text-white text-xs font-semibold rounded-md cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm hover:shadow-md flex items-center gap-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B]"
          >
            <span>Get Full 80-Page System (₹499)</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </div>
  );
};
