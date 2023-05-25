import { updateOrden } from "@/lib/prisma/ordenes";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { ordenActualizada, error } = await updateOrden(req.query);

            if (error) throw new Error(error);

            return res.status(200).json({ ordenActualizada });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader("Allow", ["POST"]);
    res.status(425).end(`Method ${req.method} is not allowed.`);
}
