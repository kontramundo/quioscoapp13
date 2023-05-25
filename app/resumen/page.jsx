"use client";

import { useQuioscoContext } from "@/context/QuioscoContext";
import ResumenProducto from "@/components/ResumenProducto";

export default function ResumenPage() {
    const { pedido } = useQuioscoContext();
    return (
        <>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Revisa tu Pedido</p>
            {pedido.length === 0 ? (
                <p className="text-center text-2xl">
                    No hay elementos en tu pedido
                </p>
            ) : (
                pedido.map((producto) => (
                    <ResumenProducto key={producto.id} producto={producto} />
                ))
            )}
        </>
    );
}
