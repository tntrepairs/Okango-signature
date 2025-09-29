import Link from 'next/link';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Professional Solutions for
              <span className={styles.highlight}> Modern Businesses</span>
            </h1>
            <p className={styles.description}>
              We help companies achieve their goals through innovative technology, 
              expert guidance, and proven strategies. Transform your business with 
              our comprehensive solutions.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Get Started
              </Link>
              <Link href="/services" className={styles.secondaryButton}>
                Our Services
              </Link>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.heroImage}>
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
                    fill="url(#gradient)"
                  />
                  <circle cx="200" cy="120" r="40" fill="white" opacity="0.2" />
                  <rect
                    x="120"
                    y="180"
                    width="160"
                    height="8"
                    rx="4"
                    fill="white"
                    opacity="0.3"
                  />
                  <rect
                    x="140"
                    y="200"
                    width="120"
                    height="6"
                    rx="3"
                    fill="white"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0"
                      y1="0"
                      x2="400"
                      y2="300"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </section>
  );
};

export default Hero;
