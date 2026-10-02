'use client';

import { useEffect } from 'react';

const revealSelector = [
  '.hero-shell',
  '.hero-copy',
  '.hero-watch-stage',
  '.journey-section',
  '.story-copy',
  '.section-media',
  '.watch-figure',
  '.feature-labels span',
  '.water-ribbon',
  '.water-words span',
  '.statement-line',
  '.finale-link',
  '.story-section',
  '.journal-card',
  '.content-card',
].join(',');

export default function AnimationRuntime() {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    const updateProgress = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty('--scroll-progress', `${window.scrollY / max}`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.14 },
    );

    targets.forEach((target, index) => {
      target.classList.add('reveal-target');
      target.style.setProperty('--reveal-delay', `${Math.min(index * 45, 360)}ms`);
      observer.observe(target);
    });

    const readyTimer = window.setTimeout(() => {
      body.classList.add('is-ready');
      updateProgress();
    }, 240);

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    return () => {
      window.clearTimeout(readyTimer);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      observer.disconnect();
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
