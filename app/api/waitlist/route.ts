import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendWaitlistConfirmation } from '@/utils/email'

export async function POST(request: Request) {
  try {
    const { email, ageGroup } = await request.json()
    console.log('Received request with:', { email, ageGroup })

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!ageGroup) {
      return NextResponse.json(
        { error: 'Age group is required' },
        { status: 400 }
      )
    }

    // Validate age group
    const validAgeGroups = ['UNDER_18', 'AGE_19_30', 'AGE_31_40', 'AGE_41_50', 'AGE_51_60', 'OVER_60']
    if (!validAgeGroups.includes(ageGroup)) {
      return NextResponse.json(
        { error: 'Invalid age group' },
        { status: 400 }
      )
    }

    console.log('Database URL check:', process.env.DATABASE_URL ? 'URL is set' : 'URL is missing')
    
    // Inspect the Prisma client structure to debug
    console.log('Prisma client structure:', Object.keys(prisma));
    console.log('WaitlistEmail model structure:', Object.keys(prisma.waitlistEmail));
    
    console.log('Attempting to create waitlist entry...')
    
    const waitlistEntry = await prisma.waitlistEmail.create({
      data: {
        email,
        ageGroup: ageGroup,
      },
    })
    console.log('Successfully created waitlist entry:', waitlistEntry)

    // Send confirmation email
    try {
      const emailSent = await sendWaitlistConfirmation(email, ageGroup)
      console.log('Confirmation email sent:', emailSent)
    } catch (emailError) {
      // Don't fail the request if email sending fails, just log the error
      console.error('Error sending confirmation email:', emailError)
    }

    return NextResponse.json(waitlistEntry)
  } catch (error: any) {
    console.error('Error in waitlist API:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 400 }
      )
    }

    // Log the full error details
    console.error('Full error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      meta: error.meta,
      stack: error.stack,
      prismaConnected: Boolean(prisma && prisma.$connect),
      databaseUrl: process.env.DATABASE_URL ? 'URL exists (length: ' + process.env.DATABASE_URL.length + ')' : 'URL missing',
      nodeEnv: process.env.NODE_ENV
    })

    return NextResponse.json(
      { error: 'Something went wrong', details: error.message },
      { status: 500 }
    )
  }
} 