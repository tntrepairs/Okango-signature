import styles from './ServiceList.module.scss';

const ServiceList = () => {
  const services = [
    {
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
      ),
      title: 'Strategic Consulting',
      description: 'Expert guidance to help you make informed decisions and achieve your business objectives.',
      features: [
        'Business Analysis & Assessment',
        'Market Research & Analysis',
        'Strategic Planning & Roadmapping',
        'Competitive Intelligence',
        'Performance Optimization'
      ],
      price: 'Starting at $2,500/month'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Technology Solutions',
      description: 'Cutting-edge technology implementations to streamline your operations and boost efficiency.',
      features: [
        'System Integration & Migration',
        'Cloud Solutions & Infrastructure',
        'Digital Transformation',
        'API Development & Integration',
        'Security & Compliance'
      ],
      price: 'Starting at $5,000/project'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path
            d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Team Development',
      description: 'Comprehensive training and development programs to enhance your team\'s capabilities.',
      features: [
        'Skills Assessment & Training',
        'Leadership Development Programs',
        'Performance Optimization',
        'Team Building & Collaboration',
        'Change Management'
      ],
      price: 'Starting at $1,500/session'
    },
    {
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
      ),
      title: 'Performance Optimization',
      description: 'Data-driven approaches to improve your business processes and maximize results.',
      features: [
        'Process Analysis & Mapping',
        'Performance Metrics & KPIs',
        'Continuous Improvement',
        'Workflow Optimization',
        'Quality Assurance'
      ],
      price: 'Starting at $3,000/month'
    },
    {
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
      ),
      title: 'Growth Strategy',
      description: 'Scalable solutions designed to support your business growth and expansion goals.',
      features: [
        'Market Expansion Planning',
        'Revenue Growth Strategies',
        'Scalability Assessment',
        'Partnership Development',
        'Investment Planning'
      ],
      price: 'Starting at $4,000/month'
    },
    {
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
      ),
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control to ensure your solutions meet the highest standards.',
      features: [
        'Testing & Validation',
        'Quality Control Processes',
        'Compliance Management',
        'Risk Assessment',
        'Documentation & Reporting'
      ],
      price: 'Starting at $2,000/month'
    }
  ];

  return (
    <section className={styles.serviceList}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Service Details</span>
          <h2 className={styles.title}>
            Comprehensive Solutions for
            <span className={styles.highlight}> Every Need</span>
          </h2>
          <p className={styles.description}>
            Explore our detailed service offerings and find the perfect solution for your business requirements.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.servicePrice}>{service.price}</p>
                </div>
              </div>
              
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.serviceFeatures}>
                <h4 className={styles.featuresTitle}>What's Included:</h4>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
