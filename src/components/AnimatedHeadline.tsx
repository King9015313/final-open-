import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface AnimatedHeadlineProps {
  className?: string;
  onAnimationComplete?: () => void;
}

export const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({
  className = '',
  onAnimationComplete,
}) => {
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [isEnergized, setIsEnergized] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport, { passive: true });
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Automatic looping animation effect that restarts every 5 seconds
  useEffect(() => {
    const LOOP_INTERVAL = 5000;

    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
      setIsEnergized(true);
      const timer = setTimeout(() => setIsEnergized(false), 1200);
      return () => clearTimeout(timer);
    }, LOOP_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, isMobile ? 800 : 1100);
    return () => clearTimeout(timer);
  }, [animationKey, onAnimationComplete, isMobile]);

  const blueWords = ['Stop', 'Chasing', 'Clients.'];
  const orangeWords = ['Start', 'Closing', 'Them.'];

  // Responsive motion variants:
  // Mobile uses smaller translation (10px vs 22px) and tighter blur/stagger for optimal GPU performance
  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 10 : 22,
      scale: isMobile ? 0.98 : 0.96,
      filter: isMobile ? 'blur(1px)' : 'blur(4px)',
    },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: isMobile ? 0.45 : 0.65,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group cursor-default select-none max-w-full overflow-hidden sm:overflow-visible ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={animationKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
          className="relative max-w-full"
        >
          {/* ============================================================= */}
          {/* AMBIENT BACKGROUND GLOW AURA                                  */}
          {/* ============================================================= */}
          <div className="absolute -inset-x-4 -inset-y-3 pointer-events-none overflow-hidden rounded-3xl opacity-35 sm:opacity-45 group-hover:opacity-75 transition-opacity duration-700">
            <div className="absolute -top-4 left-2 w-48 sm:w-60 h-20 sm:h-28 bg-blue-600/20 blur-2xl sm:blur-3xl rounded-full transform -rotate-12" />
            <div className="absolute -bottom-3 right-4 w-52 sm:w-72 h-24 sm:h-32 bg-orange-500/25 blur-2xl sm:blur-3xl rounded-full transform rotate-6 animate-pulse" />
          </div>

          {/* ============================================================= */}
          {/* KINETIC FLOATING ENERGY SPARKS (Repositioned for mobile safely) */}
          {/* ============================================================= */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden sm:overflow-visible">
            <span
              className="absolute -top-1 right-2 sm:right-24 text-orange-400 text-xs sm:text-sm font-bold animate-energy-spark-1 select-none"
              style={{ animationDelay: '0.4s' }}
            >
              ✦
            </span>
            <span
              className="absolute top-1/2 left-0 sm:-left-3 text-blue-500 text-[10px] sm:text-xs font-bold animate-energy-spark-2 select-none"
              style={{ animationDelay: '0.8s' }}
            >
              ◆
            </span>
            <span
              className="absolute -bottom-2 right-2 text-amber-400 text-xs sm:text-sm font-bold animate-energy-spark-3 select-none"
              style={{ animationDelay: '1.2s' }}
            >
              ✦
            </span>
          </div>

          {/* ============================================================= */}
          {/* TOP KICKER: HIGH-VALUE FREELANCER PARADIGM SHIFT              */}
          {/* ============================================================= */}
          <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-950/5 border border-blue-900/15 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-blue-900">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
              <span>PARADIGM SHIFT</span>
            </div>
            <span className="text-stone-400 text-xs hidden sm:inline">/</span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-orange-600 font-bold hidden sm:inline flex items-center gap-1">
              <span className="text-orange-500">⚡</span> HIGH-VALUE CLIENT ACQUISITION
            </span>
          </div>

          {/* ============================================================= */}
          {/* MAIN HEADLINE: PROFESSIONAL BLUE & VIBRANT ORANGE             */}
          {/* ============================================================= */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.14] text-left [text-wrap:balance]">
            {/* Clause 1: 'Stop Chasing Clients.' (Professional Blue) */}
            <span className="block text-[#0A2540] dark:text-[#E2E8F0] tracking-tight">
              {blueWords.map((word, index) => {
                const delay = isMobile ? 0.08 + index * 0.07 : 0.12 + index * 0.11;
                return (
                  <motion.span
                    key={`blue-${index}`}
                    custom={delay}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block mr-[0.22em] sm:mr-[0.26em]"
                  >
                    <span className="relative inline-block text-gradient-pro-blue font-bold drop-shadow-[0_2px_4px_rgba(10,37,64,0.12)] hover:text-blue-700 transition-colors">
                      {word}
                      {word.includes('.') && (
                        <span className="inline-block text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.7)]">
                          .
                        </span>
                      )}
                    </span>
                  </motion.span>
                );
              })}
            </span>

            {/* Clause 2: 'Start Closing Them.' (Vibrant High-Energy Orange) */}
            <span className="relative inline-block mt-0.5 sm:mt-1 font-serif max-w-full">
              {/* Ambient intense orange energy halo */}
              <span
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-r from-orange-500/20 via-amber-500/30 to-orange-600/20 blur-xl rounded-lg pointer-events-none transition-opacity duration-500 ${
                  isHovered || isEnergized ? 'opacity-100 scale-105' : 'opacity-60'
                }`}
              />

              <span className="relative z-10 dynamic-energy-glow flex flex-wrap items-baseline">
                {orangeWords.map((word, index) => {
                  const isClosing = word.toLowerCase().includes('closing');
                  const delay = isMobile ? 0.32 + index * 0.08 : 0.46 + index * 0.13;

                  return (
                    <motion.span
                      key={`orange-${index}`}
                      custom={delay}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block mr-[0.22em] sm:mr-[0.25em]"
                    >
                      <span
                        className={`inline-block text-gradient-vibrant-orange tracking-tight transition-transform duration-300 ${
                          isClosing ? 'italic font-black pr-1' : 'font-bold'
                        } ${isHovered ? 'hover:scale-105 hover:-translate-y-0.5' : ''}`}
                      >
                        {word}
                      </span>
                    </motion.span>
                  );
                })}
              </span>

              {/* Responsive Framer Motion Laser-Draw Underline */}
              <motion.span
                className="block h-[3px] sm:h-[4.5px] rounded-full mt-1.5 relative overflow-hidden bg-stone-200/50"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: isMobile ? 0.5 : 0.75,
                  delay: isMobile ? 0.55 : 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-[#FF6D00] to-[#FF3D00] shadow-[0_0_12px_rgba(255,109,0,0.8)]" />
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-75 animate-pulse"
                  style={{ backgroundSize: '200% 100%' }}
                />
              </motion.span>
            </span>
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
