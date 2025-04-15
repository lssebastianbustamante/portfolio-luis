
import { Comfortaa, Noto_Sans } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: 'Portfolio Luis Bustamante',
  description: 'Desarrollador Full Stack con experiencia en React, TypeScript y Node.js',
};

export const comfortaa= Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  preload: true,
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  fallback: ["system-ui", "arial"],
})

export const noto = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["system-ui", "arial"],

  preload: true,
  subsets: ["latin", "vietnamese"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} ${comfortaa.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
