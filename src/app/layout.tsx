import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import { Toaster } from 'sonner';

import Layout from '@/components/layout';
import Providers from '@/components/providers';

import { cn } from '@/lib/utils';

import './globals.css';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});
const fontPoppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'European University Of Bangladesh',
  description:
    'The European University of Bangladesh has started its journey towards achieving excellence in higher education in this country. In its consideration, the fount of progress in Europe has been higher education centering around science and technology. In search of excellence, the European University of Bangladesh will, go at length, to emulate the ways traversed by universities and institutions of higher education and learning in Europe.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontPoppins.variable
        )}
      >
        <Providers>
          <Layout>{children}</Layout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
