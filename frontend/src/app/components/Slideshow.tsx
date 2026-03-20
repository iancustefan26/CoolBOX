import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Slide1Hero } from './slides/Slide1Hero';
import { Slide2Problem } from './slides/Slide2Problem';
import { Slide3Reclaim } from './slides/Slide3Reclaim';
import { Slide4Solution } from './slides/Slide4Solution';
import { Slide5AI } from './slides/Slide5AI';
import { Slide6Business } from './slides/Slide6Business';
import { Slide7Partners } from './slides/Slide7Partners';
import { Slide8CTA } from './slides/Slide8CTA';

const slides = [
  { Component: Slide1Hero, label: 'CoolBOX', color: '#00d084' },
  { Component: Slide2Problem, label: 'Problem', color: '#ef4444' },
  { Component: Slide3Reclaim, label: '140 Hours', color: '#10b981' },
  { Component: Slide4Solution, label: 'Solution', color: '#059669' },
  { Component: Slide5AI, label: 'Meet Fresh', color: '#3ddc84' },
  { Component: Slide6Business, label: 'B2B & B2C', color: '#0ea5e9' },
  { Component: Slide7Partners, label: 'Partners', color: '#00d084' },
  { Component: Slide8CTA, label: 'Our Form', color: '#00d084' },
];

/**
 * Lazy-mounts the slide component only when the section scrolls near the viewport.
 * This preserves framer-motion initial→animate transitions inside each slide.
 */
function LazySlide({
  index,
  Component,
  containerRef,
}: {
  index: number;
  Component: React.ComponentType;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(index === 0);

  useEffect(() => {
    const el = ref.current;
    const root = containerRef.current;
    if (!el || !root || mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { root, rootMargin: '100% 0px 100% 0px', threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [containerRef, mounted]);

  return (
    <section
      ref={ref}
      data-index={index}
      style={{
        height: '100dvh',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      }}
    >
      {mounted ? <Component /> : null}
    </section>
  );
}

export default function Slideshow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // Track the currently visible slide via IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            if (!Number.isNaN(idx)) setCurrent(idx);
          }
        }
      },
      { root: container, threshold: 0.5 },
    );

    container.querySelectorAll('[data-index]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const target = container.querySelector(`[data-index="${index}"]`);
    target?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (current < slides.length - 1) goTo(current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (current > 0) goTo(current - 1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current, goTo]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-gray-950"
      style={{
        height: '100dvh',
        overflowY: 'auto',
        scrollSnapType: 'y mandatory',
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'none',
      }}
    >
      {slides.map(({ Component }, i) => (
        <LazySlide key={i} index={i} Component={Component} containerRef={containerRef} />
      ))}

      {/* Right-side dot indicators */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to ${slide.label}`}
            className="flex items-center justify-center w-6 h-6 group"
          >
            <motion.div
              animate={{
                width: i === current ? 6 : 4,
                height: i === current ? 20 : 4,
                borderRadius: i === current ? 3 : 100,
                backgroundColor: i === current ? slide.color : 'rgba(255,255,255,0.3)',
              }}
              transition={{ duration: 0.25 }}
              style={{ width: 4, height: 4, borderRadius: 100 }}
            />
          </button>
        ))}
      </div>

      {/* Bottom nav arrow hint */}
      {current < slides.length - 1 && (
        <button
          onClick={() => goTo(current + 1)}
          className="fixed left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-0.5 opacity-40 hover:opacity-70 transition-opacity"
          style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom, 1.25rem))' }}
          aria-label="Next slide"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>
      )}
    </div>
  );
}