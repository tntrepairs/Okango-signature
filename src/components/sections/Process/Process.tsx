import styles from './Process.module.scss';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business, goals, and challenges through comprehensive analysis.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path
            d="M12 1v6m0 6v6m11-7h-6m-6 0H1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Based on our analysis, we develop a customized strategy and detailed implementation plan.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Our expert team executes the plan with precision, keeping you informed throughout the process.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Optimization & Support',
      description: 'We continuously monitor, optimize, and provide ongoing support to ensure long-term success.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }
  ];

  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Our Process</span>
          <h2 className={styles.title}>
            How We Work
            <span className={styles.highlight}> Together</span>
          </h2>
          <p className={styles.description}>
            Our proven methodology ensures successful project delivery and long-term client satisfaction.
          </p>
        </div>

        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <div className={styles.stepIcon}>
                  {step.icon}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.stepConnector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
