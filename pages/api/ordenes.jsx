import { getOrdenes, postOrden } from "@/lib/prisma/ordenes";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const { ordenes, error } = await getOrdenes();

            if (error) throw new Error(error);

            return res.status(200).json({ ordenes });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    if (req.method === "POST") {
        try {
            const { orden, error } = await postOrden(req.body);

            if (error) throw new Error(error);

            return res.status(200).json({ orden });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader("Allow", ["POST"]);
    res.status(425).end(`Method ${req.method} is not allowed.`);
}
