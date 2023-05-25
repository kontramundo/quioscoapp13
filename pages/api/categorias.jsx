import { getCategorias } from "@/lib/prisma/categorias";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const { categorias, error } = await getCategorias();

            if (error) throw new Error(error);

            return res.status(200).json({ categorias });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader("Allow", ["GET"]);
    res.status(425).end(`Method ${req.method} is not allowed.`);
}
