'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './services.module.css';

const slides = [
  {
    src: '/images/sky%20finishers/hero-1.jpg',
    alt: 'Premium Sky Finishers painting and finishing project',
  },
  {
    src: '/images/sky%20finishers/hero-2.jpg',
    alt: 'Premium Sky Finishers painting and finishing project',
  },
  {
    src: '/images/sky%20finishers/hero-3.jpg',
    alt: 'Premium Sky Finishers interior decoration project',
  },
  {
    src: '/images/sky%20finishers/hero-4.jpg',
    alt: 'Premium Sky Finishers wall finishing project',
  },
  {
    src: '/images/sky%20finishers/hero-5.jpg',
    alt: 'Premium Sky Finishers professional finishing project',
  },
  {
    src: '/images/sky%20finishers/hero-6.jpg',
    alt: 'Premium Sky Finishers completed interior project',
  },
  {
    src: '/images/sky%20finishers/hero-7.jpg',
    alt: 'Premium Sky Finishers completed interior project',
  },
];

export default function HeroSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className={styles.heroSlideshow} aria-label="Sky Finishers project highlights">
      <div className={styles.heroSlides} aria-live="polite">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={styles.heroSlide}
            style={{
              opacity: index === activeSlide ? 1 : 0,
              zIndex: index === activeSlide ? 1 : 0,
              transition: prefersReducedMotion
                ? 'none'
                : undefined,
            }}
          />
        ))}
        <div className={styles.heroOverlay} aria-hidden="true" />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <span className={styles.breadcrumb}>Home / Services</span>

        <h1 className={styles.heroTitle}>Our Services</h1>

        <p className={styles.heroSubtitle}>
          Professional painting, decoration and finishing solutions for
          residential and commercial spaces.
        </p>
      </div>

      <div className={styles.heroControls}>
        <div className={styles.slideIndicators} aria-label="Choose a slide">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`${styles.slideIndicator} ${
                index === activeSlide ? styles.slideIndicatorActive : ''
              }`}
              aria-label={`Show slide ${index + 1} of ${slides.length}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <span className={styles.slideCount} aria-hidden="true">
          {activeSlide + 1} / {slides.length}
        </span>
      </div>
    </section>
  );
}
