'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Forces a scroll-to-top on every client-side route change.
 *
 * Why: Next.js App Router scrolls to top by default, but iOS Safari's
 * scroll-restoration sometimes wins the race and restores the previous
 * page's scroll position — which makes the new page appear to load with
 * its hero hidden behind the sticky navbar. We also disable the browser's
 * native scroll restoration so back/forward navigations don't recreate
 * the same issue.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash) return;
    // Run on the next two animation frames so the scroll lands AFTER the
    // new route's DOM has painted. iOS Safari otherwise ignores a scrollTo
    // that fires before layout commits, leaving the page scrolled.
    let r2 = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    const r1 = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      r2 = requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }));
    });
    return () => {
      cancelAnimationFrame(r1);
      if (r2) cancelAnimationFrame(r2);
    };
  }, [pathname]);

  return null;
}
