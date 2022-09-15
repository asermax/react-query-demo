import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  })
  res.status(200).json(user)
}
