import prisma from ".";

export async function getCategorias() {
    try {
        const categorias = await prisma.categoria.findMany({
            include: {
                productos: true,
            },
        });
        return { categorias };
    } catch (error) {
        return { error };
    }
}
