import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './service-areas.module.css';

export const metadata: Metadata = {
  title: 'Service Areas | Sky Finishers Ventures',
  description:
    'Sky Finishers Ventures is based in Kano, Nigeria, and considers finishing projects in locations across Nigeria according to project requirements.',
};

const locations = [
  'Kano',
  'Kaduna',
  'Jigawa',
  'Sokoto',
  'Bauchi',
  'Lagos',
  'Rivers',
  'Katsina',
  'Kebbi',
  'Borno',
  'Adamawa',
  'Edo',
  'Enugu',
  'Gombe',
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroLayout}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowMark} aria-hidden="true" />
              Our service areas
            </span>
            <h1 className={styles.heroTitle}>Where We Work</h1>
            <p className={styles.heroIntro}>
              Sky Finishers Ventures is based in Kano, Nigeria. We consider
              finishing projects in the locations below according to your
              requirements and where the project is based.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className={styles.primaryButton}>
                Request a Quote <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className={styles.textLink}>
                Talk to our team
              </Link>
            </div>
          </div>

          <div className={styles.baseCard} aria-label="Sky Finishers Ventures is based in Kano, Nigeria">
            <div className={styles.baseOrbit} aria-hidden="true">
              <span className={styles.orbit} />
              <span className={`${styles.orbit} ${styles.orbitTwo}`} />
              <span className={styles.orbitDot} />
            </div>
            <div className={styles.baseCardContent}>
              <span className={styles.baseLabel}>Our home base</span>
              <span className={styles.baseName}>Kano</span>
              <span className={styles.baseCountry}>Nigeria</span>
            </div>
            <span className={styles.baseAccent} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className={styles.locationsSection} aria-labelledby="locations-title">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>From our base to your site</span>
              <h2 id="locations-title" className={styles.sectionTitle}>
                Locations we consider for projects
              </h2>
            </div>
            <p className={styles.sectionIntro}>
              Kano is our base. The other states listed are project locations,
              not branch offices. Every enquiry is reviewed against the work
              involved and the project location.
            </p>
          </div>

          <div className={styles.locationGrid}>
            {locations.map((location) => {
              const isBase = location === 'Kano';

              return (
                <article
                  key={location}
                  className={`${styles.locationCard} ${isBase ? styles.baseLocation : ''}`}
                >
                  <span
                    className={`${styles.locationIcon} ${isBase ? styles.baseIcon : ''}`}
                    aria-hidden="true"
                  >
                    {isBase ? '⌂' : '•'}
                  </span>
                  <span className={styles.locationName}>{location}</span>
                  <span className={styles.locationType}>
                    {isBase ? 'Company base' : 'Project location'}
                  </span>
                </article>
              );
            })}
          </div>

          <p className={styles.riversNote}>
            Port Harcourt is in Rivers State; the state is listed here as Rivers.
          </p>
        </div>
      </section>

      <section className={styles.contactCta} aria-labelledby="availability-title">
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <span className={styles.ctaEyebrow}>Planning a project?</span>
            <h2 id="availability-title" className={styles.ctaTitle}>
              Let&apos;s confirm what&apos;s possible for your location.
            </h2>
            <p className={styles.ctaText}>
              Tell us where the project is and what finishing work you need.
              We&apos;ll discuss your requirements and confirm availability.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/quote" className={styles.ctaPrimary}>
              Start a Quote <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
