import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASF — Astana Soap Factory | Профессиональная автохимия",
  description:
    "Astana Soap Factory — производитель профессиональной автохимии в Казахстане: автошампуни для бесконтактной мойки, полироли для салона, чернитель шин, очиститель двигателя. Собственное производство в Астане.",
  keywords: [
    "автохимия",
    "автошампунь",
    "бесконтактная мойка",
    "активная пена",
    "Астана",
    "Казахстан",
    "ASF",
    "Astana Soap Factory",
  ],
  openGraph: {
    title: "ASF — Astana Soap Factory | Профессиональная автохимия",
    description:
      "Производитель профессиональной автохимии: автошампуни, полироли, средства для ухода за авто. Собственное производство в Астане.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={GeistSans.className}>
      {/* suppressHydrationWarning: браузерные расширения добавляют свои атрибуты в body до загрузки React */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
