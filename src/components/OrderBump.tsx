import React, { useState } from 'react';
import { ORDER_BUMP_DATA, PAYMENT_RECOVERY_LADDER, CLIENT_RESPONSE_DECODER_SAMPLES } from '../data/bookData';

interface OrderBumpProps {
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
  standalone?: boolean;
  isFreeBundleAddon?: boolean;
}

export const OrderBump: React.FC<OrderBumpProps> = ({ 
  isChecked, 
  onToggle, 
  standalone = false,
  isFreeBundleAddon = false 
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const activeChecked = isFreeBundleAddon ? true : isChecked;

  return (
    <div className={`rounded-xl transition-all duration-200 ${
      isFreeBundleAddon
        ? 'bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/50 border-2 border-emerald-600 shadow-md ring-1 ring-emerald-500/20'
        : activeChecked 
          ? 'bg-amber-50/90 border-2 border-[#B8860B] shadow-md' 
          : 'bg-stone-50 border border-stone-300 shadow-2xs'
    } p-5 sm:p-6`}>
      
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between mb-3">
        {isFreeBundleAddon ? (
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300/80 px-2.5 py-0.5 rounded flex items-center gap-1.5">
            <span>🎁</span>
            <span>Bundle Benefit · Included 100% Free (Saved ₹299)</span>
          </span>
        ) : (
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B8860B] bg-[#B8860B]/10 px-2.5 py-0.5 rounded">
            Exclusive Checkout Add-on (Save 62%)
          </span>
        )}
        <span className="text-xs text-stone-500 font-serif italic">
          {ORDER_BUMP_DATA.author}
        </span>
      </div>

      {/* Main Bump Checkbox Row */}
      <label 
        htmlFor="exclusive-checkout-addon"
        className={`flex items-start gap-3.5 p-2 -m-2 rounded-lg transition-colors duration-200 ${
          isFreeBundleAddon ? 'cursor-default' : 'cursor-pointer group hover:bg-black/5'
        }`}
      >
        <input
          id="exclusive-checkout-addon"
          name="exclusive-checkout-addon"
          type="checkbox"
          aria-label="Exclusive Checkout Add-on"
          data-testid="exclusive-checkout-addon-checkbox"
          checked={activeChecked}
          disabled={isFreeBundleAddon}
          onChange={(e) => !isFreeBundleAddon && onToggle(e.target.checked)}
          className={`mt-1 w-5 h-5 rounded border-stone-300 ${
            isFreeBundleAddon 
              ? 'text-emerald-700 accent-emerald-700 cursor-default' 
              : 'text-[#B8860B] focus:ring-[#B8860B] cursor-pointer group-hover:scale-105'
          } transition-transform`}
        />
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className={`font-serif font-bold text-base sm:text-lg text-[#1A252F] ${
              !isFreeBundleAddon ? 'group-hover:text-[#0E3B33]' : ''
            } transition-colors`}>
              Exclusive Checkout Add-on: {ORDER_BUMP_DATA.title}
            </span>
            <div className="flex items-baseline gap-1.5 font-sans">
              {isFreeBundleAddon ? (
                <>
                  <span className="text-sm line-through text-stone-400">₹{ORDER_BUMP_DATA.bumpPrice}</span>
                  <span className="text-base font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300">
                    ₹0 FREE
                  </span>
                </>
              ) : (
                <>
                  <span className="text-sm line-through text-stone-400">₹{ORDER_BUMP_DATA.originalPrice}</span>
                  <span className="text-base font-bold text-[#B8860B]">₹{ORDER_BUMP_DATA.bumpPrice}</span>
                </>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {ORDER_BUMP_DATA.description}
          </p>

          <p className="text-xs font-semibold text-[#0E3B33] pt-1">
            {isFreeBundleAddon ? (
              <span className="text-emerald-800 font-bold flex items-center gap-1">
                <span>✓</span>
                <span>Included FREE with Complete Edition Bundle! (Valued at ₹799)</span>
              </span>
            ) : (
              `✓ ${ORDER_BUMP_DATA.checkboxText}`
            )}
          </p>
        </div>
      </label>

      {/* Expandable Preview Toggle */}
      <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="text-[#2C3E50] hover:text-[#B8860B] font-medium flex items-center gap-1.5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8860B] rounded px-1.5 py-0.5 -mx-1.5"
        >
          <span>{showDetails ? 'Hide System Contents' : 'See What Is Inside This Guide'}</span>
          <svg
            className={`w-3.5 h-3.5 transform transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <span className="text-[11px] text-stone-500 font-mono">2 Complete Editions Included</span>
      </div>

      {/* Expanded System Preview (Faithful to PDF 3) */}
      {showDetails && (
        <div className="mt-4 pt-4 border-t border-stone-200 space-y-4 text-xs bg-white p-4 rounded-lg border border-stone-200">
          <div>
            <h4 className="font-serif font-bold text-sm text-[#1A252F] mb-1">
              Edition I: The Core Playbook (Decision OS)
            </h4>
            <ul className="space-y-1 text-stone-600 list-disc list-inside">
              <li><strong>The 8-Stage Recovery Ladder:</strong> From Stage 0 (Helpful reminder before due date) to Stage 5 (Formal escalation checkpoint).</li>
              <li><strong>Client Response Decoder:</strong> Exact scripts when clients say <em>"We will pay soon"</em>, <em>"Finance handles it"</em>, or <em>"Cash flow is tight"</em>.</li>
              <li><strong>Payment Risk Scorecard & Decision Trees:</strong> Know exactly when to pause new work before unbilled hours compound.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-[#1A252F] mb-1">
              Edition II: Templates & Workbook (Swipe File)
            </h4>
            <ul className="space-y-1 text-stone-600 list-disc list-inside">
              <li><strong>20 Ultra-Short Follow-Ups:</strong> 1-line copy-paste nudges designed for WhatsApp and Email that remove friction.</li>
              <li><strong>10 High-Open Subject Lines:</strong> Tested formats to ensure overdue invoice emails are opened immediately.</li>
              <li><strong>Overdue Invoice Worksheets & Audit Checklists:</strong> Document the factual chronology to keep the upper hand professionally.</li>
            </ul>
          </div>

          <div className="p-2.5 bg-amber-50 rounded border border-amber-200/80 text-[11px] text-amber-950">
            <strong>Why freelancers need this:</strong> One unpaid ₹25,000 project or delayed invoice wipes out weeks of profit. This gives you battle-tested boundary setting scripts that protect your cash without burning the relationship.
          </div>
        </div>
      )}

    </div>
  );
};
