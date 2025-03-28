import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { userId } = req.query;
    const documents = await prisma.document.findMany({ where: { userId: String(userId) } });
    return res.status(200).json(documents);
  }
  res.status(405).json({ message: "Method not allowed" });
}
