import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutPreview.module.css';

export default function AboutPreview() {
  return (
    <section className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.textContent}>
          <div className={styles.tag}>About Sky Finishers</div>
          <h2 className={styles.headline}>
            More Than Finishing.<br/>
            <span className={styles.headlineHighlight}>We Transform Spaces.</span>
          </h2>
          <p className={styles.description}>
            Sky Finishers Ventures delivers professional painting, decorative finishes, POP, screeding, and interior detailing for residential and commercial spaces.
          </p>
          <ul className={styles.featureList}>
            <li>Painting &amp; Decorative Finishes</li>
            <li>POP &amp; Gypsum Works</li>
            <li>Screeding &amp; Skimming</li>
            <li>Interior Decoration</li>
            <li>Project Consultation</li>
          </ul>
          <Link href="/about" className={styles.ctaBtn}>Learn More About Us</Link>
        </div>
        <div className={styles.imageContent}>
          <div className={styles.imageGrid}>
            <div className={styles.imageMain}>
              <Image
                src="/images/sky%20finishers/sky-finish/1000010292326352742.jpg"
                alt="Contemporary living room with a minimalist interior"
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
            <div className={styles.imageSmallTop}>
              <Image
                src="/images/sky%20finishers/sky-finish/pop2.jpeg"
                alt="Modern grey and white house exterior"
                fill
                sizes="(max-width: 992px) 50vw, 25vw"
                className={styles.image}
              />
            </div>
            <div className={styles.imageSmallBottom}>
              <Image
                src="/images/sky%20finishers/sky-finish/Block%20of%20Flats%20Design%20%40followers__We%20Design%E2%80%A6.jpg"
                alt="Multi-storey residential building exterior"
                fill
                sizes="(max-width: 992px) 50vw, 25vw"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
