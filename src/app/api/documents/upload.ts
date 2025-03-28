import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, fileKey, userId } = req.body;
    const document = await prisma.document.create({
      data: { name, fileKey, userId, status: "PENDING" },
    });
    return res.status(201).json(document);
  }
  res.status(405).json({ message: "Method not allowed" });
}