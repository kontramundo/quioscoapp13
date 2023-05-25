import { QuioscoProvider } from "@/context/QuioscoContext";
import Sidebar from "@/components/Sidebar";
import ModalProducto from "@/components/ModalProducto";
import Pasos from "@/components/Pasos";

import "./globals.css";

export const metadata = {
    title: "Cafe",
    description: "Quiosco Cafetería",
};

export default async function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <body id="myApp">
                    <QuioscoProvider>
                        <div className="md:flex">
                            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                                <Sidebar />
                            </aside>
                            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                                <div className="p-10">
                                    <Pasos />
                                    {children}
                                </div>
                            </main>
                        </div>
                        <ModalProducto />
                    </QuioscoProvider>
                </body>
            </html>
        </>
    );
}
