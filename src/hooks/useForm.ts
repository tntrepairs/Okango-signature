import { useState, useCallback } from 'react';
import { FormError } from '@/types';

// Generic form hook
export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validationRules?: Partial<Record<keyof T, any>>
) {
  const [values, setFormValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update field value
  const setValue = useCallback((field: keyof T, value: any) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
    const fieldName = String(field);
    
    // Clear error for this field when user starts typing
    if (errors.length > 0) {
      setErrors(prev => prev.filter(error => error.field !== fieldName));
    }
  }, [errors]);

  // Update multiple values
  const setValues = useCallback((newValues: Partial<T>) => {
    setFormValues(prev => ({ ...prev, ...newValues }));
  }, []);

  // Validate single field
  const validateField = useCallback((field: keyof T, value: any): string | null => {
    if (!validationRules || !validationRules[field]) return null;

    const rule = validationRules[field];
    const fieldName = String(field);
    
    if (rule.required && (!value || value.toString().trim() === '')) {
      return rule.message || `${fieldName} is required`;
    }

    if (rule.minLength && value && value.length < rule.minLength) {
      return rule.message || `${fieldName} must be at least ${rule.minLength} characters`;
    }

    if (rule.maxLength && value && value.length > rule.maxLength) {
      return rule.message || `${fieldName} must be no more than ${rule.maxLength} characters`;
    }

    if (rule.pattern && value && !rule.pattern.test(value)) {
      return rule.message || `${fieldName} format is invalid`;
    }

    return null;
  }, [validationRules]);

  // Validate all fields
  const validate = useCallback((): boolean => {
    const newErrors: FormError[] = [];

    Object.keys(values).forEach(field => {
      const error = validateField(field as keyof T, values[field as keyof T]);
      if (error) {
        newErrors.push({ field, message: error });
      }
    });

    setErrors(newErrors);
    return newErrors.length === 0;
  }, [values, validateField]);

  // Reset form
  const reset = useCallback(() => {
    setFormValues(initialValues);
    setErrors([]);
    setIsSubmitting(false);
  }, [initialValues]);

  // Handle form submission
  const handleSubmit = useCallback(async (
    onSubmit: (values: T) => Promise<void> | void
  ) => {
    setIsSubmitting(true);
    
    try {
      if (validate()) {
        await onSubmit(values);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validate]);

  return {
    values,
    errors,
    isSubmitting,
    setValue,
    setValues,
    validate,
    reset,
    handleSubmit,
    isValid: errors.length === 0,
  };
}

// Contact form hook
export function useContactForm() {
  const initialValues = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      message: 'Name must be between 2 and 50 characters',
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
      message: 'Message must be between 10 and 1000 characters',
    },
  };

  return useForm(initialValues, validationRules);
}

// Newsletter form hook
export function useNewsletterForm() {
  const initialValues = {
    email: '',
  };

  const validationRules = {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
  };

  return useForm(initialValues, validationRules);
}
