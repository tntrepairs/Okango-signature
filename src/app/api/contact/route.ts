import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData, ApiResponse } from '@/lib/fetcher';

// POST /api/contact
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please fill in all required fields (name, email, message)',
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

    // Validate message length
    if (body.message.length < 10 || body.message.length > 1000) {
      return NextResponse.json(
        {
          success: false,
          error: 'Message must be between 10 and 1000 characters',
        } as ApiResponse,
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send auto-reply to user
    
    // For now, we'll just log the data
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      company: body.company || 'Not provided',
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      } as ApiResponse,
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      } as ApiResponse,
      { status: 500 }
    );
  }
}

// GET /api/contact (for testing)
export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: 'Contact API is working',
      data: {
        endpoint: '/api/contact',
        methods: ['POST'],
        description: 'Submit contact form data',
      },
    } as ApiResponse,
    { status: 200 }
  );
}
