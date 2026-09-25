import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const ProblemSection: React.FC = () => {
  const [selectedObjection, setSelectedObjection] = useState<number | null>(0);

  const silentObjections = [
    {
      title: "1. \"Will they disappear mid-project?\"",
      clientFear: "Clients have been burned by flaky freelancers before. Beginners with no track record represent deadline risk.",
      howBeginnersTriggerIt: "Writing long generic intros about passion, without clear delivery dates or milestone timelines.",
      systemFix: "Chapter 08 & 06: Propose a defined 48-hour delivery micro-project with a clear start and completion date before they even ask."
    },
    {
      title: "2. \"Will they need constant hand-holding?\"",
      clientFear: "Founders are paying for delegation, not teaching. If working with you feels like managing an intern, they will pass.",
      howBeginnersTriggerIt: "Asking open-ended questions like 'Let me know what you need help with' or 'What do you think?'",
      systemFix: "Chapter 06 (The HRPA Framework): Lead with the specific gap you already spotted on their product page or reel, with a finished spec sample."
    },
    {
      title: "3. \"Will the quality match the low price?\"",
      clientFear: "In business, rock-bottom rates signal inexperience and amateur execution, not a bargain.",
      howBeginnersTriggerIt: "Quoting ₹500 for a 10-minute video or ₹200 for a blog post hoping low prices will guarantee a 'yes'.",
      systemFix: "Chapter 07: Use tiered packages ('Starter / Growth / Retainer') and build in a 15% negotiation buffer so you never panic-discount your floor."
    },
    {
      title: "4. \"Will this become awkward to end?\"",
      clientFear: "No contract and vague revision terms mean scope creep, awkward disagreements, and hostage project files.",
      howBeginnersTriggerIt: "Starting work over WhatsApp without an advance payment, contract, or written scope.",
      systemFix: "Part Three (Document 11 & 12): Send the 1-page Freelance Service Agreement and 50% Advance Invoice within hours of a verbal agreement."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-stone-100/60 border-y border-[#1A252F]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] mb-3">
              The Reality Check
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A252F] tracking-tight [text-wrap:balance]">
              You Have The Skills. Why Is Your Inbox Empty?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 font-sans">
              You know how to write, edit, design, or code. Yet client acquisition feels like shouting into an empty void.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Core Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          <ScrollReveal delayMs={100} className="h-full">
            <div className="bg-[#FDFBF7] p-7 rounded-lg border border-stone-200/80 shadow-2xs space-y-3 h-full hover-lift hover:border-stone-300">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-700 flex items-center justify-center font-serif font-bold text-lg transition-transform duration-200 hover:scale-110">
                01
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1A252F]">
                The Marketplace Black Hole
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Sending 50 proposals on Upwork, Fiverr, or LinkedIn job boards and getting zero replies while competing against 200 desperate bids undercutting each other.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={200} className="h-full">
            <div className="bg-[#FDFBF7] p-7 rounded-lg border border-stone-200/80 shadow-2xs space-y-3 h-full hover-lift hover:border-stone-300">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center font-serif font-bold text-lg transition-transform duration-200 hover:scale-110">
                02
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1A252F]">
                The Indian Pricing Ghosting
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Indian clients chatting warmly until you state your rate, then instantly ghosting or saying: <em>"We have someone doing this for ₹500."</em> So you freeze and underquote by 40%.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={300} className="h-full">
            <div className="bg-[#FDFBF7] p-7 rounded-lg border border-stone-200/80 shadow-2xs space-y-3 h-full hover-lift hover:border-stone-300">
              <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center font-serif font-bold text-lg transition-transform duration-200 hover:scale-110">
                03
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1A252F]">
                The "No-Portfolio" Paralysis
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Feeling 'unqualified' because you don't have a giant portfolio yet, spending weeks polishing invisible personal projects instead of reaching out to paying clients.
              </p>
            </div>
          </ScrollReveal>

        </div>

        {/* The Reframe Quote Box (From Chapter 01 of the Book) */}
        <ScrollReveal delayMs={150}>
          <div className="bg-[#0E3B33] text-[#FDFBF7] rounded-xl p-8 sm:p-10 shadow-md relative overflow-hidden mb-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                The Fundamental Reframe
              </span>
              <p className="text-2xl sm:text-3xl font-serif font-medium leading-snug">
                "The problem isn't your skill. It's your client acquisition logic."
              </p>
              <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed pt-1">
                A client who ghosts you is rarely rejecting your talent. They are reacting to silent risk signals you didn't know you were sending: a generic pitch, no proof, no clear next step, and no de-risking logic.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* The 4 Silent Objections Interactive Deep Dive */}
        <ScrollReveal delayMs={200}>
          <div className="bg-[#FDFBF7] rounded-xl border border-stone-200 p-6 sm:p-9 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B8860B]">
                From Chapter 03: The Trust Gap
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1A252F] mt-1">
                The 4 Silent Objections Clients Have (Before They Ever See Your Rate)
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                Hiring a freelancer is a risk-management exercise. Clients scan for reasons to say no because saying no is free. Click each objection to see how Client Ready solves it:
              </p>
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 border-b border-stone-200 pb-4 mb-6">
            {silentObjections.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedObjection(idx)}
                className={`group py-2.5 px-3.5 text-left text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 active:scale-98 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] ${
                  selectedObjection === idx
                    ? 'bg-[#2C3E50] text-white shadow-sm -translate-y-0.5'
                    : 'bg-white text-stone-700 border border-stone-200/80 hover:border-stone-300 hover:bg-stone-50 hover:-translate-y-0.5'
                }`}
              >
                <span>{item.title}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded transition-colors ${
                  selectedObjection === idx 
                    ? 'bg-white/20 text-[#D4AF37]' 
                    : 'bg-stone-100 text-stone-500 group-hover:bg-stone-200'
                }`}>
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {selectedObjection !== null && (
            <div className="bg-stone-50 rounded-lg p-6 border border-stone-200/70 space-y-4 transition-all">
              <h4 className="text-lg font-serif font-bold text-[#1A252F]">
                {silentObjections[selectedObjection].title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="space-y-1">
                  <p className="font-semibold text-red-900">What the client actually fears:</p>
                  <p className="text-stone-600 leading-relaxed">{silentObjections[selectedObjection].clientFear}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-amber-900">The common beginner mistake:</p>
                  <p className="text-stone-600 leading-relaxed">{silentObjections[selectedObjection].howBeginnersTriggerIt}</p>
                </div>
              </div>
              <div className="pt-2 border-t border-stone-200/80">
                <p className="text-xs sm:text-sm text-[#0E3B33] font-medium flex items-start gap-2">
                  <span className="font-bold text-[#B8860B]">How Client Ready neutralizes this:</span>
                  <span>{silentObjections[selectedObjection].systemFix}</span>
                </p>
              </div>
            </div>
          )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
