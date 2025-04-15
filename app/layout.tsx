import type { Metadata } from "next";
import { Comfortaa, Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const comfortaa= Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"]
})

export const noto = Noto_Sans({
  variable: "--font-noto-sans"
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comfortaa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
