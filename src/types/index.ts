// ==========================================================================
// TYPESCRIPT TYPE DEFINITIONS
// ==========================================================================

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

// Company Information Types
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

// Navigation Types
export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  category?: string;
  featured?: boolean;
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
}

// Company Value Types
export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Process Step Types
export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

// Statistics Types
export interface Statistic {
  id: string;
  number: string;
  label: string;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  siteName?: string;
  locale?: string;
  type?: string;
  image?: string;
  url?: string;
}

// Component Props Types
export interface SectionProps {
  className?: string;
  id?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  name?: string;
  id?: string;
}

export interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
  name?: string;
  id?: string;
}

// Form Validation Types
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message: string;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

// Error Types
export interface FormError {
  field: string;
  message: string;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

// Theme Types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

// Animation Types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

// Image Types
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

// Link Types
export interface LinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

// Card Types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

// Modal Types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// Toast Types
export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Event Types
export interface CustomEvent<T = any> extends Event {
  detail: T;
}

// Environment Types
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_SITE_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_GTM_ID?: string;
}
