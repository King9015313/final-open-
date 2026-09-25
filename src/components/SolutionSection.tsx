import React, { useState } from 'react';
import { WORKBOOK_WEEKS } from '../data/bookData';
import { ScrollReveal } from './ScrollReveal';

interface SolutionSectionProps {
  onOpenSampleReader: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenSampleReader }) => {
  const [activeTab, setActiveTab] = useState<'part1' | 'part2' | 'part3'>('part1');
  const [activeWeek, setActiveWeek] = useState<number>(1);

  const chapters = [
    { num: '01', title: 'The Reality Check', desc: 'Diagnosing the silence in your inbox and shifting from talent-pitching to risk-reduction.' },
    { num: '02', title: 'The No-Portfolio Trap', desc: 'How to build proof without permission via Targeted Spec Work (<2hr rule) and micro-audits.' },
    { num: '03', title: 'The Trust Gap', desc: 'Why clients say no before they have seen your rate, and how to de-risk every objection.' },
    { num: '04', title: 'Where to Find Clients', desc: 'Moving beyond saturated Upwork/Fiverr: local businesses, LinkedIn India, and funded startups.' },
    { num: '05', title: 'Positioning: Niche Down', desc: 'The 3-question niche filter. How specific positioning makes you instantly searchable.' },
    { num: '06', title: 'Proposals That Get Replies', desc: 'The HRPA Framework: Hook, Relevance, Proof, Ask. Craft 4-minute winning pitches.' },
    { num: '07', title: 'Pricing & Negotiation', desc: 'The India context. Adding the 15% negotiation buffer and packaging vs itemizing.' },
    { num: '08', title: 'Client Onboarding (The First 48 Hours)', desc: 'The exact onboarding sequence that secures immediate client confidence and prevents scope creep.' },
    { num: '09', title: 'Retention & Referrals', desc: 'Turning 1 client into 5. Why one referral is worth twenty cold emails.' },
    { num: '10', title: 'Freelancer to Agency', desc: 'Recognizing when you have outgrown solo execution and the smallest safe next step.' }
  ];

  const vaultItems = [
    { title: '12 Copy-Paste Outreach Scripts', desc: 'Writing, video editing, social media, warm network, Day 3 follow-up, Day 7 graceful exit, retainer pitch, and scope-creep response.' },
    { title: 'Freelance Service Agreement (Document 11)', desc: 'Plain-English 1-page legally binding agreement protecting your scope, 50% advance, and revision limits.' },
    { title: 'Standard Invoice Format (Document 12)', desc: 'Professional Indian invoice layout with Bank/IFSC/UPI/GSTIN fields that clients process immediately.' },
    { title: 'Client Onboarding Checklist', desc: 'The 5-step checklist to run within the first 48 hours of every verbal yes.' },
    { title: 'Rate Calculator Worksheet', desc: 'Calculate your exact daily rate and the 15% negotiation buffer with zero guesswork.' },
    { title: 'Niche Subject-Line Cheat Sheet', desc: 'Tested subject line formulas across copywriting, video editing, design, social media, and dev.' }
  ];

  return (
    <section id="system" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] mb-3">
              The Blueprint
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A252F] tracking-tight [text-wrap:balance]">
              Introducing: The Client Ready System
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
              A highly tactical, step-by-step framework built specifically for the Indian market context and international outreach. No motivational fluff. Just pure execution.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Core Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <ScrollReveal delayMs={100} className="h-full">
            <div className="bg-white rounded-lg p-7 border border-stone-200/90 shadow-2xs hover-lift hover:border-stone-300 relative flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-xs font-serif italic text-[#B8860B] font-semibold">Pillar 01</span>
                <h3 className="text-xl font-serif font-bold text-[#1A252F]">
                  The HRPA Framework
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Write proposals that actually get replies. Stop sending paragraphs of self-biography. Hook with an observed flaw, show Relevance, attach unsolicited Proof, and make an effortless Ask in 4 sentences.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-medium text-[#2C3E50] flex items-center justify-between">
                <span>Cuts pitch writing time to under 4 minutes</span>
                <span className="text-[#B8860B] text-sm">✦</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={200} className="h-full">
            <div className="bg-white rounded-lg p-7 border border-stone-200/90 shadow-2xs hover-lift hover:border-stone-300 relative flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-xs font-serif italic text-[#B8860B] font-semibold">Pillar 02</span>
                <h3 className="text-xl font-serif font-bold text-[#1A252F]">
                  The No-Portfolio Trap
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  How to build proof without permission using Targeted Spec Work. Learn the strict 2-hour rule, micro-project audits, and contra deals so you never wait for someone to hire you before having proof.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-medium text-[#2C3E50] flex items-center justify-between">
                <span>Re-use 1 spec sample across 4 marketing channels</span>
                <span className="text-[#B8860B] text-sm">✦</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={300} className="h-full">
            <div className="bg-white rounded-lg p-7 border border-stone-200/90 shadow-2xs hover-lift hover:border-stone-300 relative flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-xs font-serif italic text-[#B8860B] font-semibold">Pillar 03</span>
                <h3 className="text-xl font-serif font-bold text-[#1A252F]">
                  The 30-Day Workbook
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Knowledge without execution is useless. Exactly one focused mission per day, with clear why-it-matters explanations and tracking boxes. Turns outreach into an automatic daily habit.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-medium text-[#2C3E50] flex items-center justify-between">
                <span>From undefined niche on Day 1 to published testimonial by Day 30</span>
                <span className="text-[#B8860B] text-sm">✦</span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Interactive Master System Explorer */}
        <ScrollReveal delayMs={200}>
          <div className="bg-stone-50 rounded-xl border border-stone-200 p-6 sm:p-10 shadow-sm">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
                  Full System Breakdown
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A252F] mt-1">
                  Explore Inside The 80-Page Guide
                </h3>
              </div>
              <button
                onClick={onOpenSampleReader}
                className="group px-4 py-2 text-xs font-medium text-[#2C3E50] hover:text-white bg-white hover:bg-[#2C3E50] border border-[#2C3E50]/20 rounded-md transition-all duration-200 cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-2xs hover:shadow-md hover:-translate-y-0.5 active:scale-98 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B]"
              >
                <svg className="w-4 h-4 text-[#B8860B] group-hover:text-amber-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Interactive PDF Reader</span>
              </button>
            </div>

            {/* Clean Segmented Tab Switcher */}
            <div className="flex items-center gap-2 border-b border-stone-200 pb-4 mb-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('part1')}
                className={`px-4.5 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-98 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] ${
                  activeTab === 'part1'
                    ? 'bg-[#2C3E50] text-white shadow-sm -translate-y-0.5'
                    : 'text-stone-600 bg-white/60 hover:text-stone-900 hover:bg-stone-200/60 hover:-translate-y-0.5'
                }`}
              >
                Part One: The System (10 Chapters)
              </button>
              <button
                onClick={() => setActiveTab('part2')}
                className={`px-4.5 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-98 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] ${
                  activeTab === 'part2'
                    ? 'bg-[#2C3E50] text-white shadow-sm -translate-y-0.5'
                    : 'text-stone-600 bg-white/60 hover:text-stone-900 hover:bg-stone-200/60 hover:-translate-y-0.5'
                }`}
              >
                Part Two: The 30-Day Workbook
              </button>
              <button
                onClick={() => setActiveTab('part3')}
                className={`px-4.5 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-98 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] ${
                  activeTab === 'part3'
                    ? 'bg-[#2C3E50] text-white shadow-sm -translate-y-0.5'
                    : 'text-stone-600 bg-white/60 hover:text-stone-900 hover:bg-stone-200/60 hover:-translate-y-0.5'
                }`}
              >
                Part Three: The Bonus Vault
              </button>
            </div>

            {/* Tab 1: 10 Chapters */}
            {activeTab === 'part1' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chapters.map((ch) => (
                  <div key={ch.num} className="bg-white p-4.5 rounded-lg border border-stone-200/80 flex items-start gap-3.5 hover-lift hover:border-stone-300">
                    <span className="font-mono text-xs font-semibold text-[#B8860B] bg-[#B8860B]/10 px-2 py-0.5 rounded transition-transform duration-200 hover:scale-105">
                      {ch.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-[#1A252F]">
                        {ch.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {ch.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: 30-Day Workbook */}
            {activeTab === 'part2' && (
              <div className="space-y-6">
                {/* Week Selector */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {WORKBOOK_WEEKS.map((w) => (
                    <button
                      key={w.week}
                      onClick={() => setActiveWeek(w.week)}
                      className={`p-3.5 text-left rounded-lg border transition-all duration-200 cursor-pointer active:scale-98 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] ${
                        activeWeek === w.week
                          ? 'border-[#2C3E50] bg-white shadow-sm ring-1 ring-[#2C3E50]/40 -translate-y-0.5'
                          : 'border-stone-200 bg-stone-100/60 hover:bg-white hover:border-stone-300 hover:-translate-y-0.5'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-mono font-semibold text-[#B8860B]">
                        Week 0{w.week}
                      </div>
                      <div className="text-xs font-serif font-bold text-[#1A252F]">
                        {w.title}
                      </div>
                      <div className="text-[11px] text-stone-500">
                        {w.subtitle}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected Week's Missions */}
                {(() => {
                  const currentWeek = WORKBOOK_WEEKS.find((w) => w.week === activeWeek) || WORKBOOK_WEEKS[0];
                  return (
                    <div className="bg-white rounded-lg p-6 border border-stone-200 space-y-4 shadow-2xs">
                      <div className="border-b border-stone-100 pb-3">
                        <span className="text-xs font-mono text-[#B8860B] uppercase tracking-wider font-semibold">
                          Week {currentWeek.week} Strategy
                        </span>
                        <h4 className="text-lg font-serif font-bold text-[#1A252F]">
                          {currentWeek.title} ({currentWeek.subtitle})
                        </h4>
                        <p className="text-xs text-stone-600 mt-1">
                          {currentWeek.goal}
                        </p>
                      </div>

                      <div className="divide-y divide-stone-100">
                        {currentWeek.days.map((d) => (
                          <div key={d.day} className="py-2.5 px-2 -mx-2 rounded hover:bg-stone-50/80 transition-colors duration-150 flex items-start gap-3 text-xs">
                            <span className="font-mono font-semibold text-stone-400 shrink-0 w-8">
                              D{d.day < 10 ? `0${d.day}` : d.day}
                            </span>
                            <div className="space-y-0.5">
                              <span className="font-medium text-[#1A252F]">{d.title}</span>
                              <p className="text-stone-500 text-[11px] italic">★ {d.formula}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Tab 3: Bonus Vault */}
            {activeTab === 'part3' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vaultItems.map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-lg border border-stone-200/80 space-y-2 hover-lift hover:border-stone-300">
                    <div className="flex items-center gap-2">
                      <span className="text-[#B8860B] text-xs transition-transform duration-200 hover:rotate-45">◆</span>
                      <h4 className="text-sm font-serif font-bold text-[#1A252F]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
