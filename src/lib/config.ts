// ==========================================================================
// CONFIGURATION
// ==========================================================================

// Environment configuration
export const config = {
  // Site Information
  site: {
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'Company Name',
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Professional company providing innovative solutions and services',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    author: 'Divin Divakaran',
  },

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: 10000, // 10 seconds
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID,
  },

  // Email Configuration
  email: {
    smtp: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    from: process.env.SMTP_FROM || 'noreply@company.com',
    to: process.env.SMTP_TO || 'info@company.com',
  },

  // Database
  database: {
    url: process.env.DATABASE_URL,
  },

  // Third-party Services
  services: {
    mailchimp: {
      apiKey: process.env.MAILCHIMP_API_KEY,
      listId: process.env.MAILCHIMP_LIST_ID,
    },
    stripe: {
      publicKey: process.env.STRIPE_PUBLIC_KEY,
      secretKey: process.env.STRIPE_SECRET_KEY,
    },
  },

  // Security
  security: {
    nextAuthSecret: process.env.NEXTAUTH_SECRET,
    nextAuthUrl: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  },

  // Development
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;

// Validation function to check required environment variables
export function validateConfig() {
  const requiredVars = [
    'NEXT_PUBLIC_SITE_URL',
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.warn('Missing environment variables:', missingVars);
  }

  return missingVars.length === 0;
}

// SEO Configuration
export const seoConfig = {
  defaultTitle: config.site.name,
  titleTemplate: `%s | ${config.site.name}`,
  description: config.site.description,
  keywords: [
    'company',
    'professional',
    'solutions',
    'services',
    'business',
    'consulting',
    'technology',
    'innovation',
  ],
  author: config.site.author,
  siteName: config.site.name,
  locale: 'en_US',
  type: 'website',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: config.site.url,
    siteName: config.site.name,
    title: config.site.name,
    description: config.site.description,
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@company_name',
    creator: '@company_name',
  },
} as const;

// API Routes Configuration
export const apiConfig = {
  routes: {
    contact: '/api/contact',
    newsletter: '/api/newsletter',
    services: '/api/services',
    team: '/api/team',
  },
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  },
} as const;

// Form Configuration
export const formConfig = {
  contact: {
    maxMessageLength: 1000,
    minMessageLength: 10,
    maxNameLength: 50,
    minNameLength: 2,
  },
  newsletter: {
    maxEmailLength: 254,
  },
} as const;

// Cache Configuration
export const cacheConfig = {
  static: {
    maxAge: 60 * 60 * 24 * 7, // 1 week
  },
  api: {
    maxAge: 60 * 5, // 5 minutes
  },
  images: {
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
} as const;
