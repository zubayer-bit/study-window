import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Initialize Prisma Client. In development, attach to global to avoid
// exhausting connections when using hot reload. No real DB connection
// is established by this scaffold until `DATABASE_URL` is provided.
export const prisma = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

// Example usage (commented):
// await prisma.user.create({ data: { email: 'student@example.com' } })

export default prisma;
