import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFab from "@/components/WhatsAppFab";

export const metadata: Metadata = {
  title: "Alianza de Oro | Panadería, Pastelería y Restaurante en Fuenlabrada",
  description: "Obrador artesano de pan, pastelería tradicional y restaurante con horno de leña en Loranca, Fuenlabrada. Desayunos, comidas, cenas y encargos personalizados.",
  keywords: "pastelería fuenlabrada, panadería loranca, restaurante parque miraflores, tartas por encargo, asados horno de leña",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <StructuredData />
        <ScrollReveal />
        <WhatsAppFab />
        {children}
        <Footer />
      </body>
    </html>
  );
}
