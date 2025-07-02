import { prisma } from '@qqmc/database';

export default defineEventHandler(async () => {
  return await prisma.user.findMany();
});
