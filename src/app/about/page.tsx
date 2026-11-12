import Image from 'next/image';
import Link from 'next/link';
import { companyDetails } from '@/data/placeholders';
import styles from './about.module.css';

export const metadata = {
  title: 'About Us | Sky Finishers Ventures',
  description: 'Learn about Sky Finishers Ventures, a Kano-based company specializing in premium painting, interior decoration, and finishing.',
};

export default function AboutPage() {
  return (
    <main>
      {/* About Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>About Sky Finishers Ventures</h1>
          <p className={styles.heroSubtitle}>
            Premium painting, interior decoration, and finishing solutions for residential and commercial spaces.
          </p>
        </div>
      </section>

      {/* Our Story & Growth */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <span className={styles.sectionTag}>Our Story</span>
              <h2 className={styles.sectionTitle}>From Local Painters to Industry Leaders</h2>
              <p>
                Sky Finishers Ventures is a Kano-based company that started as Sky Painting and Decoration. 
                What began as a small team with a passion for transforming spaces has grown into a highly skilled 
                team of about 10 professionals.
              </p>
              <p>
                In 2023, we were formally registered as Sky Finishers Ventures. Despite our growth, our core 
                focus remains unchanged: delivering quality workmanship, maintaining honesty in every interaction, 
                paying rigorous attention to detail, and committing to continuous improvement.
              </p>
              <p>
                Today, we pride ourselves on a foundation built on practical experience and teamwork, ensuring 
                every project we undertake is finished to the highest standard.
              </p>
            </div>
            
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <span className={styles.timelineYear}>2017</span>
                <p className={styles.timelineContent}>
                  Abdulhamid Muhammad entered the painting and decoration industry, beginning with foundational 
                  screeding and skimming works.
                </p>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <span className={styles.timelineYear}>Growth</span>
                <p className={styles.timelineContent}>
                  Developed decorative painting and interior finishing expertise through hands-on practical 
                  experience and building a dedicated, skilled team.
                </p>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <span className={styles.timelineYear}>2023</span>
                <p className={styles.timelineContent}>
                  Formally registered as Sky Finishers Ventures, cementing our commitment to professional, 
                  premium finishing services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.founderGrid}>
            <div className={styles.founderImagePlaceholder}>
              AM
            </div>
            <div className={styles.founderContent}>
              <span className={styles.sectionTag}>Leadership</span>
              <h2 className={styles.sectionTitle}>Abdulhamid Muhammad</h2>
              <div className={styles.founderRole}>Founder / CEO & Managing Director</div>
              <div className={styles.founderBio}>
                <p>
                  Abdulhamid’s journey is rooted in a strong building and technical background at GSTC B.K.D., 
                  complemented by a Mathematics Education degree from the University of Science and Technology, Wudil.
                </p>
                <p>
                  Before mastering painting and decoration, his practical experience spanned carpentry and mechanics, 
                  giving him a unique, holistic understanding of building structures and spatial design.
                </p>
                <blockquote className={styles.quote}>
                  “Be honest. Do the right thing. Keep improving.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionTitleCenter}>
            <span className={styles.sectionTag}>Our People</span>
            <h2 className={styles.sectionTitle}>Management Team</h2>
          </div>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <Image
                src="/images/Team%20images/Zahraddeen%20sky%20finishers.jpeg"
                alt="Zaharadeen Muhammad Sabon"
                width={120}
                height={120}
                className={styles.teamImage}
              />
              <h3 className={styles.teamName}>Zaharadeen Muhammad Sabon</h3>
              <div className={styles.teamRole}>Secretary / Treasurer</div>
            </div>
            <div className={styles.teamCard}>
              <Image
                src="/images/Team%20images/Isma%27il%20sky%20finishers.jpeg"
                alt="Ismail Jaafar Isha"
                width={120}
                height={120}
                className={styles.teamImage}
              />
              <h3 className={styles.teamName}>Ismail Jaafar Isha</h3>
              <div className={styles.teamRole}>Head of Screeding / Skimming</div>
            </div>
            <div className={styles.teamCard}>
              <Image
                src="/images/Team%20images/Umar%20sky%20finishers.jpeg"
                alt="Umar Musa"
                width={120}
                height={120}
                className={styles.teamImage}
              />
              <h3 className={styles.teamName}>Umar Musa</h3>
              <div className={styles.teamRole}>Public Relations Officer (PRO)</div>
            </div>
            <div className={styles.teamCard}>
              <Image
                src="/images/Team%20images/KB%20sky%20finishers.jpeg"
                alt="Kabiru Usman Abubakar"
                width={120}
                height={120}
                className={styles.teamImage}
              />
              <h3 className={styles.teamName}>Kabiru Usman Abubakar</h3>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamPlaceholder}>IA</div>
              <h3 className={styles.teamName}>Isiya Adam</h3>
              <div className={styles.teamRole}>Head of POP</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different & Our Services */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.sectionTitleCenter}>
            <span className={styles.sectionTag}>Why Choose Us</span>
            <h2 className={styles.sectionTitle}>What Makes Us Different</h2>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>Practical Experience</h3>
            </div>
            <div className={styles.featureCard}>
              <h3>Skilled Teamwork</h3>
            </div>
            <div className={styles.featureCard}>
              <h3>Attention to Detail</h3>
            </div>
            <div className={styles.featureCard}>
              <h3>Honesty</h3>
            </div>
            <div className={styles.featureCard}>
              <h3>Continuous Learning</h3>
            </div>
          </div>

          <div style={{ marginTop: '5rem' }}>
            <div className={styles.sectionTitleCenter}>
              <span className={styles.sectionTag}>Expertise</span>
              <h2 className={styles.sectionTitle}>Our Services</h2>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>Interior & exterior painting</div>
              <div className={styles.serviceItem}>Decorative painting</div>
              <div className={styles.serviceItem}>Screeding & skimming</div>
              <div className={styles.serviceItem}>POP & gypsum works</div>
              <div className={styles.serviceItem}>Wall finishing and textures</div>
              <div className={styles.serviceItem}>Interior decoration</div>
              <div className={styles.serviceItem}>Surface preparation</div>
              <div className={styles.serviceItem}>General finishing works</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <h3>Our Vision</h3>
              <p>To become a trusted Nigerian finishing company recognized for quality, professionalism, innovation and skilled workmanship.</p>
            </div>
            <div className={`${styles.visionCard} ${styles.mission}`}>
              <h3>Our Mission</h3>
              <p>To provide reliable painting and interior finishing solutions while developing skilled professionals and contributing to the growth of the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Contact */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.officeContent}>
            <span className={styles.sectionTag}>Reach Out</span>
            <h2 className={styles.sectionTitle}>Our Office</h2>
            <p>
              We are strategically located to serve our clients across Kano State and beyond. 
              Visit us to discuss how we can transform your space.
            </p>
            
            <div className={styles.officeDetails}>
              <div><strong>Address:</strong> {companyDetails.office}</div>
              <div><strong>Email:</strong> <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a></div>
              <div>
                <strong>Phone:</strong>{' '}
                {companyDetails.phoneNumbers.map(({ value, tel }, index) => (
                  <span key={value}>
                    <a href={tel}>{value}</a>
                    {index < companyDetails.phoneNumbers.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              <div><strong>CAC Registration Number:</strong> {companyDetails.cacRegistrationNumber}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaHeadline}>Ready to Transform Your Space?</h2>
          <div className={styles.ctaActions}>
            <Link href="/quote" className={styles.primaryBtn}>
              Request a Quote
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
