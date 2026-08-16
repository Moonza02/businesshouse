import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${site.name} — ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Onebo",
    "OneboFX",
    "BabyDiary",
    "CleanPro HoReCa",
    "Tashkent",
    "trading",
    "bolalar kiyimlari",
    "HoReCa cleaning",
  ],
  openGraph: {
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    type: "website",
    locale: "uz_UZ",
    url: "/",
    siteName: site.name,
    images: [{ url: "/og-cover.png", width: 1536, height: 1024, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    images: ["/og-cover.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d0e",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
