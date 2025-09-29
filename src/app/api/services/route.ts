import { NextResponse } from 'next/server';
import { ApiResponse } from '@/lib/fetcher';
import { SERVICES } from '@/lib/constants';

// GET /api/services
export async function GET() {
  try {
    // In a real application, you would:
    // 1. Fetch from database
    // 2. Apply filters/sorting
    // 3. Cache results
    // 4. Handle pagination
    
    // For now, we'll return the static services data
    return NextResponse.json(
      {
        success: true,
        data: SERVICES,
        message: 'Services retrieved successfully',
      } as ApiResponse,
      { status: 200 }
    );

  } catch (error) {
    console.error('Services API error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to retrieve services',
      } as ApiResponse,
      { status: 500 }
    );
  }
}

// POST /api/services (for admin use - create new service)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would:
    // 1. Validate admin authentication
    // 2. Validate service data
    // 3. Save to database
    // 4. Return created service
    
    console.log('New service creation request:', body);
    
    return NextResponse.json(
      {
        success: true,
        message: 'Service created successfully',
        data: { id: 'new-service', ...body },
      } as ApiResponse,
      { status: 201 }
    );

  } catch (error) {
    console.error('Service creation error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create service',
      } as ApiResponse,
      { status: 500 }
    );
  }
}
