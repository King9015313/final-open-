import React, { useEffect, useState } from 'react';

export const ReadingProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }

      const percent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, percent)));
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-stone-200/50 pointer-events-none backdrop-blur-[1px]"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page reading progress"
    >
      <div
        className="h-full bg-gradient-to-r from-[#0E3B33] via-[#0E3B33] to-[#B8860B] transition-[width] duration-75 ease-out shadow-[0_0_8px_rgba(184,134,11,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
