import Link from 'next/link';
import { companyDetails } from '@/data/placeholders';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <span style={{ color: 'var(--color-primary)' }}>Sky</span>
            <span style={{ color: 'var(--color-secondary)' }}>Finishers</span>
          </Link>
          <p className={styles.description}>
            Transforming Spaces. Finishing with Excellence. Professional interior and exterior finishing solutions delivered with precision across Nigeria.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h4 className={styles.columnTitle}>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Our Portfolio</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h4 className={styles.columnTitle}>Services</h4>
          <ul>
            <li><Link href="/services#interior-exterior-painting">Professional Painting</Link></li>
            <li><Link href="/services#screeding-skimming">Screeding &amp; Skimming</Link></li>
            <li><Link href="/services#decorative-painting">Decorative Finishes</Link></li>
            <li><Link href="/services">All Services</Link></li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h4 className={styles.columnTitle}>Contact Us</h4>
          <ul>
            <li>{companyDetails.office}</li>
            <li>Available Nationwide</li>
            {companyDetails.phoneNumbers.map(({ label, value, tel, whatsappUrl }) => (
              <li key={value} className={styles.contactLine}>
                <span className={styles.contactType}>{label}:</span>{' '}
                <a href={tel}>{value}</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappLink} aria-label={`WhatsApp ${label}`}>
                  WhatsApp
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomContent}`}>
          <p>&copy; {currentYear} {companyDetails.name}. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/contact">Privacy &amp; Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
