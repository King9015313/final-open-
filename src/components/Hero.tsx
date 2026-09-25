import React from 'react';
import { Book3D } from './Book3D';

interface HeroProps {
  onCtaClick: () => void;
  onPreviewClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onPreviewClick }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle architectural background grid / paper watermark line */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1A252F_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Authority (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Context line with clean typographic separator (No pill badges) */}
            <div 
              className="animate-hero-fade-up flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#B8860B] font-semibold"
              style={{ animationDelay: '100ms' }}
            >
              <span>For Indian Freelancers</span>
              <span aria-hidden="true">·</span>
              <span>Writers</span>
              <span aria-hidden="true">·</span>
              <span>Editors</span>
              <span aria-hidden="true">·</span>
              <span>Designers</span>
              <span aria-hidden="true">·</span>
              <span>Developers</span>
            </div>

            {/* Headline */}
            <h1 
              className="animate-hero-fade-up text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A252F] leading-[1.12] tracking-tight [text-wrap:balance]"
              style={{ animationDelay: '250ms' }}
            >
              Stop Chasing Clients. <br />
              <span className="italic text-[#0E3B33]">Start Closing Them.</span>
            </h1>

            {/* Sub-headline */}
            <p 
              className="animate-hero-fade-up text-lg sm:text-xl text-[#1A252F]/80 font-sans leading-relaxed max-w-xl"
              style={{ animationDelay: '400ms' }}
            >
              The exact 30-Day System to get high-paying international and Indian clients, even if you don't have a massive portfolio.
            </p>

            {/* Tactical feature breakdown row */}
            <div 
              className="animate-hero-fade-up pt-2 pb-1 space-y-2.5 text-sm text-[#1A252F]/90"
              style={{ animationDelay: '550ms' }}
            >
              <div className="flex items-start gap-3 p-2 -mx-2 rounded-md hover:bg-stone-200/40 transition-colors duration-200">
                <span className="text-[#B8860B] font-serif font-bold text-base leading-none mt-0.5 transition-transform duration-200 hover:scale-125">✦</span>
                <p>
                  <strong className="font-semibold text-[#1A252F]">The HRPA Proposal Skeleton:</strong> Stop sending 5-paragraph life stories. Land calls in 4 sentences.
                </p>
              </div>
              <div className="flex items-start gap-3 p-2 -mx-2 rounded-md hover:bg-stone-200/40 transition-colors duration-200">
                <span className="text-[#B8860B] font-serif font-bold text-base leading-none mt-0.5 transition-transform duration-200 hover:scale-125">✦</span>
                <p>
                  <strong className="font-semibold text-[#1A252F]">Targeted Spec Work:</strong> The formula to manufacture undisputed proof in under 2 hours without permission.
                </p>
              </div>
              <div className="flex items-start gap-3 p-2 -mx-2 rounded-md hover:bg-stone-200/40 transition-colors duration-200">
                <span className="text-[#B8860B] font-serif font-bold text-base leading-none mt-0.5 transition-transform duration-200 hover:scale-125">✦</span>
                <p>
                  <strong className="font-semibold text-[#1A252F]">30-Day Implementation Missions:</strong> Exactly one habit-building mission per day, from niche definition to signed retainers.
                </p>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div 
              className="animate-hero-fade-up pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              style={{ animationDelay: '700ms' }}
            >
              <button
                onClick={onCtaClick}
                className="group px-8 py-3.5 text-base font-semibold text-white bg-[#2C3E50] hover:bg-[#1A252F] rounded-md transition-all duration-200 shadow-md hover:shadow-xl text-center cursor-pointer active:scale-98 whitespace-nowrap hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 flex items-center justify-center gap-2"
              >
                <span>Get Client Ready Today</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-sans">→</span>
              </button>

              <button
                onClick={onPreviewClick}
                className="group px-5 py-3.5 text-sm font-medium text-[#1A252F] hover:text-[#B8860B] bg-white hover:bg-stone-50/80 border border-[#1A252F]/15 hover:border-[#B8860B]/60 rounded-md transition-all duration-200 text-center cursor-pointer shadow-2xs hover:shadow-md whitespace-nowrap flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-98 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B]"
              >
                <svg className="w-4 h-4 text-[#B8860B] transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Read Sample Chapters</span>
              </button>
            </div>

            {/* Social Proof & Trust Subtext (Clean metadata) */}
            <div 
              className="animate-hero-fade-up pt-3 border-t border-[#1A252F]/10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-[#7F8C8D]"
              style={{ animationDelay: '850ms' }}
            >
              <div className="flex items-center gap-1.5 text-[#1A252F] font-medium">
                <span className="flex text-[#B8860B]">★★★★★</span>
                <span>Trusted by ambitious freelancers across India.</span>
              </div>
              <div className="hidden sm:block text-[#1A252F]/20">|</div>
              <div className="flex items-center gap-2 text-stone-600">
                <span>Instant PDF Download</span>
                <span aria-hidden="true">·</span>
                <span>Lifetime Access</span>
                <span aria-hidden="true">·</span>
                <span>Starts at ₹499</span>
              </div>
            </div>

          </div>

          {/* Right Column: Physical 3D Book & Vault Display (5 cols) */}
          <div 
            className="animate-hero-fade-up lg:col-span-5 flex flex-col items-center justify-center relative"
            style={{ animationDelay: '400ms' }}
          >
            
            {/* Subtle decorative glow */}
            <div 
              aria-hidden="true" 
              className="absolute w-72 h-72 rounded-full bg-[#B8860B]/10 filter blur-3xl pointer-events-none" 
            />

            <Book3D onOpenPreview={onPreviewClick} edition="client-ready" />

            {/* Tactile deliverable breakdown tag underneath book */}
            <div className="mt-6 text-center">
              <p className="text-xs font-serif italic text-stone-600">
                80-Page System Manual + 30 Daily Worksheets + 12 Outreach Scripts
              </p>
              <p className="text-[11px] font-sans text-stone-500 mt-1">
                Optimized for Indian freelancers targeting domestic & foreign founders
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
