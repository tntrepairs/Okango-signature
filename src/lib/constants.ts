// ==========================================================================
// CONSTANTS
// ==========================================================================

// Company Information
export const COMPANY_INFO = {
  name: 'Company Name',
  tagline: 'Professional Solutions for Modern Businesses',
  description: 'Professional company providing innovative solutions and services',
  email: 'info@company.com',
  phone: '+1 (234) 567-890',
  address: {
    street: '123 Business St, Suite 100',
    city: 'City',
    state: 'State',
    zip: '12345',
    country: 'United States'
  },
  social: {
    linkedin: 'https://linkedin.com/company/company-name',
    twitter: 'https://twitter.com/company_name',
    facebook: 'https://facebook.com/company.name',
    instagram: 'https://instagram.com/company_name'
  }
} as const;

// Navigation Menu
export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' }
] as const;

// Services Data
export const SERVICES = [
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    description: 'Expert guidance to help you make informed decisions and achieve your business objectives.',
    icon: 'star',
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
    id: 'technology-solutions',
    title: 'Technology Solutions',
    description: 'Cutting-edge technology implementations to streamline your operations and boost efficiency.',
    icon: 'monitor',
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
    id: 'team-development',
    title: 'Team Development',
    description: 'Comprehensive training and development programs to enhance your team\'s capabilities.',
    icon: 'users',
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
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description: 'Data-driven approaches to improve your business processes and maximize results.',
    icon: 'zap',
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
    id: 'growth-strategy',
    title: 'Growth Strategy',
    description: 'Scalable solutions designed to support your business growth and expansion goals.',
    icon: 'trending-up',
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
    id: 'quality-assurance',
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control to ensure your solutions meet the highest standards.',
    icon: 'check-circle',
    features: [
      'Testing & Validation',
      'Quality Control Processes',
      'Compliance Management',
      'Risk Assessment',
      'Documentation & Reporting'
    ],
    price: 'Starting at $2,000/month'
  }
] as const;

// Team Members
export const TEAM_MEMBERS = [
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years of experience in business strategy and innovation.',
    image: '/images/team/john-smith.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/johnsmith',
      twitter: 'https://twitter.com/johnsmith'
    }
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: 'Technology expert passionate about building scalable solutions and leading development teams.',
    image: '/images/team/sarah-johnson.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      github: 'https://github.com/sarahjohnson'
    }
  },
  {
    id: 'mike-chen',
    name: 'Mike Chen',
    role: 'Head of Design',
    bio: 'Creative director focused on user experience and modern design principles.',
    image: '/images/team/mike-chen.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/mikechen',
      dribbble: 'https://dribbble.com/mikechen'
    }
  },
  {
    id: 'emily-davis',
    name: 'Emily Davis',
    role: 'Project Manager',
    bio: 'Detail-oriented professional ensuring projects are delivered on time and within budget.',
    image: '/images/team/emily-davis.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/emilydavis'
    }
  }
] as const;

// Company Values
export const VALUES = [
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.',
    icon: 'star'
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and work closely with our clients as partners in their success.',
    icon: 'users'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We embrace new technologies and innovative approaches to solve complex business challenges.',
    icon: 'zap'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.',
    icon: 'shield'
  }
] as const;

// Process Steps
export const PROCESS_STEPS = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery & Analysis',
    description: 'We start by understanding your business, goals, and challenges through comprehensive analysis.',
    icon: 'search'
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy & Planning',
    description: 'Based on our analysis, we develop a customized strategy and detailed implementation plan.',
    icon: 'target'
  },
  {
    id: 'implementation',
    number: '03',
    title: 'Implementation',
    description: 'Our expert team executes the plan with precision, keeping you informed throughout the process.',
    icon: 'zap'
  },
  {
    id: 'optimization',
    number: '04',
    title: 'Optimization & Support',
    description: 'We continuously monitor, optimize, and provide ongoing support to ensure long-term success.',
    icon: 'check-circle'
  }
] as const;

// Statistics
export const STATS = [
  {
    id: 'projects',
    number: '500+',
    label: 'Projects Completed'
  },
  {
    id: 'clients',
    number: '50+',
    label: 'Happy Clients'
  },
  {
    id: 'experience',
    number: '5+',
    label: 'Years Experience'
  }
] as const;

// API Endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  services: '/api/services',
  team: '/api/team'
} as const;

// Form Validation
export const VALIDATION_RULES = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  phone: {
    required: false,
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Please enter a valid phone number'
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    message: 'Name must be between 2 and 50 characters'
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    message: 'Message must be between 10 and 1000 characters'
  }
} as const;

// SEO Defaults
export const SEO_DEFAULTS = {
  title: 'Company Name - Professional Solutions',
  description: 'Professional company providing innovative solutions and services',
  keywords: 'company, professional, solutions, services, business',
  author: 'Company Name',
  siteName: 'Company Name',
  locale: 'en_US',
  type: 'website'
} as const;
