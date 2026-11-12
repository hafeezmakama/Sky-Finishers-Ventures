import styles from './ServiceAreas.module.css';

export default function ServiceAreas() {
  const locations = [
    'Kano', 'Kaduna', 'Jigawa', 'Sokoto', 'Bauchi', 
    'Lagos', 'Port Harcourt', 'Katsina', 'Kebbi', 'Borno', 
    'Adamawa', 'Edo', 'Enugu', 'Gombe', 'Kogi', 
    'Nasarawa', 'Niger', 'Plateau', 'Taraba', 'Yobe', 
    'Zamfara', 'Abuja'
  ];

  return (
    <section className={`section ${styles.areasSection}`}>
      <div className={`container ${styles.areasContainer}`}>
        <div className={styles.content}>
          <h2 className={styles.headline}>Serving Clients Across Nigeria</h2>
          <p className={styles.description}>
            Our base is in Kano State, and we review project enquiries across Nigeria according to the scope of work and the project location. We can discuss what is possible for your site and requirements.
          </p>
          <div className={styles.locationsGrid}>
            {locations.map((loc) => (
              <span key={loc} className={styles.locationTag}>{loc}</span>
            ))}
          </div>
        </div>
        <div className={styles.mapVisual}>
          {/* Abstract representation of map/reach */}
          <div className={styles.abstractMap}>
             <div className={styles.mapNode} style={{top: '30%', left: '40%'}}></div>
             <div className={styles.mapNode} style={{top: '50%', left: '30%'}}></div>
             <div className={styles.mapNode} style={{top: '70%', left: '70%'}}></div>
             <div className={styles.mapNode} style={{top: '40%', left: '60%'}}></div>
             <div className={styles.mapNodeMain} style={{top: '25%', left: '45%'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
