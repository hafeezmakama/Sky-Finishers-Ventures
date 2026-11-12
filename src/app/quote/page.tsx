import Image from 'next/image';
import Link from 'next/link';
import { companyDetails } from '@/data/placeholders';
import QuoteForm from './QuoteForm';
import styles from './quote.module.css';

export const metadata = {
  title: 'Request a Quote | Sky Finishers Ventures',
  description:
    'Tell Sky Finishers Ventures about your painting, decoration, or finishing project and prepare a quotation enquiry through WhatsApp.',
};

export default function QuotePage() {
  const primaryPhone = companyDetails.phoneNumbers[0];

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
          <span className={styles.eyebrow}>Start with a conversation</span>
          <h1 className={styles.heroTitle}>Request a Project Quote</h1>
          <p className={styles.heroIntro}>
            Share a few details about your space and the finishing work you need.
            We&apos;ll prepare your enquiry so you can send it to our team on WhatsApp.
          </p>
        </div>
      </section>

      <section className={styles.quoteSection}>
        <div className={`container ${styles.quoteLayout}`}>
          <aside className={styles.detailsPanel}>
            <span className={styles.sectionTag}>Your project, your way</span>
            <h2 className={styles.detailsTitle}>Let&apos;s make a plan for your space.</h2>
            <p className={styles.detailsIntro}>
              The more we know about your requirements, the better we can understand
              the work you have in mind.
            </p>

            <div className={styles.photoFrame}>
              <Image
                src="/images/sky%20finishers/IMG-20261002-WA0054.jpg"
                alt="Finished living room with decorative ceiling and interior details"
                fill
                sizes="(max-width: 900px) 100vw, 34vw"
                className={styles.photo}
              />
            </div>

            <div className={styles.contactBlock}>
              <span className={styles.contactLabel}>Prefer to speak with us?</span>
              <a href={primaryPhone.tel} className={styles.contactPhone}>
                {primaryPhone.value}
              </a>
              <Link href="/contact" className={styles.contactLink}>
                View all contact options <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>

          <div className={styles.formCard}>
            <div className={styles.formHeading}>
              <span className={styles.sectionTag}>Project details</span>
              <h2 className={styles.formTitle}>Tell us what you&apos;re looking for</h2>
              <p className={styles.formIntro}>
                Required fields are marked with <span aria-hidden="true">*</span>.
              </p>
            </div>
            <QuoteForm
              whatsappUrl={primaryPhone.whatsappUrl}
              phoneLabel={primaryPhone.value}
            />
          </div>
        </div>
      </section>
    </>
  );
}
