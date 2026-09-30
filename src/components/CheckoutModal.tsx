import React, { useState } from 'react';
import { PRICING_TIERS, ORDER_BUMP_DATA } from '../data/bookData';
import { TierType } from '../types';
import { OrderBump } from './OrderBump';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedTier: TierType;
  onClose: () => void;
  onSelectTier: (tier: TierType) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  selectedTier,
  onClose,
  onSelectTier
}) => {
  const [includeBump, setIncludeBump] = useState<boolean>(true);

  if (!isOpen) return null;

  const currentTier = PRICING_TIERS.find((t) => t.id === selectedTier) || PRICING_TIERS[1];
  const isCompleteTier = selectedTier === 'complete';
  const isStarterTier = selectedTier === 'starter';
  const isPremiumTier = selectedTier === 'premium';

  // Starter Edition dynamic configuration
  // Checked: button text 'Pay ₹941.64' and Razorpay link https://rzp.io/rzp/HUK85Lwj
  // Unchecked: button text 'Pay ₹588.82' and base Razorpay link https://rzp.io/rzp/HUK85Lwj
  const starterButtonText = includeBump ? 'Pay ₹941.64' : 'Pay ₹588.82';
  const razorpayStarterUrl = includeBump
    ? 'https://rzp.io/rzp/HUK85Lwj'
    : 'https://rzp.io/rzp/HUK85Lwj';

  // Premium Edition dynamic configuration
  // Checked: button text 'Pay ₹1531.64' and Razorpay link https://rzp.io/rzp/Hy1MFrqZ
  // Unchecked: button text 'Pay ₹1178.82' and base Razorpay link https://rzp.io/rzp/fMll0Kf
  const premiumButtonText = includeBump ? 'Pay ₹1531.64' : 'Pay ₹1178.82';
  const razorpayPremiumUrl = includeBump
    ? 'https://rzp.io/rzp/Hy1MFrqZ'
    : 'https://rzp.io/rzp/fMll0Kf';

  // Complete Edition dynamic configuration
  const completeButtonText = 'Pay ₹1,060.82';
  const razorpayCompleteUrl = 'https://rzp.io/rzp/H8IrtIt';

  const effectiveBumpPrice = isCompleteTier ? 0 : (includeBump ? ORDER_BUMP_DATA.bumpPrice : 0);
  const baseSubtotal = currentTier.price + effectiveBumpPrice;
  
  // 18% GST calculation
  const gstRate = 0.18;
  const gstAmount = Math.round(baseSubtotal * gstRate * 100) / 100;
  const totalAmountDue = Math.round((baseSubtotal + gstAmount) * 100) / 100;
  
  const originalBaseTotal = currentTier.originalPrice + (isCompleteTier ? ORDER_BUMP_DATA.originalPrice : (includeBump ? ORDER_BUMP_DATA.originalPrice : 0));
  const baseSavings = originalBaseTotal - baseSubtotal;

  const formatInr = (num: number) => {
    return num.toLocaleString('en-IN', {
      minimumFractionDigits: Number.isInteger(num) ? 0 : 2,
      maximumFractionDigits: 2,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isStarterTier) {
      window.open(razorpayStarterUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    if (isCompleteTier) {
      window.open(razorpayCompleteUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    window.open(razorpayPremiumUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overscroll-y-contain bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 touch-pan-y">
      
      <div 
        className="checkout-modal-container relative w-full max-w-4xl xl:max-w-5xl bg-[#FDFBF7] rounded-xl shadow-2xl border border-stone-300 overflow-y-auto my-auto max-h-[80vh] flex flex-col z-10"
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        
        {/* Modal Top Header */}
        <div className="checkout-modal-header bg-[#2C3E50] text-white px-5 sm:px-6 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37] font-serif font-bold text-base sm:text-lg">✦</span>
            <div>
              <h3 className="font-serif font-bold text-sm sm:text-base leading-tight">
                Instant Checkout · Lifetime Access
              </h3>
              <p className="text-[10px] sm:text-[11px] text-stone-300">
                Encrypted 256-bit SSL transaction · Official Client Ready System
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1 rounded-md hover:bg-white/10 transition-all duration-200 cursor-pointer hover:rotate-90 active:scale-90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Close checkout"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sticky 'STRICTLY LIMITED TO FIRST 500 CLIENTS' Header Section - Scrolls naturally on mobile, sticky on larger screens */}
        <div className="relative sm:sticky top-0 z-30 shrink-0 bg-gradient-to-r from-[#141E28] via-[#0E151E] to-[#141E28] border-b-2 border-[#D4AF37]/80 shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 overflow-hidden transition-all duration-300 animate-sticky-gold-gradient">
          {/* Subtle top metallic gold accent bar with continuous sweep shimmer */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#F2CB68] to-transparent z-10 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-shimmer" />
          </div>

          {/* Ambient radial glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-16 bg-[#D4AF37]/15 blur-xl pointer-events-none rounded-full animate-perpetual-glow" />

          <div className="relative z-10 space-y-2">
            {/* Header & Counter Row */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                {/* Subtle Fluid Gradient Exclusivity Badge */}
                <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-semibold tracking-widest text-[#FDF0C0] uppercase px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#B8860B]/30 via-[#D4AF37]/45 to-[#B8860B]/30 border border-[#D4AF37]/60 shadow-[0_2px_10px_rgba(212,175,55,0.25)] animate-fluid-gold-shift mb-1">
                  <span className="text-amber-300">✦</span>
                  <span className="bg-gradient-to-r from-[#FFF8D6] via-[#F3CE72] to-[#FFF8D6] bg-clip-text text-transparent font-bold">
                    MARKET EXCLUSIVITY CAP
                  </span>
                  <span className="text-amber-300">✦</span>
                </div>

                {/* Gentle perpetual glow & fluid gradient ribbon directly above the main text */}
                <div className="relative mb-1 w-full max-w-[260px] h-[3px] flex items-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F2CB68]/60 to-transparent blur-[2px] animate-perpetual-glow" />
                  <div className="relative h-[1.5px] w-full rounded-full bg-gradient-to-r from-transparent via-[#FFF8D6] to-transparent animate-fluid-gold-shift" />
                </div>

                <h3 className="font-serif font-bold text-xs sm:text-sm text-white tracking-tight flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37] shadow-[0_0_6px_#D4AF37]"></span>
                  </span>
                  <span className="animate-digital-asset-suite font-bold">STRICTLY LIMITED TO FIRST 500 CLIENTS</span>
                </h3>
              </div>

              {/* Refined Metallic Gold Claim Counter */}
              <div className="flex items-center gap-1.5 bg-black/50 border border-[#D4AF37]/60 px-2.5 py-1 rounded-lg shadow-inner backdrop-blur-xs shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono text-xs font-bold text-[#FDF0C0] tracking-tight">438</span>
                <span className="font-mono text-[10px] text-stone-400 tracking-wider">/ 500 Claimed</span>
                <span className="hidden xs:inline-block text-[9px] font-mono font-bold text-[#D4AF37] bg-[#D4AF37]/15 px-1.5 py-0.2 rounded border border-[#D4AF37]/30">87.6% TAKEN</span>
              </div>
            </div>

            {/* High-End Metallic Gold Liquid Progress Bar */}
            <div className="space-y-1">
              <div className="w-full bg-black/60 h-2 rounded-full p-0.5 border border-[#D4AF37]/40 shadow-inner relative overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-[#9C731A] via-[#D4AF37] to-[#FDF0C0] shadow-[0_0_8px_rgba(212,175,55,0.7)] animate-fluid-gold-shift relative transition-all duration-700"
                  style={{ width: '87.6%' }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] opacity-75" />
                </div>
              </div>
              
              {/* Metric Status Line */}
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-stone-300 flex items-center gap-1">
                  <span className="text-[#D4AF37] font-bold">87.6%</span>
                  <span>Allocation Secured · Complete Edition Bundle (Save 80% + Free Book)</span>
                </span>
                <span className="text-[#FDF0C0] font-bold bg-[#D4AF37]/20 px-2 py-0.5 rounded border border-[#D4AF37]/40 flex items-center gap-1 shadow-2xs shrink-0">
                  <span className="text-amber-300">⚡</span>
                  <span>Only 62 Spots Remaining</span>
                </span>
              </div>
            </div>

            {/* Quick Status / Switch Line */}
            {!isCompleteTier ? (
              <div className="pt-1.5 border-t border-stone-800/80 flex items-center justify-between gap-2 flex-wrap text-[10px] font-mono">
                <span className="text-stone-300">
                  Want 80% bundle savings + free bonus book?
                </span>
                <button
                  type="button"
                  onClick={() => onSelectTier('complete')}
                  className="group px-2.5 py-0.5 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] hover:brightness-110 text-stone-950 text-[10px] font-bold rounded shadow-xs transition-all duration-200 flex items-center gap-1 cursor-pointer active:scale-98"
                >
                  <span>Upgrade to Complete Bundle (₹899)</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            ) : (
              <div className="pt-1 border-t border-stone-800/80 flex items-center justify-between gap-2 flex-wrap text-[10px] font-mono text-emerald-300">
                <span className="flex items-center gap-1">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Spot Reserved: 80% Discount & Free Bonus Book Locked</span>
                </span>
                <span className="text-[10px] text-[#D4AF37] bg-[#D4AF37]/15 px-2 py-0.2 rounded border border-[#D4AF37]/35">
                  VIP Allocation #439
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Modal Body: Streamlined 2-Column Desktop Grid for Single-Screen Visibility */}
        <form 
          onSubmit={handleSubmit}
          className="p-4 sm:p-5 overflow-visible sm:overflow-y-auto sm:overscroll-contain sm:flex-1"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-start">
            
            {/* Left Column: Package Switcher + Add-on (6 cols) */}
            <div className="md:col-span-6 space-y-4">
              
              {/* Tier Switcher inside modal */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
                  <span>Choose Your Package:</span>
                  <span className="text-[#B8860B] text-[11px]">Click card to switch edition</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PRICING_TIERS.map((t) => {
                    const isSelected = selectedTier === t.id;
                    const isThisComplete = t.id === 'complete';
                    const discountBadge = isThisComplete ? '80% OFF' : '67% OFF';

                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => onSelectTier(t.id)}
                        className={`p-2.5 rounded-lg border text-left transition-all duration-200 cursor-pointer active:scale-98 hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C3E50] relative flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#0E3B33] bg-emerald-50/50 ring-2 ring-[#0E3B33] shadow-xs'
                            : 'border-stone-200 bg-stone-100/60 hover:bg-white hover:border-stone-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className="font-serif font-bold text-xs sm:text-sm text-[#1A252F] leading-tight">
                              {t.name}
                            </span>
                            <span className={`text-[9px] font-bold font-mono px-1 py-0.2 rounded border whitespace-nowrap ${
                              isThisComplete 
                                ? 'bg-amber-100 text-amber-900 border-amber-300' 
                                : 'bg-emerald-100 text-emerald-800 border-emerald-300/60'
                            }`}>
                              {discountBadge}
                            </span>
                          </div>

                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-[11px] text-stone-400 line-through font-mono">
                              ₹{t.originalPrice.toLocaleString('en-IN')}
                            </span>
                            <span className="font-serif font-bold text-sm sm:text-base text-[#0E3B33]">
                              ₹{t.price.toLocaleString('en-IN')}
                            </span>
                          </div>

                          <span className="text-[10px] text-stone-500 line-clamp-1 mt-0.5 block">
                            {t.target}
                          </span>
                        </div>

                        {isThisComplete ? (
                          <div className="mt-1.5 flex items-center justify-between gap-1">
                            <span className="text-[9px] font-mono text-emerald-800 bg-emerald-100/90 px-1 py-0.2 rounded font-semibold border border-emerald-300/60 whitespace-nowrap">
                              + Free Book
                            </span>
                            <span className="text-[9px] font-mono text-amber-900 bg-amber-100 px-1 py-0.2 rounded font-bold border border-amber-300 whitespace-nowrap">
                              First 500 Only
                            </span>
                          </div>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* EXCLUSIVE CHECKOUT ADD-ON */}
              <div 
                id="exclusive-checkout-addon-container"
                className="relative z-0 overflow-visible touch-pan-y"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B] flex items-center gap-1.5">
                    <span>✦</span>
                    <span>Exclusive Checkout Add-on</span>
                  </span>
                  {!isCompleteTier && (
                    <span className="text-[10px] font-mono text-stone-500">
                      {includeBump ? '✓ Active (+₹299)' : 'Add-on unchecked'}
                    </span>
                  )}
                </div>
                <OrderBump
                  isChecked={isCompleteTier ? true : includeBump}
                  isFreeBundleAddon={isCompleteTier}
                  onToggle={(checked) => setIncludeBump(checked)}
                />
              </div>

            </div>

            {/* Right Column: Price Summary + CTA Button + Guarantee (6 cols) */}
            <div className="md:col-span-6 space-y-3.5">
              
              {/* Price Summary Breakdown */}
              <div className="bg-stone-100/90 rounded-lg p-3 sm:p-3.5 border border-stone-200/80 space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-stone-700">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-medium">Selected: {currentTier.name}</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono px-1.5 py-0.2 rounded border border-emerald-200">
                      {isCompleteTier ? '80% OFF BUNDLE' : '67% OFF'}
                    </span>
                    {isCompleteTier && (
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold font-mono px-1.5 py-0.2 rounded border border-amber-300">
                        FIRST 500
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[11px] text-stone-400 line-through font-mono">
                      ₹{currentTier.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="font-mono font-semibold text-stone-900">
                      ₹{currentTier.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Add-on breakdown item */}
                {(includeBump || isCompleteTier) && (
                  <div className="flex justify-between items-center text-stone-700">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-medium">Payment Recovery Book:</span>
                      {isCompleteTier && (
                        <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold font-mono px-1.5 py-0.2 rounded border border-emerald-300">
                          FREE
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      {isCompleteTier ? (
                        <>
                          <span className="text-[11px] text-stone-400 line-through font-mono">
                            ₹{ORDER_BUMP_DATA.bumpPrice}
                          </span>
                          <span className="font-mono font-bold text-emerald-700">
                            ₹0 (FREE)
                          </span>
                        </>
                      ) : (
                        <span className="font-mono font-medium text-stone-900">
                          +₹{ORDER_BUMP_DATA.bumpPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {(includeBump || isCompleteTier) && (
                  <div className="flex justify-between items-center text-stone-500 pt-1 border-t border-stone-200/60 text-[11px]">
                    <span>Taxable Base:</span>
                    <span className="font-mono text-stone-800">₹{baseSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-stone-800 pt-1 border-t border-stone-200/80">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-[#1A252F]">GST (18%):</span>
                    <span className="text-[10px] text-stone-500 font-mono">Digital Tax</span>
                  </div>
                  <span className="font-mono font-semibold text-stone-900">+₹{formatInr(gstAmount)}</span>
                </div>

                <div className="flex justify-between text-emerald-800 text-[11px] font-medium pt-1 border-t border-stone-200">
                  <span>Base Catalog Savings:</span>
                  <span className="font-mono font-semibold">
                    Save ₹{baseSavings.toLocaleString('en-IN')} {isCompleteTier ? '(80%+ Value)' : ''}
                  </span>
                </div>

                <div className="flex justify-between items-baseline text-sm sm:text-base font-bold text-[#1A252F] pt-1.5 border-t border-stone-300">
                  <div>
                    <span className="block text-[#1A252F] leading-tight">Total Amount Due:</span>
                    <span className="text-[10px] font-normal text-stone-500 font-mono">Inclusive of 18% GST</span>
                  </div>
                  <span className="font-serif text-[#0E3B33] text-xl font-bold">
                    {isStarterTier
                      ? (includeBump ? '₹941.64' : '₹588.82')
                      : isPremiumTier
                      ? (includeBump ? '₹1,531.64' : '₹1,178.82')
                      : `₹${formatInr(totalAmountDue)}`}
                  </span>
                </div>
              </div>

              {/* Final Pay CTA with Direct Razorpay Integration */}
              <div>
                {isStarterTier ? (
                  <a
                    href={razorpayStarterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="starter-pay-btn"
                    data-testid="pay-button"
                    className="group relative overflow-hidden w-full py-3.5 sm:py-4 text-base font-bold text-white bg-gradient-to-r from-[#0E3B33] via-[#144A3F] to-[#0E3B33] border-2 border-[#D4AF37]/70 hover:border-[#F2CB68] rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 no-underline text-center animate-pay-button-glow"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFF8D6]/80 to-transparent pointer-events-none" />
                    <span>{starterButtonText}</span>
                    <span className="font-sans font-bold transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                ) : isCompleteTier ? (
                  <a
                    href={razorpayCompleteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="complete-pay-btn"
                    data-testid="pay-button"
                    className="group relative overflow-hidden w-full py-3.5 sm:py-4 text-base font-bold text-white bg-gradient-to-r from-[#0E3B33] via-[#144A3F] to-[#0E3B33] border-2 border-[#D4AF37]/70 hover:border-[#F2CB68] rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 no-underline text-center animate-pay-button-glow"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFF8D6]/80 to-transparent pointer-events-none" />
                    <span>{completeButtonText}</span>
                    <span className="font-sans font-bold transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                ) : (
                  <a
                    href={razorpayPremiumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="premium-pay-btn"
                    data-testid="pay-button"
                    className="group relative overflow-hidden w-full py-3.5 sm:py-4 text-base font-bold text-white bg-gradient-to-r from-[#0E3B33] via-[#144A3F] to-[#0E3B33] border-2 border-[#D4AF37]/70 hover:border-[#F2CB68] rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 no-underline text-center animate-pay-button-glow"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFF8D6]/80 to-transparent pointer-events-none" />
                    <span>{premiumButtonText}</span>
                    <span className="font-sans font-bold transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                )}
              </div>

              {/* Premium Commitment Statement - Always Visible */}
              <div className="p-2 sm:p-2.5 rounded-lg bg-stone-100/90 border border-stone-200/80 text-center">
                <p className="text-[11px] sm:text-xs text-stone-700 font-medium leading-relaxed flex items-center justify-center gap-1.5">
                  <span className="text-[#0E3B33] text-xs">🔒</span>
                  <span>Empowering your transition to high-value freelancing with permanent market dominance.</span>
                </p>
              </div>

            </div>

          </div>
        </form>

      </div>
    </div>
  );
};
