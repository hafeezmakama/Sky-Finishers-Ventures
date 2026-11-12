'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    // Trigger entrance animation class after mount
    const timer = setTimeout(() => {
      hero.classList.add(styles.heroReady);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Subtle geometric accent stripes — brand-connected */}
      <div className={styles.accentStripe1}></div>
      <div className={styles.accentStripe2}></div>

      <div className={`container ${styles.heroInner}`}>
        {/* ── LEFT: TEXT CONTENT ── */}
        <div className={styles.textColumn}>
          {/* Actual brand logo — not a text recreation */}
          <div className={styles.logoLockup}>
            <Image
              src="/images/logo.jpg"
              alt="Sky Finishers Ventures"
              width={140}
              height={70}
              priority
              className={styles.heroLogo}
            />
          </div>

          <span className={styles.eyebrow}>
            Interior &amp; Exterior Finishing Specialists
          </span>

          <h1 className={styles.headline}>
            Transforming<br />
            <span className={styles.headlineHighlight}>Spaces.</span><br />
            Finishing with<br />
            <span className={styles.headlineAccent}>Excellence.</span>
          </h1>

          <p className={styles.subheadline}>
            Professional interior and exterior finishing solutions
            delivered with precision, creativity, and craftsmanship
            across Nigeria.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/quote" className={styles.primaryCta}>
              Request a Quote
            </Link>
            <Link href="/projects" className={styles.secondaryCta}>
              Explore Our Work
              <span className={styles.ctaArrow}>→</span>
            </Link>
          </div>

          <div className={styles.trustStrip}>
            <div className={styles.trustItem}>
              <span className={styles.trustDot} style={{ background: 'var(--color-primary)' }}></span>
              Painting &amp; finishing services
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustDot} style={{ background: 'var(--color-secondary)' }}></span>
              Decorative and interior detailing
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustDot} style={{ background: 'var(--color-accent)' }}></span>
              Residential &amp; commercial enquiries
            </div>
          </div>
        </div>

        {/* ── RIGHT: VISUAL COMPOSITION ── */}
        <div className={styles.visualColumn}>
          {/* Floating brand accent orbs — pure CSS, zero performance cost */}
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>

          {/* Hero image with reveal animation */}
          <div className={styles.imageFrame}>
            <div className={styles.imageReveal}></div>
            <div className={styles.imageWrap}>
              <Image
                src="/images/sky-finishers-mascot-2.png"
                alt="Sky Finishers Ventures mascot"
                width={620}
                height={760}
                priority
                sizes="(max-width: 768px) 100vw, 520px"
                className={styles.heroImage}
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
            {/* Gradient vignette to blend with page */}
            <div className={styles.imageVignette}></div>
          </div>

          {/* Floating badge — 10+ years */}
          <div className={styles.floatingBadge}>
            <span className={styles.badgeNumber}>10+</span>
            <span className={styles.badgeText}>Years of Excellence</span>
          </div>

          {/* Floating service tag */}
          <div className={styles.floatingTag}>
            <span className={styles.tagDot}></span>
            Interior &amp; Exterior Finishing
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine}></span>
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
