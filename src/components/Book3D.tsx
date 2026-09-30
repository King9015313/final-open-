import React, { useState, useEffect, useRef } from 'react';

export type BookEdition = 'starter' | 'premium' | 'complete';

interface Book3DProps {
  onOpenPreview?: () => void;
  edition?: BookEdition;
  onEditionChange?: (edition: BookEdition) => void;
  compact?: boolean;
}

interface IsometricTier {
  label: string;
  sub: string;
  color: string;
  highlight?: boolean;
}

interface EditionConfig {
  id: BookEdition;
  name: string;
  tag: string;
  badge: string;
  colorName: string;
  clothClass: string;
  ribbonColor: string;
  platinumFoilTone: string;
  badgeBg: string;
  badgeBorder: string;
  accentText: string;
  systemDescriptor: string;
  editionSub: string;
  authorLine: string;
  price: string;
  problemTitle: string;
  problemDesc: string;
  solutionTitle: string;
  solutionDesc: string;
  leftPageHeading: string;
  leftPageSub: string;
  contents: string[];
  diagramTitle: string;
  diagramBadge: string;
  diagramSteps: { title: string; desc: string; num: string }[];
  diagramMetrics: { label: string; value: string };
  isometricTitle: string;
  isometricTiers: IsometricTier[];
}

const EDITION_ORDER: BookEdition[] = ['starter', 'premium', 'complete'];

const EDITIONS: Record<BookEdition, EditionConfig> = {
  starter: {
    id: 'starter',
    name: 'Starter Edition',
    tag: 'STARTER EDITION',
    badge: 'Forest Green',
    colorName: 'Deep Forest Green',
    clothClass: 'book-cloth-green',
    ribbonColor: 'from-slate-100 via-slate-300 to-slate-400',
    platinumFoilTone: '#F8FAFC',
    badgeBg: 'bg-emerald-950/80',
    badgeBorder: 'border-emerald-600/50',
    accentText: 'text-emerald-400',
    systemDescriptor: 'The Complete Freemium Operating System',
    editionSub: 'Core Client Acquisition & 30-Day Missions',
    authorLine: 'by Himanshu Manjhi',
    price: '₹499',
    problemTitle: 'THE CLIENT ACQUISITION BOTTLENECK',
    problemDesc: 'Cold DMs and proposals get ignored due to zero pre-built proof and generic pitch angles.',
    solutionTitle: 'THE HRPA SPEC-PROOF SOLUTION',
    solutionDesc: 'Direct 4-step pipeline that manufactures indisputable relevance and lands discovery calls in 4 sentences.',
    leftPageHeading: 'STARTER · CORE SYSTEM',
    leftPageSub: 'Essential Foundation for Client Acquisition',
    contents: [
      '80-Page Core Client Acquisition System Manual',
      '30-Day Guided Implementation & Daily Missions Workbook',
      'High-Conversion Outreach Frameworks & Scripts',
      'Professional Service Agreement & Invoice Frameworks',
      'Lifetime Access to all Future Updates',
    ],
    diagramTitle: 'HRPA OUTREACH PIPELINE (2D)',
    diagramBadge: '48% Response Rate',
    diagramSteps: [
      { num: '1', title: 'HOOK AUDIT', desc: 'Identify live bottlenecks in prospect funnel' },
      { num: '2', title: 'RELEVANCE MATCH', desc: 'Targeted commercial angle for founders' },
      { num: '3', title: 'SPEC PROOF ASSET', desc: 'Pre-made sample delivered upfront' },
      { num: '4', title: 'ACTION BRIDGE', desc: 'Low-friction proposal call initiation' },
    ],
    diagramMetrics: { label: 'Conversion Target', value: '8 Discovery Calls / 50 Leads' },
    isometricTitle: '3D SPEC-PROOF CONVERSION FUNNEL',
    isometricTiers: [
      { label: '50 Targeted Decision Makers', sub: 'High-Intent Outreach Batch', color: 'from-emerald-900/90 to-teal-900/80' },
      { label: 'Pre-Built Spec Proof Asset', sub: 'Zero-Friction Upfront Value', color: 'from-emerald-700 to-teal-800' },
      { label: '8 Closed Discovery Calls', sub: '48% Verified Conversion Yield', color: 'from-emerald-400 to-teal-300', highlight: true },
    ],
  },
  premium: {
    id: 'premium',
    name: 'Premium Edition',
    tag: 'PREMIUM EDITION',
    badge: 'Rich Burgundy',
    colorName: 'Rich Burgundy',
    clothClass: 'book-cloth-burgundy',
    ribbonColor: 'from-white via-slate-200 to-slate-400',
    platinumFoilTone: '#FFFFFF',
    badgeBg: 'bg-rose-950/80',
    badgeBorder: 'border-rose-600/50',
    accentText: 'text-rose-400',
    systemDescriptor: 'The Complete Freemium Operating System',
    editionSub: 'Advanced Agency SOPs & Retainer Architecture',
    authorLine: 'by Himanshu Manjhi',
    price: '₹699',
    problemTitle: 'THE SCOPE CREEP & REVENUE CLIFF',
    problemDesc: 'Freelancers get trapped in endless unpaid revisions and feast-or-famine one-off gigs.',
    solutionTitle: 'THE 48-HR RETAINER FORTRESS',
    solutionDesc: 'Contractual boundaries, 50% upfront deposits, and locked recurring monthly retainers.',
    leftPageHeading: 'PREMIUM · AGENCY VAULT',
    leftPageSub: 'Retainers, Scope Defense & Operations',
    contents: [
      'Everything in the Starter Edition',
      'Client Onboarding SOP & Checklist (First 48 Hours)',
      'Advanced Financial Calculator & Buffer Worksheet',
      'Strategic Retainer Pitch & Scope Protection Frameworks',
      'Advanced Agency Modules: Client Retention & Referrals',
      'Priority Support & Resource Vault Access',
    ],
    diagramTitle: 'RETAINER & SCOPE MATRIX (2D)',
    diagramBadge: 'Zero Scope Creep',
    diagramSteps: [
      { num: '1', title: '48HR ONBOARDING SOP', desc: 'Deposit confirmation & boundary agreement' },
      { num: '2', title: 'SCOPE SHIELD', desc: 'Strict revisions limit and change-order fee' },
      { num: '3', title: 'BUFFER WORKSHEET', desc: 'Pricing calculator with TDS & tax defense' },
      { num: '4', title: 'RETENTION FLYWHEEL', desc: 'Quarterly review triggers & referral bonuses' },
    ],
    diagramMetrics: { label: 'Target Retainer', value: '₹75,000 - ₹1,20,000 / mo' },
    isometricTitle: '3D SCOPE DEFENSE BASTION',
    isometricTiers: [
      { label: '50% Upfront Deposit Gate', sub: 'Zero Work Commences Unfunded', color: 'from-rose-950/90 to-rose-900/80' },
      { label: 'Scope Shield Barrier', sub: 'Max 2 Revisions & Strict Change Orders', color: 'from-rose-800 to-amber-900' },
      { label: '₹1,00,000/Mo Retainer Vault', sub: 'Recurring Predictable Cashflow', color: 'from-rose-400 to-amber-300', highlight: true },
    ],
  },
  complete: {
    id: 'complete',
    name: 'Complete Edition',
    tag: 'COMPLETE EDITION',
    badge: 'Deep Navy Blue',
    colorName: 'Deep Navy Blue',
    clothClass: 'book-cloth-navy',
    ribbonColor: 'from-white via-slate-100 to-slate-300',
    platinumFoilTone: '#FFFFFF',
    badgeBg: 'bg-blue-950/80',
    badgeBorder: 'border-blue-600/50',
    accentText: 'text-sky-400',
    systemDescriptor: 'The Complete Freemium Operating System',
    editionSub: 'Starter + Premium + Unfair Market Advantage',
    authorLine: 'by Himanshu Manjhi',
    price: '₹899',
    problemTitle: 'THE UNPREDICTABLE INCOME ROLLERCOASTER',
    problemDesc: 'Disjointed templates, inconsistent lead pipelines, and lack of a complete operating flywheel.',
    solutionTitle: 'THE UNFAIR MARKET ADVANTAGE',
    solutionDesc: 'Unified client acquisition + enterprise retainer defense scaling predictably to ₹1,00,000+/mo.',
    leftPageHeading: 'COMPLETE · FULL SUITE',
    leftPageSub: 'Both Editions Combined + Unfair Market Advantage',
    contents: [
      'Both Starter & Premium Editions Included',
      'Core Client Acquisition System Ebook (80 Pages) + 30-Day Missions',
      'All SOPs, Retainer Pitches, Rate Calculators & Agency Worksheets',
      'Advanced Modules: Client Retention & Scaling to ₹1L+/month',
      'Complete Contracts & Invoices Vault with Lifetime Updates',
      'Strictly limited to the first 500 clients only',
    ],
    diagramTitle: 'SCALING TO ₹1L+/MO BLUEPRINT (2D)',
    diagramBadge: 'Top 1% Metric',
    diagramSteps: [
      { num: '1', title: 'DUAL SYSTEM SYNERGY', desc: 'Starter outreach + Premium agency SOPs' },
      { num: '2', title: 'VELOCITY FUNNEL', desc: '50 targeted prospects yield 2 retainers' },
      { num: '3', title: 'FULL VAULT ASSETS', desc: 'Battle-tested contracts & calculators' },
      { num: '4', title: 'SCALING TO ₹1L+/MO', desc: 'Predictable retainer stability & client LTV' },
    ],
    diagramMetrics: { label: 'Lifetime Value Target', value: '₹1,50,000+/Mo Stable' },
    isometricTitle: '3D DUAL-ENGINE FLYWHEEL',
    isometricTiers: [
      { label: 'Outreach Engine (Starter)', sub: 'Continuous Inbound Spec Pipeline', color: 'from-blue-950/90 to-indigo-950/80' },
      { label: 'Agency Retainer Core (Premium)', sub: 'SOPs, Buffer Calculators & Defense', color: 'from-blue-700 to-indigo-700' },
      { label: 'Autonomous ₹1L+/Mo Engine', sub: 'High-LTV Contracts & Agency Scale', color: 'from-sky-300 to-indigo-200', highlight: true },
    ],
  },
};

/**
 * Elegant 2D Logo with clean vector geometry and platinum foil styling
 */
const Elegant2DLogo: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const dim = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-11 h-11' : 'w-8 h-8 sm:w-9 sm:h-9';
  return (
    <div className={`flex flex-col items-center justify-center pointer-events-none select-none ${className}`}>
      <div className={`relative ${dim} rounded-full platinum-crest-ring flex items-center justify-center p-0.5`}>
        {/* Precision 2D Insignia Hallmark */}
        <svg 
          className="w-full h-full text-slate-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]" 
          viewBox="0 0 36 36" 
          fill="none"
        >
          {/* Outer hairline circle */}
          <circle cx="18" cy="18" r="16.5" stroke="currentColor" strokeWidth="0.85" strokeDasharray="1.5 2" opacity="0.8" />
          <circle cx="18" cy="18" r="13.5" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
          
          {/* Inner 2D Diamond Hallmark */}
          <polygon 
            points="18,5 29,18 18,31 7,18" 
            stroke="currentColor" 
            strokeWidth="1.1" 
            fill="rgba(255, 255, 255, 0.16)" 
          />
          
          {/* Intersecting 2D Monogram Pillars */}
          <path 
            d="M14 13H21C22.6 13 23.8 14.2 23.8 15.8C23.8 17.4 22.6 18.6 21 18.6H14V23" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path d="M19.5 18.6L23.2 23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Cardinal star accent points */}
          <circle cx="18" cy="8.5" r="1" fill="currentColor" />
          <circle cx="27.5" cy="18" r="1" fill="currentColor" />
          <circle cx="18" cy="27.5" r="1" fill="currentColor" />
          <circle cx="8.5" cy="18" r="1" fill="currentColor" />
        </svg>
      </div>
      <span className="mt-1 text-[7px] sm:text-[7.5px] font-mono tracking-[0.25em] text-slate-200/90 uppercase font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
        CLIENT READY
      </span>
    </div>
  );
};

export const Book3D: React.FC<Book3DProps> = ({ 
  onOpenPreview, 
  edition: controlledEdition,
  onEditionChange,
  compact = false 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAutoOpenedRef = useRef<boolean>(false);

  // Mobile viewport detection for responsive scaling & zero horizontal clipping
  const [viewportWidth, setViewportWidth] = useState<number>(() => 
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = viewportWidth < 640;
  
  // Calculate dynamic scale factor to fit ENTIRELY inside the mobile screen with ZERO clipping
  const responsiveScale = viewportWidth < 380 
    ? 0.76 
    : viewportWidth < 460 
    ? 0.85 
    : viewportWidth < 640 
    ? 0.92 
    : 1.0;

  // Selected edition state
  const [selectedEdition, setSelectedEdition] = useState<BookEdition>(controlledEdition || 'complete');
  
  // Interactive 3D and animation state
  // Starts closed so the scroll-triggered interaction can smoothly lift it open with cinematic easing
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCoverOpening, setIsCoverOpening] = useState<boolean>(false);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [cameraZoom, setCameraZoom] = useState<number>(() => (isMobile ? 0.95 : 1.06));
  const [cameraPanX, setCameraPanX] = useState<number>(0);
  const [cameraPanY, setCameraPanY] = useState<number>(() => (isMobile ? -2 : -6));
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [isSpinningToCenter, setIsSpinningToCenter] = useState<boolean>(false);
  const [isPixelTurning, setIsPixelTurning] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');
  
  const dragStartXRef = useRef<number>(0);
  const dragStartAngleRef = useRef<number>(0);

  // Sync external controlled prop
  useEffect(() => {
    if (controlledEdition && controlledEdition !== selectedEdition) {
      setSelectedEdition(controlledEdition);
    }
  }, [controlledEdition]);

  // Adjust camera zoom on open/close and viewport change
  useEffect(() => {
    if (isOpen) {
      setCameraZoom(isMobile ? 0.95 : 1.06);
      setCameraPanY(isMobile ? -4 : -8);
    } else {
      setCameraZoom(isMobile ? 0.98 : 1.05);
      setCameraPanY(0);
    }
  }, [isMobile, isOpen]);

  // Open book transition with smooth, cinematic physical cover lift and soft realistic easing
  const handleOpenBook = () => {
    setIsOpen(true);
    setIsCoverOpening(true);
    setRotationAngle(0);
    setCameraPanX(0);
    setCameraPanY(isMobile ? -4 : -8);
    setCameraZoom(isMobile ? 0.95 : 1.06);

    setTimeout(() => {
      setIsCoverOpening(false);
    }, 1350);
  };

  // Close book transition with clean, continuous 360° rotation back to the pedestal
  const handleCloseBook = () => {
    if (!isOpen) return;

    setIsOpen(false);
    setIsCoverOpening(false);
    setCameraPanX(0);
    setCameraPanY(0);
    setCameraZoom(isMobile ? 0.98 : 1.05);

    // Continuous 360° rotation back to the pedestal, maintaining perfect symmetry
    setIsSpinningToCenter(true);
    setRotationAngle(prev => {
      const base = Math.round(prev / 360) * 360;
      return base + 360;
    });

    setTimeout(() => {
      setIsSpinningToCenter(false);
      setRotationAngle(0);
    }, 1100);
  };

  // =================================================================
  // SCROLL-TRIGGERED INTERACTION:
  // When scrolled into view, automatically lift open with smooth cinematic transition
  // =================================================================
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoOpenedRef.current) {
            hasAutoOpenedRef.current = true;
            // Delay slightly (350ms) so user can glimpse the pristine closed hardcover first
            const timer = setTimeout(() => {
              handleOpenBook();
            }, 350);
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  // Handle edition switch with graceful physical page-turn transition
  const handleSelectEdition = (editionId: BookEdition) => {
    if (selectedEdition === editionId) {
      if (!isOpen) {
        handleOpenBook();
      }
      return;
    }

    setSelectedEdition(editionId);
    if (onEditionChange) onEditionChange(editionId);

    if (isOpen) {
      // 800ms graceful physical pixel-turn page curl to the new edition
      setIsPixelTurning(true);
      setTimeout(() => {
        setIsPixelTurning(false);
      }, 800);
    } else {
      handleOpenBook();
    }
  };

  // Previous and Next edition navigation helpers
  const currentIdx = EDITION_ORDER.indexOf(selectedEdition);
  const prevEdition = EDITION_ORDER[(currentIdx - 1 + EDITION_ORDER.length) % EDITION_ORDER.length];
  const nextEdition = EDITION_ORDER[(currentIdx + 1) % EDITION_ORDER.length];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleSelectEdition(prevEdition);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleSelectEdition(nextEdition);
  };

  // Continuous turntable rotation toggle
  useEffect(() => {
    if (!isRotating) return;
    let animFrame: number;
    const rotateLoop = () => {
      setRotationAngle(prev => (prev + 0.35) % 360);
      animFrame = requestAnimationFrame(rotateLoop);
    };
    animFrame = requestAnimationFrame(rotateLoop);
    return () => cancelAnimationFrame(animFrame);
  }, [isRotating]);

  // Drag interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartAngleRef.current = rotationAngle;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartXRef.current;
    setRotationAngle((dragStartAngleRef.current + deltaX * 0.7) % 360);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch support for smooth mobile inspection
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStartXRef.current = e.touches[0].clientX;
      dragStartAngleRef.current = rotationAngle;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - dragStartXRef.current;
    setRotationAngle((dragStartAngleRef.current + deltaX * 0.7) % 360);
  };

  const activeConfig = EDITIONS[selectedEdition];

  // Responsive dimensions strictly calculated to fit mobile screens entirely without clipping
  const bookW = isMobile ? 172 : (compact ? 204 : 234);
  const bookH = isMobile ? 256 : (compact ? 304 : 352);
  const spineW = isMobile ? 18 : 22;
  const pedestalDiameter = isMobile ? 280 : (compact ? 335 : 380);

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col items-center w-full max-w-[660px] select-none py-1 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* ============================================================= */}
      {/* SOFT CINEMATIC STUDIO LIGHTING BACKDROP                       */}
      {/* ============================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {/* Overhead soft key spotlight */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[480px] h-[360px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.24)_0%,_rgba(241,245,249,0.08)_40%,_transparent_75%)] blur-2xl" />
        
        {/* Studio platinum specular rim light */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-slate-100/15 blur-3xl rounded-full" />
        
        {/* Dynamic color bounce matching active edition cover */}
        <div 
          className={`absolute bottom-1/4 left-0 w-72 h-72 rounded-full blur-3xl transition-colors duration-700 opacity-20 ${
            selectedEdition === 'starter' 
              ? 'bg-emerald-500' 
              : selectedEdition === 'premium' 
              ? 'bg-rose-500' 
              : 'bg-blue-500'
          }`}
        />

        {/* Ambient pedestal floor occlusion */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[390px] h-24 bg-radial from-black/60 via-black/25 to-transparent blur-xl pointer-events-none" />
      </div>

      {/* ============================================================= */}
      {/* INTERACTIVE EDITION SELECTOR TABS                             */}
      {/* ============================================================= */}
      <div className="relative z-20 mb-2 sm:mb-3 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap px-1 max-w-full">
        {EDITION_ORDER.map((editionKey) => {
          const cfg = EDITIONS[editionKey];
          const isSelected = selectedEdition === editionKey;
          return (
            <button
              key={editionKey}
              onClick={() => handleSelectEdition(editionKey)}
              className={`group relative px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-serif font-bold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-2xs ${
                isSelected
                  ? 'bg-stone-900 text-white ring-2 ring-slate-200 shadow-md scale-102'
                  : 'bg-white/90 hover:bg-white text-stone-700 hover:text-stone-950 border border-stone-200/80 hover:border-stone-300'
              }`}
            >
              {/* Color swatch indicator */}
              <span 
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-white/60 shadow-2xs shrink-0 ${
                  editionKey === 'starter' 
                    ? 'bg-[#072B23]' 
                    : editionKey === 'premium' 
                    ? 'bg-[#380C16]' 
                    : 'bg-[#0A1C30]'
                }`} 
              />
              <div className="flex flex-col text-left leading-none">
                <span className="text-[10px] sm:text-xs tracking-tight font-serif font-bold">
                  {cfg.name}
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono text-stone-400 font-normal mt-0.5">
                  {cfg.badge} · {cfg.price}
                </span>
              </div>
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-slate-100 shadow-[0_0_8px_#FFFFFF] shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* ============================================================= */}
      {/* 3D WORLD VIEWPORT & CAMERA RIG                                */}
      {/* Mobile-optimized with dynamic responsive scale                */}
      {/* ============================================================= */}
      <div 
        className={`relative w-full ${
          isMobile ? 'h-[340px]' : (compact ? 'h-[380px]' : 'h-[430px] sm:h-[470px]')
        } flex items-center justify-center perspective-1200 cursor-grab active:cursor-grabbing overflow-hidden`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* =========================================================== */}
        {/* SIDE NAVIGATION: PREVIOUS ICON BUTTON (LEFT)               */}
        {/* Enables interactive edition switching                      */}
        {/* =========================================================== */}
        <button
          onClick={handlePrev}
          aria-label={`Switch to previous edition: ${EDITIONS[prevEdition].name}`}
          className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-2.5 rounded-full bg-stone-900/85 hover:bg-stone-950 text-white border border-white/25 hover:border-white/60 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 group cursor-pointer"
          title={`Previous: ${EDITIONS[prevEdition].name}`}
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 text-slate-100 group-hover:text-white transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          {/* Subtle micro label badge on desktop */}
          <span className="sr-only sm:not-sr-only absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-black/80 text-[9px] font-mono text-slate-200 uppercase tracking-wider opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10 shadow-md">
            {EDITIONS[prevEdition].name}
          </span>
        </button>

        {/* =========================================================== */}
        {/* SIDE NAVIGATION: NEXT ICON BUTTON (RIGHT)                  */}
        {/* Enables interactive edition switching                      */}
        {/* =========================================================== */}
        <button
          onClick={handleNext}
          aria-label={`Switch to next edition: ${EDITIONS[nextEdition].name}`}
          className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-2.5 rounded-full bg-stone-900/85 hover:bg-stone-950 text-white border border-white/25 hover:border-white/60 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 group cursor-pointer"
          title={`Next: ${EDITIONS[nextEdition].name}`}
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 text-slate-100 group-hover:text-white transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
          {/* Subtle micro label badge on desktop */}
          <span className="sr-only sm:not-sr-only absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-black/80 text-[9px] font-mono text-slate-200 uppercase tracking-wider opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10 shadow-md">
            {EDITIONS[nextEdition].name}
          </span>
        </button>

        {/* Dynamic Scale Wrapper for Zero-Clipping on Mobile Screens */}
        <div 
          className="flex items-center justify-center w-full h-full transform-style-3d origin-center transition-transform duration-300"
          style={{
            transform: `scale(${responsiveScale})`,
          }}
        >
          {/* Camera Pan, Tilt & Zoom Node with Cinematic Smooth Transitions */}
          <div 
            className="relative cinematic-camera-rig transform-style-3d flex items-center justify-center w-full h-full"
            style={{
              transform: `translate(${cameraPanX}px, ${cameraPanY}px) scale(${cameraZoom})`,
            }}
          >

            {/* ========================================================= */}
            {/* THE SYNCHRONIZED TURNTABLE PEDESTAL ASSEMBLY              */}
            {/* SINGLE PREMIUM HARDCOVER BOOK CENTERED ON PEDESTAL        */}
            {/* ========================================================= */}
            <div 
              className="relative transform-style-3d flex items-center justify-center"
              style={{
                transform: `rotateY(${rotationAngle}deg)`,
                transition: isDragging 
                  ? 'none' 
                  : isSpinningToCenter 
                  ? 'transform 850ms cubic-bezier(0.33, 1, 0.68, 1)' 
                  : 'transform 450ms ease-out',
              }}
            >

              {/* ------------------------------------------------------- */}
              {/* THE PEDESTAL TURNTABLE DISC                             */}
              {/* ------------------------------------------------------- */}
              <div 
                className="absolute pointer-events-none transform-style-3d flex flex-col items-center justify-center"
                style={{
                  transform: `translateY(${bookH / 2 + 10}px) rotateX(90deg)`,
                }}
              >
                {/* Floor Ambient Occlusion Shadow */}
                <div 
                  className="absolute rounded-full bg-black/65 blur-2xl transform translate-z-[-18px]" 
                  style={{ width: `${pedestalDiameter + 30}px`, height: `${pedestalDiameter + 30}px` }}
                />

                {/* Pedestal Rim Cylinder Base */}
                <div 
                  className="absolute rounded-full studio-pedestal-rim shadow-2xl transform translate-z-[-6px]"
                  style={{ width: `${pedestalDiameter - 10}px`, height: `${pedestalDiameter - 10}px` }}
                />

                {/* Pedestal Turntable Surface Disc */}
                <div 
                  className="relative rounded-full studio-pedestal-surface border-4 border-slate-300/60 shadow-[0_0_35px_rgba(226,232,240,0.25)] flex items-center justify-center"
                  style={{ width: `${pedestalDiameter}px`, height: `${pedestalDiameter}px` }}
                >
                  {/* Concentric brushed platinum groove */}
                  <div className="w-[84%] h-[84%] rounded-full border border-slate-200/40 shadow-inner flex items-center justify-center">
                    <div className="w-[68%] h-[68%] rounded-full bg-gradient-to-tr from-[#121B22] via-[#1A2630] to-[#253544] border border-slate-300/25 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-slate-200/45 flex flex-col items-center justify-center">
                        <span className="text-[7.5px] font-mono tracking-widest text-slate-200 uppercase font-bold">CLIENT READY</span>
                        <span className="text-[6.5px] font-mono tracking-wider text-slate-400">PEDESTAL 2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Shadow from book onto turntable disc */}
                  <div 
                    className="absolute bg-black/80 blur-md rounded-full pointer-events-none"
                    style={{
                      width: isOpen ? `${bookW * 1.95}px` : `${bookW * 1.15}px`,
                      height: isMobile ? '30px' : '40px',
                      transform: 'translateY(-2px)',
                      transition: 'width 1350ms cubic-bezier(0.2, 0.9, 0.25, 1), height 1350ms cubic-bezier(0.2, 0.9, 0.25, 1)',
                    }}
                  />

                  {/* Pedestal Mounting Plate */}
                  <div className="absolute w-20 h-2 rounded-full bg-slate-300/80 shadow-xs transform -translate-y-2 pointer-events-none" />
                </div>
              </div>

              {/* ======================================================= */}
              {/* SINGLE PREMIUM HARDCOVER BOOK - CENTERED ON PEDESTAL    */}
              {/* COVER HALVES PERFECTLY ALIGNED WITH THE CENTRAL SPINE   */}
              {/* ======================================================= */}
              <div 
                className="relative transform-style-3d flex items-center justify-center cinematic-book-spread z-30"
                style={{
                  width: `${isOpen ? bookW * 2 : bookW}px`,
                  height: `${bookH}px`,
                  transform: 'rotateX(4deg) translateZ(8px)',
                }}
              >

                {/* ----------------------------------------------------- */}
                {/* THE SPINE - EXACTLY AT X: 0 IN BOTH STATES            */}
                {/* ----------------------------------------------------- */}
                <div 
                  className={`absolute top-0 bottom-0 ${activeConfig.clothClass} border-x border-black/30 shadow-lg cinematic-spine flex flex-col justify-between py-4 items-center z-25`}
                  style={{
                    width: `${spineW}px`,
                    left: isOpen ? `calc(50% - ${spineW / 2}px)` : `-${spineW / 2}px`,
                    transform: isOpen ? 'translateZ(-1px)' : 'rotateY(-90deg) translateX(-10px)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Platinum Spine Ribs & Embossed Title */}
                  <div className="w-3 h-[1.5px] bg-slate-100 shadow-[0_0_4px_#FFF]" />
                  <div className="rotate-90 whitespace-nowrap text-[8px] font-serif font-black platinum-foil-subtext tracking-widest uppercase">
                    CLIENT READY · {activeConfig.tag}
                  </div>
                  <div className="w-3 h-[1.5px] bg-slate-100 shadow-[0_0_4px_#FFF]" />
                </div>

                {/* ----------------------------------------------------- */}
                {/* RIGHT COVER HALF (Back Cover Base in Open State)      */}
                {/* Aligned flush from spine center to +bookW             */}
                {/* ----------------------------------------------------- */}
                <div 
                  className={`absolute top-0 bottom-0 rounded-r-md ${activeConfig.clothClass} border-r border-t border-b border-black/40 shadow-2xl cinematic-cover-right`}
                  style={{
                    width: `${bookW}px`,
                    left: isOpen ? '50%' : '0',
                    transform: 'translateZ(-6px)',
                  }}
                >
                  {/* Rear seal visible when rotated around */}
                  <div 
                    className="absolute inset-0 p-4 flex flex-col justify-between items-center text-center backface-hidden"
                    style={{
                      transform: 'rotateY(180deg)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="mt-4">
                      <Elegant2DLogo size="md" />
                    </div>
                    <div className="my-auto space-y-1">
                      <div className="text-[10px] font-serif platinum-foil-title uppercase font-black">
                        {activeConfig.name}
                      </div>
                      <p className="text-[8px] font-serif text-slate-200/90 italic">
                        {activeConfig.systemDescriptor}
                      </p>
                      <div className="text-[7px] font-mono text-slate-300">2026 OFFICIAL RELEASE</div>
                    </div>
                    <div className="text-[6.5px] font-mono text-slate-400 pb-2">
                      AUTHORIZED AUTHOR EDITION · ALL RIGHTS RESERVED
                    </div>
                  </div>

                  {/* Gilded paper block edge (visible when closed) */}
                  {!isOpen && (
                    <div 
                      className="absolute right-0 top-1 bottom-1 w-5 rounded-r-xs page-edge border-y border-r border-[#D9D2C2] shadow-md z-0 backface-hidden"
                      style={{
                        transform: 'translateX(8px) translateZ(-2px)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    />
                  )}
                </div>

                {/* ----------------------------------------------------- */}
                {/* LEFT COVER HALF (Front Hardcover Hinge Assembly)      */}
                {/* Minimalist Professional Design with Cinematic Lift    */}
                {/* ----------------------------------------------------- */}
                <div 
                  className={`absolute top-0 bottom-0 origin-left cinematic-cover-hinge transform-style-3d z-40 ${
                    isCoverOpening 
                      ? 'cinematic-cover-lifting-shadow' 
                      : isOpen 
                      ? 'cinematic-cover-resting-shadow' 
                      : 'cinematic-cover-closed-shadow'
                  }`}
                  style={{
                    width: `${bookW}px`,
                    left: isOpen ? '50%' : '0',
                    transform: isOpen ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                  }}
                >
                  
                  {/* FRONT FACE OF HARDCOVER (Visible when closed) */}
                  <div 
                    className={`absolute inset-0 rounded-r-md rounded-l-xs overflow-hidden ${activeConfig.clothClass} border-r border-t border-b border-black/40 shadow-2xl flex flex-col justify-between p-3.5 sm:p-5 backface-hidden`}
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    {/* 3D Spine Fold Shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 binder-spine pointer-events-none z-10" />

                    {/* Platinum Foil Double Embossed Border Frames */}
                    <div className="absolute inset-2.5 sm:inset-3 border border-slate-200/70 pointer-events-none rounded-[2px] shadow-[inset_0_0_10px_rgba(255,255,255,0.25)]" />
                    <div className="absolute inset-[11px] sm:inset-[14px] border border-slate-300/35 pointer-events-none" />

                    {/* Corner platinum accents */}
                    <div className="absolute top-3 left-3 text-slate-100 text-[8px] pointer-events-none">✦</div>
                    <div className="absolute top-3 right-3 text-slate-100 text-[8px] pointer-events-none">✦</div>
                    <div className="absolute bottom-3 left-3 text-slate-100 text-[8px] pointer-events-none">✦</div>
                    <div className="absolute bottom-3 right-3 text-slate-100 text-[8px] pointer-events-none">✦</div>

                    {/* Studio light sheen sweep */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/18 to-transparent animate-sheen-sweep" />
                    </div>

                    {/* Cinematic Studio Sheen Glint when Cover Lifts */}
                    {isCoverOpening && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
                        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-cinematic-foil-glint" />
                      </div>
                    )}

                    {/* TOP: ELEGANT 2D LOGO & EDITION TAG */}
                    <div className="relative z-10 text-center pt-0.5">
                      <Elegant2DLogo size="md" />
                      <div className="mt-1.5">
                        <span className="text-[8px] sm:text-[9.5px] font-mono font-bold tracking-[0.28em] platinum-foil-subtext uppercase">
                          {activeConfig.tag}
                        </span>
                        <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent via-slate-100 to-transparent mx-auto mt-1" />
                      </div>
                    </div>

                    {/* CENTER: MINIMALIST PROFESSIONAL TYPOGRAPHY WITH PLATINUM EMBOSSING */}
                    {/* 'Client Ready' */}
                    {/* 'The Complete Freemium Operating System' */}
                    {/* 'by Himanshu Manjhi' */}
                    <div className="relative z-10 text-center my-auto px-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight leading-none mb-1.5 platinum-foil-title">
                        Client Ready
                      </h2>

                      <p className="text-[9.5px] sm:text-[11px] font-serif italic platinum-foil-subtext tracking-wide mb-1 leading-snug">
                        {activeConfig.systemDescriptor}
                      </p>

                      <p className="text-[7.5px] sm:text-[8.5px] font-sans text-stone-200/80 mb-1.5">
                        {activeConfig.editionSub}
                      </p>

                      <div className="w-12 h-[1px] bg-slate-300/40 mx-auto my-1.5" />

                      <p className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-slate-200/90 uppercase font-semibold">
                        {activeConfig.authorLine}
                      </p>
                    </div>

                    {/* Hanging Silk Bookmark Ribbon */}
                    <div className={`absolute top-0 right-6 sm:right-8 w-3 sm:w-3.5 h-12 sm:h-16 bg-gradient-to-b ${activeConfig.ribbonColor} shadow-md transform -skew-y-3 z-20`}>
                      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-black/40" />
                    </div>

                    {/* BOTTOM: MINIMALIST FOLIO & PRICE */}
                    <div className="relative z-10 flex items-center justify-between text-[7.5px] sm:text-[8.5px] tracking-wider text-slate-200/90 border-t border-white/20 pt-1.5">
                      <span className="font-mono">{activeConfig.colorName}</span>
                      <span className="platinum-foil-subtext font-mono font-bold">{activeConfig.price}</span>
                    </div>
                  </div>

                  {/* INTERIOR LINING FACE OF LEFT COVER HALF (Visible when opened) */}
                  <div 
                    className={`absolute inset-0 rounded-l-md rounded-r-xs overflow-hidden ${activeConfig.clothClass} border-l border-t border-b border-black/40 p-4 sm:p-5 flex flex-col justify-between items-center text-center backface-hidden`}
                    style={{
                      transform: 'rotateY(180deg)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="mt-3">
                      <Elegant2DLogo size="md" />
                    </div>
                    <div className="text-stone-300 space-y-1 my-auto">
                      <p className="font-serif font-black text-xs sm:text-sm platinum-foil-title uppercase">{activeConfig.tag}</p>
                      <p className="text-[7.5px] sm:text-[8.5px] text-stone-300 font-mono tracking-wider">OFFICIAL SYSTEM WORKBOOK</p>
                      <p className="text-[7px] text-stone-400 font-sans">{activeConfig.editionSub}</p>
                    </div>
                    <div className="text-[7px] sm:text-[8px] font-mono text-slate-300/80 mb-1 border-t border-white/10 pt-1 w-full text-center">
                      HM ATELIER · ARCHIVAL EDITION 2026
                    </div>
                  </div>

                </div>

                {/* ===================================================== */}
                {/* OPEN WORKBOOK TWO-PAGE SPREAD                         */}
                {/* 2D & 3D Graphic Representations of Problem-Solving    */}
                {/* Gracefully Revealed as Cover Lifts with Soft Easing   */}
                {/* ===================================================== */}
                <div 
                  className={`absolute inset-0 rounded-md shadow-2xl z-30 flex overflow-hidden border border-stone-300 bg-[#FAF8F5] transition-all ${
                    isOpen 
                      ? 'opacity-100 pointer-events-auto scale-100' 
                      : 'opacity-0 pointer-events-none scale-[0.98]'
                  }`}
                  style={{
                    transform: 'translateZ(1px)',
                    transition: 'opacity 900ms cubic-bezier(0.2, 0.9, 0.25, 1) 180ms, transform 1350ms cubic-bezier(0.2, 0.9, 0.25, 1)',
                  }}
                >
                  {/* Dynamic Ambient Lifting Cast-Shadow over Inner Pages as Cover Opens */}
                  <div 
                    className={`absolute inset-0 pointer-events-none z-45 transition-opacity duration-1000 ${
                      isCoverOpening ? 'opacity-40' : 'opacity-0'
                    }`}
                    style={{
                      background: 'radial-gradient(ellipse at 35% 50%, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.12) 60%, transparent 85%)',
                    }}
                  />

                  {/* Spine Center Gutter Line & Shadow */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6 sm:w-8 bg-gradient-to-r from-stone-400/20 via-stone-500/35 to-stone-400/20 z-40 pointer-events-none shadow-sm" />

                  {/* LEFT PAGE: Crisp, Readable Problem-Solving Overview */}
                  <div className="w-1/2 h-full workbook-paper-left p-2 sm:p-3.5 flex flex-col justify-between border-r border-stone-300/80 relative text-left">
                      
                      {/* Page Header */}
                      <div className="flex items-center justify-between pb-1 border-b border-stone-300/80 text-[6.5px] sm:text-[8px] font-mono text-stone-500">
                        <span>{activeConfig.leftPageHeading}</span>
                        <span className="font-bold text-stone-800">PAGE 01</span>
                      </div>

                      {/* Problem vs Solution Context */}
                      <div className="space-y-1 sm:space-y-1.5 my-auto">
                        <div className="p-1 sm:p-1.5 rounded bg-stone-100/90 border border-stone-200">
                          <span className="text-[6px] sm:text-[7px] font-mono font-bold text-red-700 uppercase tracking-wider block">
                            ⚠ {activeConfig.problemTitle}
                          </span>
                          <p className="text-[6.5px] sm:text-[8px] text-stone-700 leading-tight mt-0.5 font-sans">
                            {activeConfig.problemDesc}
                          </p>
                        </div>

                        <div className="p-1 sm:p-1.5 rounded bg-emerald-50/90 border border-emerald-200">
                          <span className="text-[6px] sm:text-[7px] font-mono font-bold text-emerald-800 uppercase tracking-wider block">
                            ✓ {activeConfig.solutionTitle}
                          </span>
                          <p className="text-[6.5px] sm:text-[8px] text-stone-800 leading-tight mt-0.5 font-sans font-medium">
                            {activeConfig.solutionDesc}
                          </p>
                        </div>

                        {/* Deliverables Checklist */}
                        <div>
                          <span className="text-[6.5px] sm:text-[7.5px] font-serif font-bold text-stone-900 block mb-0.5">
                            Core Deliverables Included:
                          </span>
                          <ul className="space-y-0.5 text-[6px] sm:text-[7.5px] text-stone-700 font-sans">
                            {activeConfig.contents.slice(0, 4).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1 leading-tight">
                                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                                <span className="line-clamp-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Page Footer */}
                      <div className="flex items-center justify-between pt-1 border-t border-stone-300/80 text-[6.5px] sm:text-[7.5px] font-mono text-stone-500">
                        <span>{activeConfig.price} · ONE-TIME</span>
                        <span className="font-semibold text-stone-800">{activeConfig.authorLine}</span>
                      </div>

                    </div>

                    {/* RIGHT PAGE: 2D & 3D Graphic Representations of Problem-Solving */}
                    <div className="w-1/2 h-full workbook-paper-right p-2 sm:p-3.5 flex flex-col justify-between relative text-left">
                      
                      {/* Page Header with 2D / 3D Graphic Switcher */}
                      <div className="flex items-center justify-between pb-1 border-b border-stone-300/80">
                        <div className="flex items-center gap-1">
                          <span className="text-[6.5px] sm:text-[8px] font-mono text-stone-500">PROBLEM SOLVING</span>
                          <span className="text-[6px] sm:text-[7px] font-mono font-bold px-1 py-0.2 rounded bg-stone-200 text-stone-800">
                            PAGE 02
                          </span>
                        </div>

                        {/* Interactive 2D vs 3D Graphic Toggle */}
                        <div className="flex items-center gap-0.5 bg-stone-200/80 p-0.5 rounded text-[6px] sm:text-[7px] font-mono font-bold">
                          <button
                            onClick={() => setViewMode('2d')}
                            className={`px-1 sm:px-1.5 py-0.5 rounded transition-all ${
                              viewMode === '2d' 
                                ? 'bg-white text-stone-900 shadow-2xs' 
                                : 'text-stone-600 hover:text-stone-900'
                            }`}
                          >
                            2D Flow
                          </button>
                          <button
                            onClick={() => setViewMode('3d')}
                            className={`px-1 sm:px-1.5 py-0.5 rounded transition-all ${
                              viewMode === '3d' 
                                ? 'bg-stone-900 text-white shadow-2xs' 
                                : 'text-stone-600 hover:text-stone-900'
                            }`}
                          >
                            3D Model
                          </button>
                        </div>
                      </div>

                      {/* Graphic Problem-Solving Canvas (2D Flowchart vs 3D Isometric Engine) */}
                      <div className="my-auto">
                        {viewMode === '2d' ? (
                          /* ================================================= */
                          /* 2D GRAPHIC REPRESENTATION OF PROBLEM-SOLVING      */
                          /* Flowchart with Step Sequences & Verified Metric   */
                          /* ================================================= */
                          <div className="p-1 sm:p-1.5 bg-white/95 rounded border border-stone-200/90 shadow-2xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[6.5px] sm:text-[7.5px] font-mono font-bold text-stone-800 uppercase tracking-wider">
                                {activeConfig.diagramTitle}
                              </span>
                              <span className="text-[5.5px] sm:text-[6.5px] font-mono px-1 py-0.2 rounded bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
                                {activeConfig.diagramBadge}
                              </span>
                            </div>

                            {/* 4-Step Linear Flow Diagram */}
                            <div className="space-y-1">
                              {activeConfig.diagramSteps.map((step) => (
                                <div key={step.num} className="flex items-center gap-1.5 text-left">
                                  <div className="w-3.5 h-3.5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[6px] font-bold font-mono shrink-0 shadow-2xs">
                                    {step.num}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-[6.5px] sm:text-[7px] font-serif font-bold text-stone-900 leading-none truncate">
                                      {step.title}
                                    </div>
                                    <div className="text-[5.5px] sm:text-[6.5px] text-stone-500 font-sans leading-none mt-0.5 truncate">
                                      {step.desc}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Quantitative Conversion Benchmark */}
                            <div className="pt-1 border-t border-stone-100 flex items-center justify-between text-[6px] sm:text-[7px] font-mono">
                              <span className="text-stone-500">{activeConfig.diagramMetrics.label}:</span>
                              <span className="font-bold text-emerald-700">{activeConfig.diagramMetrics.value}</span>
                            </div>
                          </div>
                        ) : (
                          /* ================================================= */
                          /* 3D GRAPHIC REPRESENTATION OF PROBLEM-SOLVING      */
                          /* Layered Isometric Planes with 3D Depth & Lighting */
                          /* ================================================= */
                          <div className="p-1 sm:p-1.5 bg-gradient-to-b from-stone-900 to-stone-950 text-white rounded border border-stone-800 shadow-2xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[6.5px] sm:text-[7.5px] font-mono font-bold text-slate-200 uppercase tracking-wider">
                                {activeConfig.isometricTitle}
                              </span>
                              <span className="text-[5.5px] sm:text-[6.5px] font-mono px-1 py-0.2 rounded bg-white/10 text-emerald-300 font-semibold border border-white/20">
                                ISOMETRIC 3D
                              </span>
                            </div>

                            {/* 3D Isometric Visualization Rig */}
                            <div className="isometric-view-container h-24 sm:h-28 flex items-center justify-center relative overflow-hidden rounded bg-black/40 border border-white/10">
                              {/* Ambient 3D Grid Floor */}
                              <div 
                                className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:12px_12px]" 
                              />

                              {/* Stacked 3D Isometric Tiers */}
                              <div className="isometric-rig flex flex-col items-center justify-center gap-2 transform">
                                {activeConfig.isometricTiers.map((tier, idx) => (
                                  <div 
                                    key={idx}
                                    className={`isometric-plane w-32 sm:w-36 px-2 py-1 rounded bg-gradient-to-r ${tier.color} border ${
                                      tier.highlight ? 'border-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.4)]' : 'border-white/30'
                                    } flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:scale-105`}
                                    style={{
                                      transform: `translateZ(${idx * 16}px)`,
                                    }}
                                  >
                                    <span className="text-[6.5px] sm:text-[7.5px] font-bold text-white leading-none whitespace-nowrap">
                                      {tier.label}
                                    </span>
                                    <span className="text-[5.5px] sm:text-[6.5px] font-mono text-slate-200/90 mt-0.5 leading-none whitespace-nowrap">
                                      {tier.sub}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="text-[6px] sm:text-[7px] text-center font-mono text-slate-300">
                              ✦ Layered Architectural Model · High-Yield Problem Resolution
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Page Footer */}
                      <div className="flex items-center justify-between pt-1 border-t border-stone-300/80 text-[6.5px] sm:text-[7.5px] font-mono">
                        <span className="text-stone-400">HM DIGITAL STUDIO</span>
                        <span className="text-stone-600 font-semibold">VERIFIED ARCHITECTURE</span>
                      </div>

                    </div>
                  </div>

                {/* ===================================================== */}
                {/* PHYSICAL PAGE-TURN EFFECT FOR EDITION SWITCHES        */}
                {/* ===================================================== */}
                {isPixelTurning && (
                  <div 
                    className="absolute top-0 bottom-0 origin-left transition-page-turn z-35 pointer-events-none"
                    style={{
                      width: `${bookW}px`,
                      left: '50%',
                      transform: isPixelTurning ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    <div className="w-full h-full workbook-paper-left rounded-r-md border border-stone-300 shadow-xl opacity-90 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-stone-400/30 via-transparent to-stone-400/20" />
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* INTERACTIVE CONTROLS BAR UNDER PEDESTAL                       */}
      {/* ============================================================= */}
      <div className="relative z-20 mt-2 sm:mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-lg px-2">
        {/* Toggle Flip Open / Close Book (Smooth Cinematic Opening / Symmetrical Spin Close) */}
        <button
          onClick={isOpen ? handleCloseBook : handleOpenBook}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-2xs ${
            isOpen
              ? 'bg-stone-800 text-white ring-1 ring-slate-400'
              : 'bg-white/95 hover:bg-white text-stone-800 border border-stone-200 hover:border-stone-300'
          }`}
        >
          <span>📖</span>
          <span>{isOpen ? 'Close Cover' : 'Open Book (Cinematic)'}</span>
        </button>

        {/* Rotate 360° on Pedestal */}
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-2xs ${
            isRotating
              ? 'bg-stone-900 text-white ring-1 ring-slate-400'
              : 'bg-white/95 hover:bg-white text-stone-800 border border-stone-200'
          }`}
        >
          <span>🔄</span>
          <span>{isRotating ? 'Stop Spin' : 'Rotate Pedestal'}</span>
        </button>

        {/* Open Full Reader Modal */}
        {onOpenPreview && (
          <button
            onClick={onOpenPreview}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 hover:border-stone-400 transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <svg className="w-3.5 h-3.5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>Read All Chapters</span>
          </button>
        )}
      </div>

      {/* Tactile Drag Hint & Navigation Guide */}
      <div className="mt-1.5 text-[9px] sm:text-[10px] text-stone-500 font-mono flex items-center gap-1 text-center">
        <span>↔ Use side ‹ › arrows to switch editions · Drag horizontally to rotate 360° on pedestal</span>
      </div>
    </div>
  );
};
