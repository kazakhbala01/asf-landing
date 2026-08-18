import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Analytics from "@/components/Analytics";
import FloatingActions from "@/components/FloatingActions";
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

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Astana Soap Factory",
  alternateName: "ASF",
  description:
    "Казахстанский производитель профессиональной автохимии: автошампуни для бесконтактной мойки, полироли, чернитель шин, очиститель двигателя.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Астана",
    addressCountry: "KZ",
    streetAddress: "ул. Сокпакбаева 20/2",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7-747-378-3166",
    contactType: "sales",
    availableLanguage: ["ru", "kk"],
  },
  sameAs: [
    "https://www.instagram.com/astanasoapfactory",
    "https://t.me/Astanasoapfactory",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={GeistSans.className}>
      {/* suppressHydrationWarning: браузерные расширения добавляют свои атрибуты в body до загрузки React */}
      <body suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  );
}
