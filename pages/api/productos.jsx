import { getProductos } from "@/lib/prisma/productos";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const { productos, error } = await getProductos();

            if (error) throw new Error(error);

            return res.status(200).json({ productos });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader("Allow", ["GET"]);
    res.status(425).end(`Method ${req.method} is not allowed.`);
}
