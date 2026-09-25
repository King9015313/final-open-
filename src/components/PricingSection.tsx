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

        {/* Prominent Bundle Urgency Notification */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-50 to-amber-500/10 border-2 border-amber-500 text-stone-900 shadow-sm flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="text-2xl shrink-0">⚡</span>
              <div>
                <p className="font-serif font-bold text-sm text-[#1A252F] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping inline-block"></span>
                  <span>STRICTLY LIMITED TO FIRST 500 CLIENTS</span>
                </p>
                <p className="text-xs text-stone-700 mt-0.5">
                  The Complete Edition bundle (Starter + Premium at <strong>80% OFF</strong>) is strictly limited to 500 clients. <strong>Only 62 allocations left!</strong>
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectTier('complete')}
              className="px-4 py-2 bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-serif font-bold rounded-lg shadow-sm transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Claim Complete Bundle ₹899 →
            </button>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch max-w-6xl mx-auto">
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
                  className={`relative rounded-xl flex flex-col justify-between h-full ${
                    isComplete
                      ? 'pricing-card-premium bg-gradient-to-b from-[#0E3B33] via-[#092B24] to-[#061D18] text-[#FDFBF7] border-2 border-[#D4AF37] shadow-xl p-7 sm:p-8 md:-translate-y-2'
                      : isPremium
                      ? 'pricing-card-premium bg-[#1A252F] text-[#FDFBF7] border-2 border-[#B8860B] shadow-xl p-7 sm:p-8'
                      : 'pricing-card-standard bg-white text-[#1A252F] border-2 border-emerald-600/60 shadow-md p-7 sm:p-8 hover:border-emerald-600'
                  }`}
                >
                  {tier.highlight && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider shadow-sm whitespace-nowrap ${
                      isComplete
                        ? 'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-stone-950 font-bold'
                        : 'bg-[#B8860B] text-white'
                    }`}>
                      {tier.highlight}
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
                        <span className={`text-xs font-mono font-bold ${isDark ? 'text-[#D4AF37]' : 'text-emerald-700'}`}>
                          Save {Math.round(((tier.originalPrice - tier.price) / tier.originalPrice) * 100)}%
                        </span>
                      </div>
                      
                      {/* Total with 18% GST */}
                      <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                          isDark 
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
                          ? 'bg-[#B8860B] hover:bg-[#996515] text-white shadow-md hover:shadow-xl'
                          : 'bg-[#2C3E50] hover:bg-[#1A252F] text-white hover:shadow-lg'
                      }`}
                    >
                      <span>{tier.cta}</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-sans">→</span>
                    </button>

                    <p className={`text-[11px] text-center mt-2.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                      Includes 100% money-back satisfaction guarantee
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
