'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Extra delay in ms, handy for staggering items in a grid. */
  delay?: number;
}

/**
 * Fades its content in when it scrolls into view.
 * Content is never hidden without JavaScript, and anything already on screen when the page loads stays visible,
 * so there is no flash and nothing can end up invisible.
 */
export function Reveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'idle' | 'hidden' | 'shown'>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState('hidden');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState('shown');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal={state} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
