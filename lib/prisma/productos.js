import prisma from ".";

export async function getProductos() {
    try {
        const productos = await prisma.producto.findMany();
        return { productos };
    } catch (error) {
        return { error };
    }
}
