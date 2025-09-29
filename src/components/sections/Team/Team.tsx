import styles from './Team.module.scss';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      description: 'Visionary leader with 15+ years of experience in business strategy and innovation.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/api/placeholder/300/300',
      description: 'Technology expert passionate about building scalable solutions and leading development teams.'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Design',
      image: '/api/placeholder/300/300',
      description: 'Creative director focused on user experience and modern design principles.'
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      image: '/api/placeholder/300/300',
      description: 'Detail-oriented professional ensuring projects are delivered on time and within budget.'
    }
  ];

  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Our Team</span>
          <h2 className={styles.title}>
            Meet the People Behind
            <span className={styles.highlight}> Our Success</span>
          </h2>
          <p className={styles.description}>
            Our diverse team of experts brings together years of experience 
            and passion for delivering exceptional results.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.memberImage}>
                <div className={styles.imagePlaceholder}>
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="60" fill="url(#memberGradient)" />
                    <circle cx="60" cy="45" r="15" fill="white" opacity="0.8" />
                    <path
                      d="M30 90c0-16.569 13.431-30 30-30s30 13.431 30 30"
                      fill="white"
                      opacity="0.8"
                    />
                    <defs>
                      <linearGradient
                        id="memberGradient"
                        x1="0"
                        y1="0"
                        x2="120"
                        y2="120"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#1E40AF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberDescription}>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
