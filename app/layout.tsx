import { Inter, Noto_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const noto = Noto_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans'
});

export const metadata = {
  title: 'Portfolio Luis Bustamante',
  description: 'Desarrollador Full Stack con experiencia en React, TypeScript y Node.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${noto.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
