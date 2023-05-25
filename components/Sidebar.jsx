"use client";

import { usePathname } from "next/navigation";
import { useQuioscoContext } from "@/context/QuioscoContext";
import Image from "next/image";
import Categoria from "./Categoria";

export default function Sidebar() {
    const { categorias } = useQuioscoContext();

    return (
        <>
            <Image
                style={{ width: 300, height: 100 }}
                width={300}
                height={100}
                src="/assets/img/logo.svg"
                alt="Imagen logotipo"
                priority
            />

            {usePathname() !== "/admin" && (
                <>
                    <nav className="mt-10">
                        {categorias.map((categoria) => (
                            <Categoria
                                key={categoria.id}
                                categoria={categoria}
                            />
                        ))}
                    </nav>
                </>
            )}
        </>
    );
}
