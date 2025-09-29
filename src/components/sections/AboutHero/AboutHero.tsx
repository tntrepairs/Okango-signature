import styles from './AboutHero.module.scss';

const AboutHero = () => {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.breadcrumb}>Home / About</span>
            <h1 className={styles.title}>About Our Company</h1>
            <p className={styles.description}>
              We are a team of passionate professionals dedicated to delivering 
              exceptional results and helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
