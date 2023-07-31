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
  keywords: ['project keyworks'],
  title: 'Project',
  creator: 'Author',
  description: 'Give description',
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
