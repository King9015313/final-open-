import React from 'react';
import { PRICING_TIERS } from '../data/bookData';
import { TierType } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface PricingSectionProps {
  onSelectTier: (tier: TierType) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-24 bg-[#FDFBF7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] mb-2">
              Investment
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A252F] tracking-tight">
              Choose Your Edition
            </h2>
            <p className="mt-4 text-base text-stone-600">
              One signed retainer or well-negotiated micro-project pays for this system 20x over. Instant lifetime access to all PDFs and worksheets.
            </p>
          </div>
        </ScrollReveal>

        {/* Prominent Bundle Urgency Notification - High-End Non-Ad Exclusivity Banner */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-14 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#162330] via-[#101922] to-[#0A1016] text-stone-100 border-2 border-[#D4AF37]/60 shadow-2xl relative overflow-hidden animate-luxury-banner-glow">
            
            {/* Top metallic gold hairline shimmer bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-10 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-fluid-gold-shift" />
            </div>

            {/* Permanent fluid ambient backlight glow */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-28 bg-[#D4AF37]/15 blur-2xl pointer-events-none rounded-full animate-perpetual-glow" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
              
              <div className="space-y-2.5 max-w-xl">
                {/* Pre-title exclusivity pill & allocation ticker */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold tracking-widest text-[#FDF0C0] uppercase px-3 py-1 rounded-full bg-gradient-to-r from-[#8C6212]/35 via-[#D4AF37]/45 to-[#8C6212]/35 border border-[#D4AF37]/60 shadow-[0_2px_10px_rgba(212,175,55,0.2)] animate-fluid-gold-shift">
                    <span className="text-amber-300">✦</span>
                    <span>PRIVATE TIER ALLOCATION</span>
                    <span className="text-amber-300">✦</span>
                  </span>

                  <span className="font-mono text-[11px] font-bold text-[#FDF0C0] bg-black/40 border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-inner">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>438 / 500 Claimed</span>
                  </span>
                </div>

                {/* Main Headline with permanent continuous metallic gold shift */}
                <div className="space-y-1">
                  {/* Subtle fluid glow line directly above text */}
                  <div className="relative w-full max-w-[280px] h-[3px] flex items-center mb-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F2CB68]/60 to-transparent blur-[2px] animate-perpetual-glow" />
                    <div className="relative h-[1.5px] w-full rounded-full bg-gradient-to-r from-transparent via-[#FFF8D6] to-transparent animate-fluid-gold-shift" />
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg lg:text-xl tracking-tight flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"></span>
                    </span>
                    <span className="animate-headline-gold-shift">
                      STRICTLY LIMITED TO FIRST 500 CLIENTS
                    </span>
                  </h3>
                </div>

                {/* Subtitle explanation */}
                <p className="text-xs sm:text-[13px] text-stone-300 leading-relaxed">
                  The <strong className="text-white font-semibold">Complete Edition bundle</strong> (Starter + Premium at <strong className="text-[#D4AF37]">80% OFF</strong> + Free Bonus Book) is strictly capped at 500 clients to maintain unfair market advantage.
                </p>

                {/* Fluid Mini Progress Bar */}
                <div className="space-y-1 pt-0.5 max-w-md">
                  <div className="w-full bg-black/60 h-2 rounded-full p-0.5 border border-[#D4AF37]/40 shadow-inner relative overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-[#9C731A] via-[#D4AF37] to-[#FDF0C0] shadow-[0_0_10px_rgba(212,175,55,0.7)] transition-all duration-700 relative"
                      style={{ width: '87.6%' }}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)] opacity-70 animate-fluid-gold-shift" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono">
                    <span className="text-stone-300 flex items-center gap-1">
                      <span className="text-[#D4AF37] font-bold">87.6%</span>
                      <span>Allocation Claimed</span>
                    </span>
                    <span className="text-[#FDF0C0] font-bold bg-[#D4AF37]/20 px-2 py-0.5 rounded border border-[#D4AF37]/40 flex items-center gap-1 shadow-2xs">
                      <span className="text-amber-300">⚡</span>
                      <span>Only 62 Spots Left</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 pt-2 md:pt-0">
                <button
                  onClick={() => onSelectTier('complete')}
                  className="group relative overflow-hidden px-5 py-3.5 bg-gradient-to-r from-[#B8860B] via-[#E5C158] to-[#B8860B] hover:brightness-110 text-stone-950 text-xs sm:text-sm font-bold font-serif rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-98 cursor-pointer whitespace-nowrap flex items-center gap-2 animate-pay-button-glow border border-[#FFF8D6]/70"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
                  <span>Claim Complete Bundle (80% Off)</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1 font-sans font-bold">→</span>
                </button>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-7 items-stretch max-w-6xl mx-auto pt-4">
          {PRICING_TIERS.map((tier, idx) => {
            const isStarter = tier.id === 'starter';
            const isPremium = tier.id === 'premium';
            const isComplete = tier.id === 'complete';
            const isDark = isPremium || isComplete;

            // 18% GST calculation for each tier
            const tierGst = Math.round(tier.price * 0.18 * 100) / 100;
            const tierTotalWithGst = Math.round((tier.price + tierGst) * 100) / 100;

            return (
              <ScrollReveal key={tier.id} delayMs={idx * 150} className="h-full">
                <div
                  className={`relative rounded-xl flex flex-col justify-between h-full transition-all duration-300 ${
                    isComplete
                      ? 'pricing-card-premium bg-gradient-to-b from-[#0E3B33] via-[#092B24] to-[#061D18] text-[#FDFBF7] border-2 border-[#D4AF37] shadow-xl p-7 sm:p-8 md:-translate-y-2'
                      : isPremium
                      ? 'pricing-card-premium bg-gradient-to-b from-[#1C2836] via-[#141E2A] to-[#0D151F] text-[#FDFBF7] border-2 border-[#D4AF37] ring-1 ring-[#D4AF37]/50 shadow-[0_12px_40px_-6px_rgba(212,175,55,0.25)] p-7 sm:p-8 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(212,175,55,0.32)] animate-hero-fade-up'
                      : 'pricing-card-standard bg-white text-[#1A252F] border-2 border-emerald-600/60 shadow-md p-7 sm:p-8 hover:border-emerald-600'
                  }`}
                >
                  {/* Subtle top metallic gold accent bar and glow for Premium & Complete */}
                  {(isPremium || isComplete) && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-t-xl z-10" />
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-[#D4AF37]/15 blur-xl pointer-events-none rounded-full" />
                    </>
                  )}

                  {tier.highlight && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-[0.14em] shadow-lg whitespace-nowrap z-30 transition-all duration-300 ${
                      isPremium
                        ? 'bg-gradient-to-r from-[#B8860B] via-[#F2CB68] to-[#B8860B] text-stone-950 ring-2 ring-[#FDF0C0] shadow-[0_4px_20px_rgba(212,175,55,0.5)] animate-hero-fade-up flex items-center gap-1.5'
                        : isComplete
                        ? 'bg-gradient-to-r from-[#B8860B] via-[#F2CB68] to-[#B8860B] text-stone-950 ring-2 ring-[#FDF0C0] shadow-[0_4px_20px_rgba(212,175,55,0.5)] animate-hero-fade-up flex items-center gap-1.5'
                        : 'bg-[#B8860B] text-white ring-1 ring-white/50'
                    }`}>
                      {isPremium && <span className="text-xs text-stone-950">✦</span>}
                      {isComplete && <span className="text-xs text-stone-950">⚡</span>}
                      <span>{tier.highlight}</span>
                      {isPremium && <span className="text-xs text-stone-950">✦</span>}
                    </div>
                  )}

                  <div>
                    {/* Tier Title and Target */}
                    <div className="border-b pb-6 mb-6 border-stone-200/40">
                      <h3 className={`text-2xl font-serif font-bold ${isDark ? 'text-white' : 'text-[#1A252F]'}`}>
                        {tier.name}
                      </h3>
                      <p className={`text-xs mt-1.5 leading-relaxed ${isDark ? 'text-stone-300' : 'text-stone-500'}`}>
                        {tier.target}
                      </p>

                      {/* Pricing Display */}
                      <div className="mt-6 flex items-baseline gap-2.5">
                        <span className={`text-4xl sm:text-5xl font-serif font-bold ${isDark ? 'text-white' : 'text-[#1A252F]'}`}>
                          ₹{tier.price}
                        </span>
                        <span className={`text-sm line-through ${isDark ? 'text-stone-400' : 'text-stone-400'}`}>
                          ₹{tier.originalPrice}
                        </span>
                        <span className={`text-xs font-mono font-bold ${
                          isPremium
                            ? 'text-[#D4AF37] bg-[#D4AF37]/15 px-2 py-0.5 rounded border border-[#D4AF37]/40'
                            : isDark 
                            ? 'text-[#D4AF37]' 
                            : 'text-emerald-700'
                        }`}>
                          Save {Math.round(((tier.originalPrice - tier.price) / tier.originalPrice) * 100)}%
                        </span>
                      </div>
                      
                      {/* Total with 18% GST */}
                      <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                          isPremium
                            ? 'bg-[#D4AF37]/15 text-[#FDF0C0] border-[#D4AF37]/40'
                            : isDark 
                            ? 'bg-white/10 text-emerald-300 border-white/20' 
                            : 'bg-emerald-50 text-emerald-900 border-emerald-200'
                        }`}>
                          Total: ₹{tierTotalWithGst} (incl. 18% GST)
                        </span>
                      </div>

                      <p className={`text-[11px] mt-1.5 font-mono ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                        One-time payment · Instant PDF download
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3.5 mb-8">
                      <p className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-[#D4AF37]' : 'text-[#B8860B]'}`}>
                        What's Included:
                      </p>
                      <ul className="space-y-2.5 text-xs sm:text-sm">
                        {tier.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <span className={`font-serif font-bold shrink-0 text-sm ${isDark ? 'text-[#D4AF37]' : 'text-[#B8860B]'}`}>
                              ✓
                            </span>
                            <span className={isDark ? 'text-stone-200' : 'text-stone-700'}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Call to Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectTier(tier.id)}
                      id={isStarter ? 'starter-tier-btn' : isPremium ? 'premium-tier-btn' : 'complete-tier-btn'}
                      data-testid={isStarter ? 'starter-edition-button' : undefined}
                      className={`group w-full py-3.5 px-5 rounded-md font-semibold text-sm transition-all duration-200 shadow-sm cursor-pointer active:scale-98 active:translate-y-0 text-center whitespace-nowrap flex items-center justify-center gap-2 hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 ${
                        isComplete
                          ? 'bg-[#D4AF37] hover:bg-[#c29f2e] text-stone-950 font-bold shadow-md hover:shadow-xl'
                          : isPremium
                          ? 'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] hover:from-[#c5981a] hover:via-[#e2be4c] hover:to-[#c5981a] text-stone-950 font-bold shadow-md hover:shadow-[0_4px_24px_rgba(212,175,55,0.45)]'
                          : 'bg-[#2C3E50] hover:bg-[#1A252F] text-white hover:shadow-lg'
                      }`}
                    >
                      <span>{tier.cta}</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-sans">→</span>
                    </button>

                    <p className={`text-[11px] text-center mt-2.5 ${
                      isComplete
                        ? 'text-[#D4AF37] font-medium'
                        : isPremium 
                        ? 'text-[#D4AF37] font-medium' 
                        : 'text-stone-500 font-medium'
                    }`}>
                      {isComplete
                        ? 'Ultimate system for top-tier freelancers only'
                        : isPremium 
                        ? 'Join the top 1% of successful freelancers' 
                        : 'Instant access to core client acquisition fundamentals'}
                    </p>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Deliverable reassurance row */}
        <ScrollReveal delayMs={200}>
          <div className="mt-14 max-w-3xl mx-auto p-4 rounded-lg bg-stone-100/70 border border-stone-200/80 flex flex-wrap items-center justify-around gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-1.5">
              <span className="text-[#0E3B33] font-bold">⚡</span>
              <span>Immediate Link Access After Payment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#0E3B33] font-bold">🔒</span>
              <span>Official Razorpay Payment Gateway</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#0E3B33] font-bold">🇮🇳</span>
              <span>UPI (GPay/PhonePe), Cards & Netbanking</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
