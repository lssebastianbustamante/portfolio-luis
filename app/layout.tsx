import type { Metadata } from "next";
import { headers } from "next/headers";
import { Comfortaa, Noto_Sans } from "next/font/google";

import "./styles/globals.css";
import esMessages from "./components/form/messages/es.json";
import enMessages from "./components/form/messages/en.json";
import IntlClientProvider from "./IntlClientProvider";
import LanguageToggle from "./components/LanguageToggle";
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

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const accept = h.get("accept-language") || "";
  const lang = accept.toLowerCase().startsWith("es") ? "es" : "en";
  const dict = lang === "es" ? (esMessages as Record<string, string>) : (enMessages as Record<string, string>);
  return {
    title: dict["header.name"] || "Portfolio Luis Bustamante",
    description: dict["header.description"] || "Full Stack Developer with experience in React, TypeScript and Node.js",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const accept = h.get("accept-language") || "";
  const serverLang = accept.toLowerCase().startsWith("es") ? "es" : "en";
  return (
    <html lang={serverLang}>
      <body className={`${noto.variable} ${comfortaa.variable} antialiased`}>
        <IntlClientProvider>
          <div className="max-w-5xl mx-auto p-4 flex justify-end">
            <LanguageToggle />
          </div>
          {children}
        </IntlClientProvider>
      </body>
    </html>
  );
}
