import styles from './ContactHero.module.scss';

const ContactHero = () => {
  return (
    <section className={styles.contactHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.breadcrumb}>Home / Contact</span>
            <h1 className={styles.title}>Get In Touch</h1>
            <p className={styles.description}>
              Ready to transform your business? Let's discuss how we can help you 
              achieve your goals with our professional solutions and expert guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
