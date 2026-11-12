import { processData } from '@/data/placeholders';
import styles from './Process.module.css';

export default function Process() {
  return (
    <section className={`section ${styles.processSection}`}>
      <div className={`container ${styles.processContainer}`}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Our Process</h2>
          <p className={styles.supportingText}>
            A streamlined approach to transforming your space, from the first consultation to the final quality check.
          </p>
        </div>

        <div className={styles.timeline}>
          {processData.map((item) => (
            <div key={item.step} className={styles.timelineItem}>
              <div className={styles.stepNumber}>{item.step}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
