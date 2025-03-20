import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Test database connection
    const dbInfo = {
      envVars: {
        nodeEnv: process.env.NODE_ENV,
        databaseUrl: process.env.DATABASE_URL ? `Set (length: ${process.env.DATABASE_URL.length})` : 'Not set',
      },
      prismaClient: {
        available: Boolean(prisma),
        methods: prisma ? Object.keys(prisma).slice(0, 10) : [],
        waitlistModel: prisma.waitlistEmail ? 'Available' : 'Not available',
      }
    }

    // Try a simple database query
    let queryResult = 'Not attempted'
    try {
      const count = await prisma.waitlistEmail.count()
      queryResult = `Success: ${count} emails in waitlist`
    } catch (queryError: any) {
      queryResult = `Query error: ${queryError.message}`
    }

    return NextResponse.json({ 
      status: 'Database connection test',
      info: dbInfo,
      queryResult
    })
  } catch (error: any) {
    console.error('Database connection test error:', error)
    return NextResponse.json({
      status: 'Error testing database connection',
      error: error.message,
      stack: error.stack,
    }, { status: 500 })
  }
} 