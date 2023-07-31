/* eslint-disable simple-import-sort/imports */
/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import { useRef } from 'react';

import Image from 'next/image';
import BackgroundImage from 'public/assets/background.avif';
import Section1 from '@/public/assets/section1.png';

import Navbar from '../components/Navbar';

export default function Home() {
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleScrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <main className="flex flex-col">
        <Navbar />
        <section className="relative flex h-[1000px] w-full overflow-hidden">
          <Image
            src={BackgroundImage}
            alt="background image"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={100}
            sizes="100vw"
          />
          <div
            className="absolute left-0 top-0 h-full w-full bg-black opacity-60"
            style={{ zIndex: 1 }}
          />
          <div className=" z-10 mx-auto flex h-full max-w-[85%] items-center justify-center gap-32">
            <div className="section1 flex w-full max-w-[40%] flex-col justify-center">
              <h1 className="mb-2 w-[46.5625rem] text-5xl font-bold text-white">
                DRVENI PROIZVODI VISOKOG KVALITETA
              </h1>
              <p className="text-2xl text-white">
                Nudimo izradu svih drvenih proizvoda po zelji. DOSTAVA I MONTAZA
                SU BESPLATNE!
              </p>
              <button
                onClick={handleScrollToBottom}
                className="mt-8 h-14 w-60 bg-white text-2xl font-bold text-black"
                type="button"
              >
                Kontaktirajte Nas
              </button>
            </div>
            <Image
              className="rounded-lg"
              alt="istaknut enterijer"
              src={Section1}
              width={764}
              height={507}
            />
          </div>
        </section>
        <section className="flex h-[1000px] w-full items-center justify-center bg-section2">
          <div className="text-black">
            <h1>DRUGA SEKCIJA</h1>
          </div>
        </section>
        <section className="bg-section-3 flex h-[1000px] w-full items-center justify-center bg-section3">
          <div className="text-black">
            <h1>TRECA SEKCIJA</h1>
          </div>
        </section>
        <section className="flex h-[1000px] w-full items-center justify-center bg-white">
          <div className="text-black">
            <h1>CETVRTA SEKCIJA</h1>
          </div>
        </section>
      </main>
      <footer ref={bottomRef} className="h-[300px] w-full bg-footer">
        FOOTER
      </footer>
    </>
  );
}
