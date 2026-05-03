import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFab from "@/components/WhatsAppFab";

export const metadata: Metadata = {
  metadataBase: new URL('https://alianzadeoro.es'),
  title: "Alianza de Oro | Panadería, Pastelería y Restaurante en Fuenlabrada",
  description: "Obrador artesano de pan, pastelería tradicional y restaurante con horno de leña en Loranca, Fuenlabrada. Desayunos, comidas, cenas y encargos personalizados.",
  keywords: "pastelería fuenlabrada, panadería loranca, restaurante parque miraflores, tartas por encargo, asados horno de leña",
  openGraph: {
    title: "Alianza de Oro | Panadería, Pastelería y Restaurante",
    description: "Obrador artesano de pan, pastelería tradicional y restaurante con horno de leña en Loranca, Fuenlabrada.",
    url: 'https://alianzadeoro.es',
    siteName: 'Alianza de Oro',
    images: [
      {
        url: '/opengraph-image.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
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
