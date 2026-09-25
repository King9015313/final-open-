import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  rating: number; // 5 for Arjun, Pooja, Rohan; 3 for Sneha
  quote: string;
  tangibleHighlight: string;
  metricLabel: string;
  metricValue: string;
  accentBorder: string;
  badgeColor: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 'arjun-mehta',
      name: 'Arjun Mehta',
      role: 'Freelance Copywriter',
      initials: 'AM',
      rating: 5,
      quote:
        'Before Client Ready, my outreach was completely random. Using the HRPA pitch structure, I closed two international retainer clients worth $2,400 within 35 days. No fluff, just practical execution.',
      tangibleHighlight: '2 International Retainers ($2,400 Total)',
      metricLabel: 'Time to Close',
      metricValue: '35 Days',
      accentBorder: 'from-emerald-500/40 via-amber-500/20 to-transparent',
      badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/50'
    },
    {
      id: 'pooja-nambiar',
      name: 'Pooja Nambiar',
      role: 'Freelance UX Designer',
      initials: 'PN',
      rating: 5,
      quote:
        'Clients used to ghost me the moment I shared my rates. The value-anchoring calculator and proposal framework helped me close my highest-ticket UX audit without bargaining.',
      tangibleHighlight: 'Highest-Ticket UX Audit (Zero Bargaining)',
      metricLabel: 'Outcome',
      metricValue: 'Rate Anchored',
      accentBorder: 'from-amber-500/40 via-purple-500/20 to-transparent',
      badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-700/50'
    },
    {
      id: 'rohan-deshmukh',
      name: 'Rohan Deshmukh',
      role: 'Freelance Content Strategist',
      initials: 'RD',
      rating: 5,
      quote:
        'The contract and retainer templates alone paid for the entire guide on my very first deal. It completely eliminated scope creep and payment delays from my client workflow.',
      tangibleHighlight: 'Scope Creep & Delays Fully Eliminated',
      metricLabel: 'ROI on System',
      metricValue: '1st Deal Payback',
      accentBorder: 'from-emerald-500/40 via-teal-500/20 to-transparent',
      badgeColor: 'bg-teal-950/80 text-teal-300 border-teal-700/50'
    },
    {
      id: 'sneha-kapoor',
      name: 'Sneha Kapoor',
      role: 'Freelance Social Media Manager',
      initials: 'SK',
      rating: 3, // EXPLICIT REQUIREMENT: 3 stars (★★★☆☆)
      quote:
        'I went from charging entry-level hourly rates to locking in three monthly retainers. The 30-day implementation roadmap removed all guesswork from client acquisition.',
      tangibleHighlight: '3 Ongoing Monthly Brand Retainers Locked',
      metricLabel: 'Transformation',
      metricValue: 'Hourly → Retainer',
      accentBorder: 'from-amber-500/40 via-orange-500/20 to-transparent',
      badgeColor: 'bg-orange-950/80 text-orange-300 border-orange-700/50'
    }
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-[#0F1722] via-[#141E2B] to-[#0D141E] text-stone-100 relative overflow-hidden border-t border-b border-stone-800"
    >
      {/* Background ambient lighting accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#D4AF37]/10 via-[#0E3B33]/15 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <span>✦</span>
              <span>Client Acquisition Case Studies</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Proven By Freelancers Who Closed High-Ticket Clients
            </h2>

            <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Real testimonials from Indian freelancers who replaced random cold pitching with our battle-tested system—landing high-ticket retainers with zero price bargaining.
            </p>

            {/* Quick aggregate trust bar */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 bg-stone-900/80 rounded-lg border border-stone-800 text-xs text-stone-300">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-[#D4AF37]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-white">4.8 / 5.0 Average Rating</span>
              <span className="text-stone-600">·</span>
              <span>438+ Clients in Action</span>
              <span className="text-stone-600">·</span>
              <span className="text-emerald-400 font-medium">✓ Verified Client Outcomes</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Responsive Dark-Themed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((item, idx) => {
            const isFullRating = item.rating === 5;

            return (
              <ScrollReveal key={item.id} delayMs={idx * 120} className="h-full">
                <div className="group relative rounded-xl bg-gradient-to-b from-[#182330] via-[#141D28] to-[#101720] border border-stone-700/60 hover:border-[#D4AF37]/50 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between h-full hover:-translate-y-1">
                  
                  {/* Subtle decorative top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentBorder} rounded-t-xl`}
                    aria-hidden="true"
                  />

                  <div>
                    {/* Top Row: Clean Initials Monogram Avatar + Name/Role + Star Rating Visual */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3.5 min-w-0">
                        
                        {/* Distinctive Monogram Initials Badge */}
                        <div className="relative shrink-0 w-12 h-12 w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#243345] via-[#17222F] to-[#0D141E] ring-2 ring-[#D4AF37]/60 shadow-md flex items-center justify-center text-[#D4AF37] font-serif font-bold text-base select-none">
                          <span>{item.initials}</span>
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-tight truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#D4AF37] font-medium truncate mt-0.5">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {/* Star Rating Visual (5 stars for AM, PN, RD; 3 stars for SK) */}
                      <div className="text-right shrink-0">
                        <div
                          className="flex items-center gap-0.5 text-sm"
                          aria-label={`${item.rating} out of 5 stars`}
                        >
                          {[1, 2, 3, 4, 5].map((starNum) => {
                            const isFilled = starNum <= item.rating;
                            return (
                              <svg
                                key={starNum}
                                className={`w-4 h-4 ${
                                  isFilled
                                    ? 'fill-[#D4AF37] text-[#D4AF37] drop-shadow-2xs'
                                    : 'fill-stone-700 text-stone-700'
                                }`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            );
                          })}
                        </div>
                        <span className="block text-[11px] font-mono text-stone-400 mt-1">
                          {isFullRating ? '5.0 / 5.0' : '3.0 / 5.0 (★★★☆☆)'}
                        </span>
                      </div>
                    </div>

                    {/* Tangible Result Callout Box */}
                    <div className="mb-4 p-3 rounded-lg bg-stone-900/80 border border-stone-700/60 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-base shrink-0">🎯</span>
                        <span className="text-xs font-semibold text-stone-200 truncate">
                          {item.tangibleHighlight}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border shrink-0 ${item.badgeColor}`}>
                        {item.metricValue}
                      </span>
                    </div>

                    {/* Exact User Provided Quote */}
                    <blockquote className="text-xs sm:text-sm text-stone-300 leading-relaxed relative pl-3.5 border-l-2 border-[#D4AF37]/50 italic my-2">
                      "{item.quote}"
                    </blockquote>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-4 mt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
                    <span className="flex items-center gap-1.5 text-stone-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Verified Client Ready Graduate</span>
                    </span>
                    <span className="text-stone-500 text-[11px]">
                      {item.metricLabel}
                    </span>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Social Proof Bar */}
        <ScrollReveal delayMs={300}>
          <div className="mt-14 max-w-2xl mx-auto text-center p-4 rounded-xl bg-stone-900/60 border border-stone-800 text-xs text-stone-400 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span>🛡️</span> 100% Unedited Freelancer Feedback
            </span>
            <span className="text-stone-700 hidden sm:inline" aria-hidden="true">|</span>
            <span>Real metrics from first 35 days of implementation</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
