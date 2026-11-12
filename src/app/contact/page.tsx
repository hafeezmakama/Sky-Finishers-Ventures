import Link from 'next/link';
import { companyDetails } from '@/data/placeholders';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Us | Sky Finishers Ventures',
  description: 'Contact Sky Finishers Ventures for painting, decoration, and finishing services in Kano and beyond.',
};

export default function ContactPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.sectionTag}>Get in Touch</span>
          <h1 className={styles.heroTitle}>Contact Sky Finishers Ventures</h1>
          <p className={styles.heroSubtitle}>
            Let&apos;s discuss your next painting, decorating, screeding, or finishing project.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <h2>Call Us</h2>
              <ul className={styles.contactList}>
                {companyDetails.phoneNumbers.map(({ label, value, tel, whatsappUrl }) => (
                  <li key={value}>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>{label}</span>
                      <a href={tel}>{value}</a>
                    </div>
                    <div className={styles.contactActions}>
                      <a href={tel} className={styles.actionLink}>Call</a>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.actionLinkSecondary}>
                        WhatsApp
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.contactCard}>
              <h2>Email</h2>
              <p className={styles.cardText}>
                Reach out for quotations, project discussions, and general enquiries.
              </p>
              <a href={`mailto:${companyDetails.email}`} className={styles.primaryLink}>
                {companyDetails.email}
              </a>
            </div>

            <div className={styles.contactCard}>
              <h2>Visit Our Office</h2>
              <p className={styles.cardText}>{companyDetails.office}</p>
            </div>

            <div className={styles.contactCard}>
              <h2>Company Registration</h2>
              <p className={styles.cardText}>CAC Registration Number</p>
              <div className={styles.registrationBadge}>{companyDetails.cacRegistrationNumber}</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaHeadline}>Need a Quote for Your Space?</h2>
          <div className={styles.ctaActions}>
            <Link href="/quote" className={styles.primaryBtn}>Request a Quote</Link>
            <Link href="/services" className={styles.secondaryBtn}>Explore Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
