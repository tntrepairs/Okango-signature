import styles from './ServicesHero.module.scss';

const ServicesHero = () => {
  return (
    <section className={styles.servicesHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.breadcrumb}>Home / Services</span>
            <h1 className={styles.title}>Our Services</h1>
            <p className={styles.description}>
              Comprehensive solutions designed to help your business thrive in today's 
              competitive landscape. From strategy to implementation, we're here to support your growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
