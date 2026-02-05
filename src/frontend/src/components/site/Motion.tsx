import { ReactNode, useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function RevealOnScroll({ children, delay = 0, className }: RevealOnScrollProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        !prefersReducedMotion && !isVisible && 'opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
    >
      {children}
    </div>
  );
}
