import styles from './WhySkyFinishers.module.css';

export default function WhySkyFinishers() {
  return (
    <section className={`section ${styles.whySection}`}>
      <div className={`container ${styles.whyContainer}`}>
        <div className={styles.visualColumn}>
          <div className={styles.visualElement}>
            <div className={styles.brandAccent}></div>
            <div className={styles.brandAccent2}></div>
            <div className={styles.visualText}>One Team.<br/>Complete Finishing.</div>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <h2 className={styles.headline}>Why Choose Sky Finishers?</h2>
          <p className={styles.description}>
            We help clients manage painting, decoration, POP, screeding, and finishing work through a single professional team focused on practical execution and detail.
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <h4>Practical Experience</h4>
              <p>Built from hands-on painting and decoration work dating back to 2017.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>Skilled Teamwork</h4>
              <p>Coordinated support for finishing and interior works from preparation through completion.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>Attention to Detail</h4>
              <p>Careful preparation, finishing, and inspection across each stage of the project.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>Project Focus</h4>
              <p>Clear communication and a practical, tailored approach for residential and commercial enquiries.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>Service Range</h4>
              <p>Interior and exterior painting, decorative finishes, screeding, and POP work.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>Reliable Enquiries</h4>
              <p>We review project requirements and discuss what is possible for each location and scope.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
