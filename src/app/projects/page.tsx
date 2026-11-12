import Image from 'next/image';
import Link from 'next/link';
import { companyDetails } from '@/data/placeholders';
import ProjectGallery from './ProjectGallery';
import styles from './projects.module.css';

export const metadata = {
  title: 'Our Work | Sky Finishers Ventures',
  description:
    'Explore examples of painting, decorative finishes, POP and gypsum, screeding, and interior decoration by Sky Finishers Ventures.',
};

export default function ProjectsPage() {
  const mainPhone = companyDetails.phoneNumbers[0];

  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/sky%20finishers/hero-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>Sky Finishers Ventures</span>
          <h1 className={styles.heroTitle}>Our Work</h1>
          <p className={styles.heroIntro}>
            A closer look at the finishes, details, and spaces we help bring to life.
          </p>
          <a className={styles.heroLink} href="#work-gallery">
            Explore the gallery <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className={styles.gallerySection} id="work-gallery">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionTag}>Selected work</span>
              <h2 className={styles.sectionTitle}>Finishing details that make a space</h2>
            </div>
            <p className={styles.sectionIntro}>
              Browse examples of our painting, surface finishes, ceilings, and interior
              decoration. Select any image to see it in more detail.
            </p>
          </div>
          <ProjectGallery />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <div>
            <span className={styles.ctaEyebrow}>Let&apos;s talk about your space</span>
            <h2 className={styles.ctaTitle}>Have a project in mind?</h2>
            <p className={styles.ctaText}>
              Tell us what you have in mind and we&apos;ll help you plan the next step.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Contact our team <span aria-hidden="true">→</span>
            </Link>
            <a className={styles.phoneLink} href={mainPhone.tel}>
              Call {mainPhone.value}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
