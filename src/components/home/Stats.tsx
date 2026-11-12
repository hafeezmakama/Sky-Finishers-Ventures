import styles from './Stats.module.css';

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className={`container ${styles.statsContainer}`}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>Painting</div>
          <div className={styles.statLabel}>Interior &amp; Exterior</div>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>Decorative</div>
          <div className={styles.statLabel}>Finishes</div>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>POP</div>
          <div className={styles.statLabel}>Gypsum &amp; Ceilings</div>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>Project</div>
          <div className={styles.statLabel}>Enquiries</div>
        </div>
      </div>
    </section>
  );
}
