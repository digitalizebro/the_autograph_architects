import { useEffect, useRef, useCallback } from 'react';

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const initObserver = useCallback(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
  }, []);

  useEffect(() => {
    initObserver();

    const elements = document.querySelectorAll(
      '.fade-up, .fade-in, .slide-left, .slide-right'
    );
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [initObserver]);
}
