/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HrpaPreviewer } from './components/HrpaPreviewer';
import { InteractiveRateCalculator } from './components/InteractiveRateCalculator';
import { VaultShowcase } from './components/VaultShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { SampleReaderModal } from './components/SampleReaderModal';
import { TierType } from './types';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [selectedTier, setSelectedTier] = useState<TierType>('premium');
  const [isSampleReaderOpen, setIsSampleReaderOpen] = useState<boolean>(false);

  const handleOpenCheckout = (tier: TierType = 'premium') => {
    setSelectedTier(tier);
    setIsCheckoutOpen(true);
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenCheckout('premium');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A252F] flex flex-col font-sans selection:bg-[#B8860B]/20 selection:text-[#1A252F]">
      
      {/* Sticky Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* 3-Zone Top Navigation Bar */}
      <Navbar onCtaClick={() => handleOpenCheckout('premium')} />

      {/* Section 1: Hero Section */}
      <main className="flex-1">
        <Hero 
          onCtaClick={() => handleOpenCheckout('premium')}
          onPreviewClick={() => setIsSampleReaderOpen(true)}
        />

        {/* Section 2: Problem Agitation */}
        <ProblemSection />

        {/* Section 3: Solution Presentation (Product Showcase) */}
        <SolutionSection onOpenSampleReader={() => setIsSampleReaderOpen(true)} />

        {/* Interactive Feature 1: The HRPA Proposal Generator */}
        <HrpaPreviewer />

        {/* Interactive Feature 2: Indian Market Rate & 15% Buffer Calculator */}
        <InteractiveRateCalculator />

        {/* Feature 3: Inside the Bonus Vault & Legal Documents */}
        <VaultShowcase />

        {/* Section: What Freelancers Say (Client Testimonials with 5-Star Visuals) */}
        <TestimonialsSection />

        {/* Section 4: Pricing Comparison Table */}
        <PricingSection onSelectTier={(tier) => handleOpenCheckout(tier)} />

        {/* Section 6: FAQ & Guarantee */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Section 5: Checkout Drawer / Modal with Order Bump & Instant Download Delivery */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        selectedTier={selectedTier}
        onClose={() => setIsCheckoutOpen(false)}
        onSelectTier={(tier) => setSelectedTier(tier)}
      />

      {/* Interactive Look-Inside / Sample Reader Modal */}
      <SampleReaderModal
        isOpen={isSampleReaderOpen}
        onClose={() => setIsSampleReaderOpen(false)}
        onGetSystemClick={() => handleOpenCheckout('starter')}
      />

    </div>
  );
}
