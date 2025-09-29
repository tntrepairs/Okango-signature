import Link from 'next/link';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>About Us</span>
              <h2 className={styles.title}>
                Building the Future with
                <span className={styles.highlight}> Innovation</span>
              </h2>
              <p className={styles.description}>
                We are a team of passionate professionals dedicated to delivering 
                exceptional results. Our mission is to help businesses thrive in 
                the digital age through cutting-edge solutions and strategic thinking.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Fast & Reliable</h3>
                  <p className={styles.featureDescription}>
                    We deliver solutions quickly without compromising on quality or reliability.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Excellence</h3>
                  <p className={styles.featureDescription}>
                    We strive for excellence in everything we do, from planning to execution.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Team Collaboration</h3>
                  <p className={styles.featureDescription}>
                    We work closely with our clients as partners in their success journey.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.cta}>
              <Link href="/about" className={styles.learnMoreButton}>
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.imageContainer}>
              <div className={styles.imagePlaceholder}>
                <svg
                  width="400"
                  height="300"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="400"
                    height="300"
                    rx="12"
                    fill="url(#aboutGradient)"
                  />
                  <circle cx="120" cy="80" r="25" fill="white" opacity="0.3" />
                  <circle cx="280" cy="100" r="20" fill="white" opacity="0.2" />
                  <rect
                    x="80"
                    y="150"
                    width="240"
                    height="6"
                    rx="3"
                    fill="white"
                    opacity="0.3"
                  />
                  <rect
                    x="100"
                    y="170"
                    width="200"
                    height="6"
                    rx="3"
                    fill="white"
                    opacity="0.2"
                  />
                  <rect
                    x="120"
                    y="190"
                    width="160"
                    height="6"
                    rx="3"
                    fill="white"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient
                      id="aboutGradient"
                      x1="0"
                      y1="0"
                      x2="400"
                      y2="300"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#10B981" />
                      <stop offset="1" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
