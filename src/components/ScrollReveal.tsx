import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  distance?: number;
  durationMs?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  distance = 20,
  durationMs = 700,
  threshold = 0.12,
  direction = 'up',
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const checkReducedMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };

    checkViewport();
    checkReducedMotion();

    window.addEventListener('resize', checkViewport, { passive: true });
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Responsive motion calibration for mobile viewports:
  // - Shorter displacement to prevent awkward jumping or clipping on small screens
  // - Capped stagger delay so vertically stacked mobile cards appear promptly
  // - Snappier duration tuned for 60Hz/90Hz/120Hz mobile displays
  const responsiveDistance = isMobile ? Math.min(distance, 10) : distance;
  const responsiveDuration = (isMobile ? Math.min(durationMs, 450) : durationMs) / 1000;
  const responsiveDelay = (isMobile ? Math.min(delayMs, 90) : delayMs) / 1000;
  const responsiveThreshold = isMobile ? Math.min(threshold, 0.05) : threshold;
  const responsiveRootMargin = isMobile ? '0px 0px -15px 0px' : '0px 0px -35px 0px';

  // Calculate direction offsets
  const getOffset = () => {
    if (prefersReducedMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'down':
        return { x: 0, y: -responsiveDistance };
      case 'left':
        return { x: responsiveDistance, y: 0 };
      case 'right':
        return { x: -responsiveDistance, y: 0 };
      case 'up':
      default:
        return { x: 0, y: responsiveDistance };
    }
  };

  const initialOffset = getOffset();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: initialOffset.x,
      y: initialOffset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : responsiveDuration,
        delay: prefersReducedMotion ? 0 : responsiveDelay,
        ease: [0.16, 1, 0.3, 1], // Luxury deceleration curve
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: responsiveThreshold,
        margin: responsiveRootMargin,
      }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};
