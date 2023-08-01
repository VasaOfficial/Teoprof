import './global.css';

import type { Metadata } from 'next';
import { Cabin } from 'next/font/google';

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin',
});

export const metadata: Metadata = {
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['namestaj, stolarija, prozori i stolice, drvo'],
  title: 'Teoprof',
  creator: 'Vasilije i Aleksa',
  description:
    'Dobrodošli na naš sajt posvećen nameštaju i stolariji od drveta - vašem jedinstvenom izvoru inspiracije i rešenja za stvaranje toplih i elegantnih prostora u vašem domu ili poslovnom okruženju. Naša stranica je dizajnirana kako bi vam pružila širok izbor kvalitetnih proizvoda od drveta koji će zadovoljiti vaše najrazličitije potrebe i estetske preferencije.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
