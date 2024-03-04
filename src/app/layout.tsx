import type { Metadata } from 'next';
import './globals.css';
import '../../dist/snes.min.css';
import MainNavigation from '@/components/utilities/MainNavigation';
import { menu } from '@/shared/lib/menu/menu';

export const metadata: Metadata = {
  title: {
    template: '%s | snes.css',
    default: 'snes.css - A retro style css framework',
  },
  authors: [
    { url: 'https://github.com/devMiguelCarrero', name: 'devMiguelCarrero' },
  ],
  description:
    "SNES.CSS is a css framework inspired in the 90's 16bit videogames, bringing a nostalgin pixel art style",
  keywords:
    'css framework, sass, web development, devMiguelCarrero, frontend framework, ui component library, responsive design modular design, styling library, css variables, retro framework, nes, snes, 8bit, 16bit',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MainNavigation menu={menu} />
        <>{children}</>
      </body>
    </html>
  );
}
