import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { skip, take } = req.query
  const count = await prisma.book.count();
  const books = await prisma.book.findMany({
    where: {
      userId: 1,
    },
    skip: skip != null ? parseInt(skip, 10) : undefined,
    take: take != null ? parseInt(take, 10) : undefined,
  })
  res.setHeader('X-Total-Count', count);
  res.status(200).json(books)
}
