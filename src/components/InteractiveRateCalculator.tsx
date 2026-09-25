import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const InteractiveRateCalculator: React.FC = () => {
  const [monthlyTarget, setMonthlyTarget] = useState<number>(80000);
  const [billableDays, setBillableDays] = useState<number>(16);
  const [projectDays, setProjectDays] = useState<number>(3);
  const [copiedRate, setCopiedRate] = useState<boolean>(false);

  // Calculations from Page 76 Worksheet
  const targetDailyRate = billableDays > 0 ? Math.round(monthlyTarget / billableDays) : 0;
  const baseProjectRate = Math.round(targetDailyRate * projectDays);
  const bufferedRate = Math.round(baseProjectRate * 1.15);
  // Round to clean 100s for Indian negotiation
  const roundedBufferedRate = Math.ceil(bufferedRate / 100) * 100;

  const handleCopyRate = () => {
    navigator.clipboard.writeText(`₹${roundedBufferedRate.toLocaleString('en-IN')}`);
    setCopiedRate(true);
    setTimeout(() => setCopiedRate(false), 2000);
  };

  return (
    <section className="py-20 bg-[#FDFBF7] border-t border-[#1A252F]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] mb-2">
              Interactive Worksheet (From Page 76)
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A252F] tracking-tight">
              The Indian Market Rate & Buffer Calculator
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              Most beginners guess their rate under pressure on a call and underquote by 40%. Calculate your target rate calmly with the built-in 15% negotiation buffer:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={150}>
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 sm:p-9 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:border-stone-300 transition-colors duration-200">
          
          {/* Inputs Column */}
          <div className="md:col-span-7 space-y-6">
            <div className="p-3 -m-3 rounded-lg hover:bg-stone-50/80 transition-colors duration-200">
              <div className="flex justify-between text-xs font-medium text-[#1A252F] mb-1.5">
                <span>1. Monthly Income Target</span>
                <span className="font-mono font-bold text-[#B8860B] bg-[#B8860B]/10 px-2 py-0.5 rounded transition-transform duration-200 hover:scale-105">
                  ₹{monthlyTarget.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={20000}
                max={300000}
                step={5000}
                value={monthlyTarget}
                onChange={(e) => setMonthlyTarget(Number(e.target.value))}
                className="w-full accent-[#2C3E50] cursor-pointer"
              />
              <span className="text-[11px] text-stone-500 block mt-1">What you realistically need or want to clear per month</span>
            </div>

            <div className="p-3 -m-3 rounded-lg hover:bg-stone-50/80 transition-colors duration-200">
              <div className="flex justify-between text-xs font-medium text-[#1A252F] mb-1.5">
                <span>2. Billable Days Per Month</span>
                <span className="font-mono font-bold text-[#2C3E50] bg-stone-100 px-2 py-0.5 rounded transition-transform duration-200 hover:scale-105">
                  {billableDays} days
                </span>
              </div>
              <input
                type="range"
                min={8}
                max={22}
                step={1}
                value={billableDays}
                onChange={(e) => setBillableDays(Number(e.target.value))}
                className="w-full accent-[#2C3E50] cursor-pointer"
              />
              <span className="text-[11px] text-stone-500 block mt-1">Be honest; admin, pitching, revisions, and life take real time</span>
            </div>

            <div className="p-3 -m-3 rounded-lg hover:bg-stone-50/80 transition-colors duration-200">
              <div className="flex justify-between text-xs font-medium text-[#1A252F] mb-1.5">
                <span>3. Average Project Delivery (Days)</span>
                <span className="font-mono font-bold text-[#2C3E50] bg-stone-100 px-2 py-0.5 rounded transition-transform duration-200 hover:scale-105">
                  {projectDays} days
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={15}
                step={1}
                value={projectDays}
                onChange={(e) => setProjectDays(Number(e.target.value))}
                className="w-full accent-[#2C3E50] cursor-pointer"
              />
              <span className="text-[11px] text-stone-500 block mt-1">How many total focused days the project deliverables take</span>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="md:col-span-5 bg-[#0E3B33] text-[#FDFBF7] rounded-xl p-6 sm:p-7 space-y-4 shadow-md relative overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8860B]/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37]">
                  Calculated Quote
                </span>
                <div className="mt-1 text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
                  ₹{roundedBufferedRate.toLocaleString('en-IN')}
                </div>
                <span className="text-xs text-stone-300">
                  Number you quote first to the client
                </span>
              </div>

              <button
                onClick={handleCopyRate}
                className="group p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-all duration-200 active:scale-95 cursor-pointer text-stone-200 hover:text-white"
                title="Copy rate to clipboard"
                aria-label="Copy rate"
              >
                {copiedRate ? (
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="pt-3 border-t border-white/15 space-y-2 text-xs">
              <div className="flex justify-between text-stone-300">
                <span>Target daily rate:</span>
                <span className="font-mono text-white">₹{targetDailyRate.toLocaleString('en-IN')}/day</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Base project floor:</span>
                <span className="font-mono text-white">₹{baseProjectRate.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#D4AF37] font-medium">
                <span>+ 15% India negotiation buffer:</span>
                <span className="font-mono">+₹{(roundedBufferedRate - baseProjectRate).toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="p-3 bg-black/25 rounded-md text-[11px] text-stone-300 leading-snug">
              🛡️ If the client pushes back, offer a discount down to your base floor (₹{baseProjectRate.toLocaleString('en-IN')}) in exchange for 1 less revision round!
            </div>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
