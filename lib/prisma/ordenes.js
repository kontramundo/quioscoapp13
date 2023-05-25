import prisma from ".";

export async function getOrdenes(request) {
    try {
        const ordenes = await prisma.orden.findMany({
            where: {
                estado: false,
            },
        });
        return { ordenes };
    } catch (error) {
        return { error };
    }
}

export async function postOrden(request) {
    try {
        const orden = await prisma.orden.create({
            data: {
                nombre: request.nombre,
                total: request.total,
                pedido: request.pedido,
                fecha: request.fecha,
            },
        });
        return { orden };
    } catch (error) {
        return { error };
    }
}

export async function updateOrden(request) {
    try {
        const ordenActualizada = await prisma.orden.update({
            where: {
                id: parseInt(request.id),
            },
            data: {
                estado: true,
            },
        });
        return { ordenActualizada };
    } catch (error) {
        return { error };
    }
}
