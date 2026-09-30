import React, { useState, useEffect, useRef } from 'react';
import { motion, animate, AnimatePresence } from 'framer-motion';

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  loopIntervalMs?: number;
  staggerDelaySeconds?: number;
  contrastMode?: 'default' | 'gold';
  textColor?: string;
}

export const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  text,
  className = '',
  loopIntervalMs = 5000,
  staggerDelaySeconds = 0.038,
  contrastMode = 'default',
  textColor,
}) => {
  const [displayedCount, setDisplayedCount] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [cycleKey, setCycleKey] = useState<number>(0);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLHeadingElement>(null);

  const isGoldContrast = contrastMode === 'gold' || text.toLowerCase().includes('proven by freelancers');

  // Detect mobile viewport and respect reduced-motion
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport, { passive: true });
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Trigger typewriter once scrolled into viewport with mobile-tuned threshold
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayedCount(text.length);
      setHasStarted(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      // Mobile-optimized threshold for instant visibility on smaller screens
      { threshold: isMobile ? 0.05 : 0.15, rootMargin: isMobile ? '0px 0px -15px 0px' : '0px 0px -30px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted, text.length, isMobile]);

  // Framer Motion linear ease character progression
  useEffect(() => {
    if (!hasStarted || isResetting) return;

    const totalChars = text.length;
    // Slightly snappier stagger on mobile viewports for fluid scrolling
    const effectiveStagger = isMobile ? Math.min(staggerDelaySeconds, 0.032) : staggerDelaySeconds;
    const typingDuration = totalChars * effectiveStagger;

    const controls = animate(0, totalChars, {
      duration: typingDuration,
      ease: 'linear',
      onUpdate: (latest) => {
        setDisplayedCount(Math.min(totalChars, Math.floor(latest)));
      },
    });

    return () => controls.stop();
  }, [hasStarted, cycleKey, isResetting, text.length, staggerDelaySeconds, isMobile]);

  // Continuous looping interval: smoothly fades out and loops with a fresh fade-in every 5s
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setIsResetting(true);

      const resetTimer = setTimeout(() => {
        setDisplayedCount(0);
        setCycleKey((prev) => prev + 1);
        setIsResetting(false);
      }, isMobile ? 300 : 420);

      return () => clearTimeout(resetTimer);
    }, loopIntervalMs);

    return () => clearInterval(interval);
  }, [hasStarted, loopIntervalMs, isMobile]);

  const visibleText = text.slice(0, displayedCount);
  const ghostRemainingText = text.slice(displayedCount);

  // Dynamic high-contrast styling for golden-yellow shades and dark backdrops
  const hasExplicitTextColor = /\btext-(white|black|stone-|slate-|zinc-|neutral-|amber-|emerald-|sky-|blue-|red-|#)/.test(
    className
  );
  const textColorClass = hasExplicitTextColor ? '' : isGoldContrast ? 'text-white' : 'text-[#1A252F]';

  // Contrast enhancement with mobile-optimized text-shadow
  const contrastEnhancementStyle = isGoldContrast
    ? {
        textShadow: isMobile
          ? '0 1px 4px rgba(0,0,0,0.95), 0 2px 10px rgba(0,0,0,0.85), 0 0 10px rgba(212,175,55,0.35)'
          : '0 2px 8px rgba(0,0,0,0.95), 0 4px 20px rgba(0,0,0,0.85), 0 0 16px rgba(212,175,55,0.3)',
        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.9))',
      }
    : undefined;

  return (
    <h2
      ref={containerRef}
      className={`relative inline-block w-full max-w-full text-center ${className}`}
      aria-label={text}
    >
      <AnimatePresence mode="wait">
        {!isResetting && hasStarted && (
          <motion.span
            key={cycleKey}
            initial={{
              opacity: 0,
              y: isMobile ? 3 : 6,
              filter: isMobile ? 'blur(1px)' : 'blur(3px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              y: isMobile ? -2 : -4,
              filter: isMobile ? 'blur(1px)' : 'blur(2px)',
            }}
            transition={{
              duration: isMobile ? 0.45 : 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${textColorClass} [text-wrap:balance] max-w-full`}
            style={contrastEnhancementStyle}
          >
            {/* Visible typed characters */}
            <span style={textColor ? { color: textColor } : undefined}>{visibleText}</span>

            {/* Responsive subtle blinking cursor */}
            <motion.span
              aria-hidden="true"
              className="inline-block w-[2px] sm:w-[3.5px] h-[0.76em] sm:h-[0.82em] bg-gradient-to-b from-[#F5E296] via-[#D4AF37] to-[#B8860B] ml-0.5 sm:ml-1.5 align-baseline rounded-full shadow-[0_0_8px_rgba(212,175,55,0.7)] translate-y-[1px]"
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{
                duration: 0.85,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Invisible ghost text maintaining 100% natural, shift-free line wrap on mobile */}
            <span aria-hidden="true" className="invisible select-none pointer-events-none">
              {ghostRemainingText}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </h2>
  );
};
