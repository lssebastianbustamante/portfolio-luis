import type { Metadata } from "next";
import { Comfortaa, Noto_Sans } from "next/font/google";

import "./styles/globals.css";
import IntlClientProvider from "./IntlClientProvider";
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["vietnamese", "latin"],
  display: "swap",
});

const noto = Noto_Sans({
  variable: "--font-noto-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Portfolio Luis Bustamante",
  description: "Desarrollador Full Stack con experiencia en React, TypeScript y Node.js",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Portfolio Luis Bustamante",
    description:
      "Desarrollador Full Stack con experiencia en React, TypeScript y Node.js",
    url: "/",
    siteName: "Portfolio Luis Bustamante",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Luis Bustamante",
    description:
      "Desarrollador Full Stack con experiencia en React, TypeScript y Node.js",
    creator: "@luisbustamante",
  },
  themeColor: "#fb733c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${noto.variable} ${comfortaa.variable} antialiased`}>
        <IntlClientProvider>

          {children}
        </IntlClientProvider>
      </body>
    </html>
  );
}
