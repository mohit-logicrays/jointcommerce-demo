'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change, handle hash links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element instanceof HTMLElement) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return <>{children}</>;
}
