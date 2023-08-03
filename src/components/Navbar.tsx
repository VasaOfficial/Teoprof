'use client';

import 'src/app/global.css';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/assets/logo.png';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function Navbar() {
  const handleKontaktClick = () => {
    const scrollPosition = document.body.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="fixed top-0 z-50 max-h-24 w-full bg-black">
      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={`${montserrat.variable} mx-auto flex max-w-[85%] items-center justify-between font-montserrat font-semibold`}
      >
        <Link href="/">
          <Image src={Logo} alt="logo" width={200} height={200} priority />
        </Link>
        <div className="flex items-center gap-5">
          <Menubar className=" border-none bg-black font-semibold text-white">
            <MenubarMenu>
              <MenubarTrigger className="hover-underline-bolder cursor-pointer text-base font-semibold">
                Pocetna
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="hover-underline-bolder cursor-pointer text-base font-semibold">
                Stolarija i Namestaj
              </MenubarTrigger>
              <MenubarContent className="font-semibold">
                <Link href="/pages/stolovi">
                  <MenubarItem>Stolovi</MenubarItem>
                </Link>
                <Link href="/pages/stolice">
                  <MenubarItem>Stolice</MenubarItem>
                </Link>
                <Link href="/pages/prozori">
                  <MenubarItem>Prozori</MenubarItem>
                </Link>
                <Link href="/pages/stepeniste">
                  <MenubarItem>Stepenista</MenubarItem>
                </Link>
                <Link href="/pages/vrata">
                  <MenubarItem>Vrata</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="hover-underline-bolder cursor-pointer text-base font-semibold">
                Enterijer
              </MenubarTrigger>
              <MenubarContent className="font-semibold">
                <Link href="/pages/spavace-sobe">
                  <MenubarItem>Spavace sobe</MenubarItem>
                </Link>
                <Link href="/pages/dnevne-sobe">
                  <MenubarItem>Dnevni boravak</MenubarItem>
                </Link>
                <Link href="/pages/kuhinja">
                  <MenubarItem>Kuhinja</MenubarItem>
                </Link>
                <Link href="/pages/kupatila">
                  <MenubarItem>Kupatila</MenubarItem>
                </Link>
                <Link href="/pages/hodnici">
                  <MenubarItem>Hodnici</MenubarItem>
                </Link>
                <Link href="/pages/trpezarija">
                  <MenubarItem>Trpezarija</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                onClick={handleKontaktClick}
                className="hover-underline-bolder cursor-pointer text-base font-semibold"
              >
                Kontakt
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </nav>
  );
}
