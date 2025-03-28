import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { documentId, userId, signatureImg } = req.body;
    const signature = await prisma.signature.create({
      data: {
        documentId,
        userId,
        signatureImg,
        signedAt: new Date(),
      },
    });

    // Atualizar status do documento para "SIGNED"
    await prisma.document.update({
      where: { id: documentId },
      data: { status: "SIGNED" },
    });

    return res.status(201).json(signature);
  }
  res.status(405).json({ message: "Method not allowed" });
}
