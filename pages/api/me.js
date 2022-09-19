import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  let user;

  if (req.method === 'POST') {
    const { id, ...data } = req.body
    user = await prisma.user.update({
      where: { id },
      data,
    })
  }
  if (req.method === 'GET') {
    user = await prisma.user.findUnique({
      where: {
        id: 1,
      },
    })
  }
  res.status(200).json(user)
}
