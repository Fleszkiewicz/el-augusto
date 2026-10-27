import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'El Augusto | Hospedaje de Campo & Cabañas en Baradero',
  description: 'Descansá en un entorno natural único sobre el río en Baradero. Cabañas de gran capacidad, canotaje, cabalgatas y espacio al aire libre.',
  openGraph: {
    title: 'El Augusto | Hospedaje de Campo en Baradero',
    description: 'Cabañas amplias con vista al río, actividades al aire libre y relajación total.',
    images: ['/og-image.jpg'],
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}