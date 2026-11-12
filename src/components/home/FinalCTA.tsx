import Link from 'next/link';
import { companyDetails } from '@/data/placeholders';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  const whatsappUrl = companyDetails.phoneNumbers[0]?.whatsappUrl || 'https://wa.me/2348039363294';

  return (
    <section className={`section ${styles.ctaSection}`}>
      <div className={styles.ctaBackground}></div>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.content}>
          <h2 className={styles.headline}>Ready to Transform Your Space?</h2>
          <p className={styles.supportingText}>
            Tell us what you&apos;re building, renovating, or transforming. Our team is ready to help bring your vision to life.
          </p>
          <div className={styles.actions}>
            <Link href="/quote" className={styles.primaryBtn}>
              Request a Quote
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
