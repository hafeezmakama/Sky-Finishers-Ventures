import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/data/placeholders';
import styles from './ServicesOverview.module.css';

export default function ServicesOverview() {
  return (
    <section className={`section ${styles.servicesSection}`}>
      <div className={`container ${styles.servicesContainer}`}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Complete Finishing Solutions</h2>
          <p className={styles.supportingText}>
            From walls and ceilings to decorative details and exterior finishes, Sky Finishers provides a wide range of professional finishing services under one roof.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={service.id} className={`${styles.serviceCard} ${index === 0 ? styles.featuredService : ''}`}>
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.serviceImageAsset}
                />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceCategory}>{service.category}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
                <Link href={`/services#${service.id}`} className={styles.serviceLink}>
                  Explore Service →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <Link href="/services" className={styles.viewAllBtn}>View All Our Services</Link>
        </div>
      </div>
    </section>
  );
}
