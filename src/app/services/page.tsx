import Image from 'next/image';
import Link from 'next/link';
import HeroSlideshow from './HeroSlideshow';
import styles from './services.module.css';

export const metadata = {
  title: 'Our Services | Sky Finishers Ventures',
  description:
    'Professional painting, decoration and finishing solutions for residential and commercial spaces by Sky Finishers Ventures.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'interior-exterior-painting',
      title: 'Interior & Exterior Painting',
      description:
        'Professional application of high-quality paints to protect and beautify the inside and outside of your buildings.',
      image: '/images/sky%20finishers/painting-1.jpg',
    },
    {
      id: 'decorative-painting',
      title: 'Decorative Painting',
      description:
        'Specialized techniques to create unique textures, patterns, and visual effects that elevate interior aesthetics.',
      image: '/images/sky%20finishers/decorative-painting.jpg',
    },
    {
      id: 'screeding-skimming',
      title: 'Screeding & Skimming',
      description:
        'Precision surface leveling and smoothing to create the perfect foundation for final paint or wall treatments.',
      image: '/images/sky%20finishers/screeding-skimming.jpg',
    },
    {
      id: 'pop-gypsum-works',
      title: 'POP & Gypsum Works',
      description:
        'Custom ceiling designs, cornices, and architectural detailing using Plaster of Paris and gypsum materials.',
      image: '/images/sky%20finishers/pop-gypsum.jpeg',
    },
    {
      id: 'wall-finishing-textures',
      title: 'Wall Finishing & Textures',
      description:
        'Application of specialized finishes that add depth, character, and durability to your interior and exterior walls.',
      image: '/images/sky%20finishers/wall-finnishing.jpg',
    },
    {
      id: 'interior-decoration',
      title: 'Interior Decoration',
      description:
        'Comprehensive aesthetic enhancement of interior spaces to reflect your style and meet functional requirements.',
      image: '/images/sky%20finishers/interior-decoration.jpg',
    },
    {
      id: 'surface-preparation',
      title: 'Surface Preparation',
      description:
        'Thorough cleaning, repairing, and priming of surfaces to ensure optimal adhesion and longevity of finishes.',
      image: '/images/sky%20finishers/stucco-2.jpg',
    },
    {
      id: 'general-finishing-works',
      title: 'General Finishing Works',
      description:
        'A wide range of essential finishing touches that bring a construction or renovation project to final completion.',
      image: '/images/sky%20finishers/TV-stand-2.jpg',
    },
  ];

  const differentiators = [
    'Practical Experience',
    'Skilled Teamwork',
    'Attention to Detail',
    'Honesty',
    'Continuous Learning',
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: "Understand the client's project and requirements.",
    },
    {
      num: '02',
      title: 'Prepare',
      desc: 'Prepare the surface and project appropriately.',
    },
    {
      num: '03',
      title: 'Finish',
      desc: 'Carry out the selected painting, decoration or finishing work.',
    },
    {
      num: '04',
      title: 'Complete',
      desc: 'Deliver the completed finishing work with attention to detail.',
    },
  ];

  return (
    <main>
      {/* 1. Services Hero */}
      <HeroSlideshow />

      {/* 2. Services Introduction */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionTitleCenter}>
            <span className={styles.sectionTag}>
              Finishing That Transforms Spaces
            </span>
          </div>

          <p className={styles.introText}>
            “Sky Finishers Ventures provides professional painting, interior
            decoration and finishing solutions for residential and commercial
            projects. We combine practical experience, skilled teamwork,
            attention to detail and continuous learning to deliver quality
            finishing solutions.”
          </p>
        </div>
      </section>

      {/* 3. Service Catalogue */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.sectionTitleCenter}>
            <span className={styles.sectionTag}>What We Do</span>
            <h2 className={styles.sectionTitle}>Our Finishing Services</h2>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                </div>

                <div className={styles.serviceCardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>

                  <p className={styles.serviceDesc}>
                    {service.description}
                  </p>

                  <Link
                    href={`/services#${service.id}`}
                    className={styles.serviceLink}
                  >
                    Learn More <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Service Visual */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.featuredVisualContainer}>
            <div className={styles.featuredImage}>
              <Image
                src="/images/sky%20finishers/interior-decoration.jpg"
                alt="Completed Sky Finishers interior decoration project"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
              />
              <div className={styles.featuredImageShade} aria-hidden="true" />
            </div>

            <div className={styles.featuredVisualContent}>
              <span className={styles.sectionTag}>The Finishing Process</span>

              <h2 className={styles.sectionTitle}>
                From Preparation to a Finished Space
              </h2>

              <p>
                Quality finishing begins with proper preparation and careful
                execution. Every stage contributes to the final appearance of
                the space.
              </p>

              <div className={styles.featuredSteps}>
                <div className={styles.featuredStep}>Before</div>
                <div className={styles.featuredArrow}>→</div>
                <div className={styles.featuredStep}>Preparation</div>
                <div className={styles.featuredArrow}>→</div>
                <div className={styles.featuredStep}>Finishing</div>
                <div className={styles.featuredArrow}>→</div>
                <div className={styles.featuredStep}>Completed Space</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Our Services */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.sectionTitleCenter}>
            <span className={styles.sectionTag}>Our Strengths</span>
            <h2 className={styles.sectionTitle}>Why Choose Our Services</h2>
          </div>

          <div className={styles.differentiatorsGrid}>
            {differentiators.map((diff, idx) => (
              <div key={idx} className={styles.diffCard}>
                <h3>{diff}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process Preview */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionTitleCenter}>
            <span className={styles.sectionTag}>Workflow</span>
            <h2 className={styles.sectionTitle}>How We Work</h2>
          </div>

          <div className={styles.processSteps}>
            {processSteps.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processNumber}>{step.num}</div>

                <div className={styles.processContent}>
                  <h3>— {step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Service Areas */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.areasContainer}>
            <h2 className={styles.areasTitle}>
              Based in Kano, Serving Projects by Requirement
            </h2>

            <p>
              “Our projects are undertaken based on client requirements and
              project locations.”
            </p>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaHeadline}>Planning Your Next Project?</h2>

          <p className={styles.ctaText}>
            Talk to Sky Finishers Ventures about your painting, decoration or
            finishing requirements.
          </p>

          <div className={styles.ctaActions}>
            <Link href="/quote" className={styles.primaryBtn}>
              Request a Quote
            </Link>

            <Link href="/contact" className={styles.secondaryBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}