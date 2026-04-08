import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electricista Matías | Instalaciones, Reparaciones y Luminarias Zona Sur Provincia de Buenos Aires",
  description:
    "Electricista en Zona Sur, Provincia de Buenos Aires. Instalaciones desde cero, detección de fugas, recableados, colocación de luminarias, cámaras de seguridad y reparaciones en general. Presupuesto sin cargo.",
  keywords:
    "electricista, zona sur, provincia de buenos aires, instalaciones eléctricas, reparaciones, luminarias, recableado, cámaras seguridad, detección fugas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 min-h-full`}>
        <Navbar />
        <main>{children}</main>
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
