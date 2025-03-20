import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create a new Prisma client if one doesn't exist
const prismaBase = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query', 'error', 'warn'],
})

// Explicitly handle connection in serverless environments
export const prisma = prismaBase.$extends({
  query: {
    async $allOperations({ args, query, operation }: { 
      args: unknown; 
      query: (args: unknown) => Promise<unknown>; 
      operation: string 
    }) {
      try {
        return await query(args)
      } catch (error: any) {
        console.error(`Prisma query error in operation ${operation}:`, error)
        throw error
      }
    },
  },
})

// Save Prisma client to global object in non-production environments
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismaBase 