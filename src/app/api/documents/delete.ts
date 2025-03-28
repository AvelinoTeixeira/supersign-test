import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { documentId } = req.body;
    await prisma.document.delete({ where: { id: documentId } });
    return res.status(200).json({ message: "Documento excluído com sucesso" });
  }
  res.status(405).json({ message: "Method not allowed" });
}
