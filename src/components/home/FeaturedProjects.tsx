import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data/placeholders';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
  return (
    <section className={`section ${styles.projectsSection}`}>
      <div className={`container ${styles.projectsContainer}`}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.headline}>Finishing Inspiration</h2>
            <p className={styles.supportingText}>
              Explore visual examples of exterior, ceiling, and interior finishes. Photos are illustrative and are not presented as verified Sky Finishers projects.
            </p>
          </div>
          <Link href="/projects" className={styles.viewAllBtn}>
            View All Projects
          </Link>
        </div>

        <div className={styles.gallery}>
          {projectsData.map((project, index) => (
            <Link href="/projects" key={project.id} className={`${styles.projectCard} ${index === 0 ? styles.largeCard : ''}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectInfo}>
                <div className={styles.projectCategory}>{project.category}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
