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
  const completeButtonText = 'Pay ₹1,060.82 (Incl. 18% GST) & Get Access';
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      
      <div className="relative w-full max-w-xl bg-[#FDFBF7] rounded-xl shadow-2xl border border-stone-300 overflow-hidden my-8">
        
        {/* Modal Top Header */}
        <div className="bg-[#2C3E50] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37] font-serif font-bold text-lg">✦</span>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg leading-tight">
                Instant Checkout · Lifetime Access
              </h3>
              <p className="text-[11px] text-stone-300">
                Encrypted 256-bit SSL transaction · Official Client Ready System
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-all duration-200 cursor-pointer hover:rotate-90 active:scale-90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Close checkout"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body: Direct Checkout Form (Order Confirmed screen removed completely) */}
        <form 
          onSubmit={handleSubmit}
          className="p-5 sm:p-7 space-y-6"
        >

          {/* Prominent Urgency Notice for the Complete Edition Bundle */}
          <div className={`p-4 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
            isCompleteTier
              ? 'bg-gradient-to-r from-amber-500/15 via-amber-50 to-amber-500/10 border-amber-500 shadow-md ring-1 ring-amber-500/30'
              : 'bg-stone-50 border-stone-300 hover:border-amber-400'
          }`}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-900 flex items-center justify-center font-bold text-base shrink-0 mt-0.5">
                ⚡
              </div>
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="font-serif font-bold text-xs sm:text-sm text-[#1A252F] flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                    <span>STRICTLY LIMITED TO FIRST 500 CLIENTS</span>
                  </span>
                  <span className="font-mono text-[11px] font-bold text-amber-950 bg-amber-200/90 px-2 py-0.5 rounded border border-amber-300 shadow-2xs">
                    438 / 500 Claimed
                  </span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed">
                  The <strong>'Complete Edition' bundle</strong> includes both the <strong>Starter Edition</strong> and <strong>Premium Edition</strong> at an <strong>80% discount</strong> (₹899 vs. ₹4,498), plus <strong>The Payment Recovery System</strong> book completely <strong>FREE</strong> (worth ₹799 / ₹299). This special bundle is strictly capped at the <strong>first 500 clients</strong>.
                </p>

                {/* Progress bar visual indicating scarcity */}
                <div className="pt-1">
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-amber-500 to-red-600 h-full rounded-full transition-all duration-500" 
                      style={{ width: '87.6%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-stone-600 mt-1">
                    <span>87.6% Allocation Claimed</span>
                    <span className="font-bold text-red-700">Only 62 Spots Remaining!</span>
                  </div>
                </div>

                {!isCompleteTier && (
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => onSelectTier('complete')}
                      className="text-xs font-serif font-bold text-[#0E3B33] hover:text-[#B8860B] underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Upgrade to the Complete Edition Bundle (Save 80% + Free Bonus Book) →</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Tier Switcher inside modal */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
              <span>Choose Your Package:</span>
              <span className="text-[#B8860B]">Click card to switch edition</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {PRICING_TIERS.map((t) => {
                const isSelected = selectedTier === t.id;
                const isThisComplete = t.id === 'complete';
                const discountBadge = isThisComplete ? '80% OFF' : '67% OFF';

                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => onSelectTier(t.id)}
                    className={`p-3 rounded-lg border text-left transition-all duration-200 cursor-pointer active:scale-98 hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C3E50] relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#0E3B33] bg-emerald-50/40 ring-2 ring-[#0E3B33] shadow-xs'
                        : 'border-stone-200 bg-stone-100/60 hover:bg-white hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-serif font-bold text-xs sm:text-sm text-[#1A252F] leading-tight">
                          {t.name}
                        </span>
                        <span className={`text-[9px] sm:text-[10px] font-bold font-mono px-1.5 py-0.5 rounded border whitespace-nowrap ${
                          isThisComplete 
                            ? 'bg-amber-100 text-amber-900 border-amber-300' 
                            : 'bg-emerald-100 text-emerald-800 border-emerald-300/60'
                        }`}>
                          {discountBadge}
                        </span>
                      </div>

                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-xs text-stone-400 line-through font-mono">
                          ₹{t.originalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="font-serif font-bold text-base text-[#0E3B33]">
                          ₹{t.price.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <span className="text-[10px] text-stone-500 line-clamp-1 mt-1 block">
                        {t.target}
                      </span>
                    </div>

                    {isThisComplete ? (
                      <div className="mt-2 space-y-1">
                        <span className="text-[9px] font-mono text-emerald-800 bg-emerald-100/90 px-1 py-0.5 rounded font-semibold block text-center border border-emerald-300/60">
                          + Free Add-on Book
                        </span>
                        <span className="text-[9px] font-mono text-red-700 bg-red-50 px-1 py-0.5 rounded font-bold block text-center border border-red-200">
                          Strictly First 500 Only
                        </span>
                      </div>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* EXCLUSIVE CHECKOUT ADD-ON */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B] flex items-center gap-1.5">
                <span>✦</span>
                <span>Exclusive Checkout Add-on</span>
              </span>
              {!isCompleteTier && (
                <span className="text-[11px] font-mono text-stone-500">
                  {includeBump ? '✓ Add-on active (+₹299)' : 'Add-on unchecked'}
                </span>
              )}
            </div>
            <OrderBump
              isChecked={isCompleteTier ? true : includeBump}
              isFreeBundleAddon={isCompleteTier}
              onToggle={(checked) => setIncludeBump(checked)}
            />
          </div>

          {/* Price Summary Breakdown */}
          <div className="bg-stone-100/90 rounded-lg p-4 border border-stone-200/80 space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-stone-700">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-medium">Selected: {currentTier.name}</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono px-1.5 py-0.2 rounded border border-emerald-200">
                  {isCompleteTier ? '80% OFF BUNDLE' : '67% OFF'}
                </span>
                {isCompleteTier && (
                  <span className="bg-amber-100 text-amber-900 text-[10px] font-bold font-mono px-1.5 py-0.2 rounded border border-amber-300">
                    STRICTLY FIRST 500 CLIENTS
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
                  <span className="font-medium">The Payment Recovery System (Add-on):</span>
                  {isCompleteTier && (
                    <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold font-mono px-1.5 py-0.2 rounded border border-emerald-300">
                      FREE WITH BUNDLE
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
                <span>Total Taxable Base Amount:</span>
                <span className="font-mono text-stone-800">₹{baseSubtotal.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div className="flex justify-between items-center text-stone-800 pt-1 border-t border-stone-200/80">
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[#1A252F]">GST (18%):</span>
                <span className="text-[10px] text-stone-500 font-mono">Applicable Digital Services Tax</span>
              </div>
              <span className="font-mono font-semibold text-stone-900">+₹{formatInr(gstAmount)}</span>
            </div>

            <div className="flex justify-between text-emerald-800 text-[11px] font-medium pt-1 border-t border-stone-200">
              <span>Base Catalog Savings:</span>
              <span className="font-mono">
                Save ₹{baseSavings.toLocaleString('en-IN')} {isCompleteTier ? '(80%+ Value)' : ''}
              </span>
            </div>

            <div className="flex justify-between items-baseline text-sm sm:text-base font-bold text-[#1A252F] pt-2 border-t border-stone-300">
              <div>
                <span className="block text-[#1A252F]">Total Amount Due:</span>
                <span className="text-[11px] font-normal text-stone-500 font-mono">Inclusive of 18% GST</span>
              </div>
              <span className="font-serif text-[#0E3B33] text-xl sm:text-2xl font-bold">
                {isStarterTier
                  ? (includeBump ? '₹941.64' : '₹588.82')
                  : isPremiumTier
                  ? (includeBump ? '₹1,531.64' : '₹1,178.82')
                  : `₹${formatInr(totalAmountDue)}`}
              </span>
            </div>
          </div>

          {/* Final Pay CTA with Direct Razorpay Integration */}
          {isStarterTier ? (
            <a
              href={razorpayStarterUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="starter-pay-btn"
              data-testid="pay-button"
              className="group w-full py-4 text-base font-semibold text-white bg-[#0E3B33] hover:bg-[#092621] rounded-lg transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer active:scale-98 active:translate-y-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 no-underline text-center"
            >
              <span>{starterButtonText}</span>
              <svg
                className="w-4 h-4 text-white/80 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ) : isCompleteTier ? (
            <a
              href={razorpayCompleteUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="complete-pay-btn"
              data-testid="pay-button"
              className="group w-full py-4 text-base font-semibold text-white bg-[#0E3B33] hover:bg-[#092621] rounded-lg transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer active:scale-98 active:translate-y-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 no-underline text-center"
            >
              <span>{completeButtonText}</span>
              <svg
                className="w-4 h-4 text-white/80 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ) : (
            <a
              href={razorpayPremiumUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="premium-pay-btn"
              data-testid="pay-button"
              className="group w-full py-4 text-base font-semibold text-white bg-[#0E3B33] hover:bg-[#092621] rounded-lg transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer active:scale-98 active:translate-y-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 no-underline text-center"
            >
              <span>{premiumButtonText}</span>
              <svg
                className="w-4 h-4 text-white/80 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}

          <p className="text-[11px] text-center text-stone-500 font-sans">
            🔒 Instant download link immediately after payment. 30-day money-back guarantee if you complete the first 7 workbook days and find zero value.
          </p>

        </form>

      </div>
    </div>
  );
};
