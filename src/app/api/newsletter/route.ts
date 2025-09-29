import { NextRequest, NextResponse } from 'next/server';
import { NewsletterFormData, ApiResponse } from '@/lib/fetcher';

// POST /api/newsletter
export async function POST(request: NextRequest) {
  try {
    const body: NewsletterFormData = await request.json();
    
    // Validate email
    if (!body.email) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email address is required',
        } as ApiResponse,
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please enter a valid email address',
        } as ApiResponse,
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Check if email already exists
    // 2. Save to newsletter database
    // 3. Send welcome email
    // 4. Add to email marketing platform (Mailchimp, ConvertKit, etc.)
    
    // For now, we'll just log the data
    console.log('Newsletter subscription:', {
      email: body.email,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to our newsletter!',
      } as ApiResponse,
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      } as ApiResponse,
      { status: 500 }
    );
  }
}

// GET /api/newsletter (for testing)
export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: 'Newsletter API is working',
      data: {
        endpoint: '/api/newsletter',
        methods: ['POST'],
        description: 'Subscribe to newsletter',
      },
    } as ApiResponse,
    { status: 200 }
  );
}
