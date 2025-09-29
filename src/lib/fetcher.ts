// ==========================================================================
// API FETCHER UTILITIES
// ==========================================================================

// Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Generic fetch wrapper with error handling
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}

// Contact Form API
export async function submitContactForm(
  formData: ContactFormData
): Promise<ApiResponse> {
  return apiRequest('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

// Newsletter Subscription API
export async function subscribeToNewsletter(
  formData: NewsletterFormData
): Promise<ApiResponse> {
  return apiRequest('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

// Services API
export async function getServices(): Promise<ApiResponse> {
  return apiRequest('/api/services');
}

// Team API
export async function getTeam(): Promise<ApiResponse> {
  return apiRequest('/api/team');
}

// Mock API implementations for development
export const mockApi = {
  // Mock contact form submission
  async submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate validation
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        error: 'Please fill in all required fields',
      };
    }

    // Simulate successful submission
    console.log('Contact form submitted:', formData);
    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.',
    };
  },

  // Mock newsletter subscription
  async subscribeToNewsletter(formData: NewsletterFormData): Promise<ApiResponse> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (!formData.email) {
      return {
        success: false,
        error: 'Please enter a valid email address',
      };
    }

    console.log('Newsletter subscription:', formData);
    return {
      success: true,
      message: 'Successfully subscribed to our newsletter!',
    };
  },

  // Mock services data
  async getServices(): Promise<ApiResponse> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      success: true,
      data: [
        {
          id: 'strategic-consulting',
          title: 'Strategic Consulting',
          description: 'Expert guidance to help you make informed decisions.',
          price: 'Starting at $2,500/month'
        },
        {
          id: 'technology-solutions',
          title: 'Technology Solutions',
          description: 'Cutting-edge technology implementations.',
          price: 'Starting at $5,000/project'
        }
      ]
    };
  },

  // Mock team data
  async getTeam(): Promise<ApiResponse> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      success: true,
      data: [
        {
          id: 'john-smith',
          name: 'John Smith',
          role: 'CEO & Founder',
          bio: 'Visionary leader with 15+ years of experience.'
        },
        {
          id: 'sarah-johnson',
          name: 'Sarah Johnson',
          role: 'CTO',
          bio: 'Technology expert passionate about scalable solutions.'
        }
      ]
    };
  }
};

// Utility functions for form handling
export const formUtils = {
  // Validate email format
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate phone number format
  isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  // Sanitize form input
  sanitizeInput(input: string): string {
    return input.trim().replace(/[<>]/g, '');
  },

  // Format phone number
  formatPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  }
};

// Error handling utilities
export const errorHandler = {
  // Get user-friendly error message
  getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    if (typeof error === 'string') {
      return error;
    }
    return 'An unexpected error occurred. Please try again.';
  },

  // Log error for debugging
  logError(error: unknown, context?: string): void {
    const message = context ? `${context}: ${this.getErrorMessage(error)}` : this.getErrorMessage(error);
    console.error(message, error);
  }
};

// Development helpers
export const devUtils = {
  // Check if running in development
  isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
  },

  // Log API calls in development
  logApiCall(endpoint: string, method: string, data?: any): void {
    if (this.isDevelopment()) {
      console.log(`API Call: ${method} ${endpoint}`, data);
    }
  }
};
