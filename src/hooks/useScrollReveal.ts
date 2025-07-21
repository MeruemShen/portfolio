import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);
}
