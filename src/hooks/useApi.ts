import { useState, useCallback } from 'react';
import { ApiResponse } from '@/types';

// Generic API hook
export function useApi<T = any>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (
    apiCall: () => Promise<ApiResponse<T>>
  ): Promise<ApiResponse<T>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiCall();
      
      if (response.success) {
        setData(response.data || null);
        setError(null);
      } else {
        setError(response.error || 'An error occurred');
        setData(null);
      }

      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      setData(null);
      
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    reset,
  };
}

// Contact form API hook
export function useContactFormApi() {
  const { data, loading, error, execute } = useApi();

  const submitContactForm = useCallback(async (formData: any) => {
    return execute(async () => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    });
  }, [execute]);

  return {
    data,
    loading,
    error,
    submitContactForm,
  };
}

// Newsletter API hook
export function useNewsletterApi() {
  const { data, loading, error, execute } = useApi();

  const subscribeToNewsletter = useCallback(async (email: string) => {
    return execute(async () => {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    });
  }, [execute]);

  return {
    data,
    loading,
    error,
    subscribeToNewsletter,
  };
}

// Services API hook
export function useServicesApi() {
  const { data, loading, error, execute } = useApi();

  const fetchServices = useCallback(async () => {
    return execute(async () => {
      const response = await fetch('/api/services');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    });
  }, [execute]);

  return {
    data,
    loading,
    error,
    fetchServices,
  };
}

// Team API hook
export function useTeamApi() {
  const { data, loading, error, execute } = useApi();

  const fetchTeam = useCallback(async () => {
    return execute(async () => {
      const response = await fetch('/api/team');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    });
  }, [execute]);

  return {
    data,
    loading,
    error,
    fetchTeam,
  };
}
