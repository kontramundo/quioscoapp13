"use client";

import useSWR from "swr";
import axios from "axios";

import Orden from "@/components/Orden";

export default function AdminPage() {
    const fetcher = () =>
        axios("/api/ordenes").then((datos) => datos.data.ordenes);

    const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {
        refreshInterval: 100,
    });

    return (
        <>
            <h1 className="text-4xl font-black">Administración</h1>
            <p className="text-2xl my-10">Administra las ordenes</p>

            {data && data.length ? (
                data.map((orden) => <Orden key={orden.id} orden={orden} />)
            ) : (
                <p>No hay ordenes pendientes</p>
            )}
        </>
    );
}
