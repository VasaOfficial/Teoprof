/* eslint-disable simple-import-sort/imports */
/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import Image from 'next/image';
import BackgroundImage from 'public/assets/background.avif';

import Section1Image from '@/public/assets/section1.png';

export default function Section1() {
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <section className="relative flex h-auto w-full overflow-hidden">
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
      <div className="z-10 mx-auto my-24 flex h-full max-w-[85%] items-center justify-center gap-32">
        <div className="section1 flex w-full max-w-[40%] flex-col justify-center">
          <h1 className="mb-2 w-[46.5625rem] text-5xl font-bold text-white">
            DRVENI PROIZVODI VISOKOG KVALITETA
          </h1>
          <p className="text-2xl text-white">
            Nudimo izradu svih drvenih proizvoda po zelji. DOSTAVA I MONTAZA SU
            BESPLATNE!
          </p>
          <button
            onClick={scrollToBottom}
            className="mt-8 h-14 w-60 bg-white text-2xl font-bold text-black"
            type="button"
          >
            Kontaktirajte Nas
          </button>
        </div>
        <Image
          className="my-24 rounded-lg"
          alt="istaknut enterijer"
          src={Section1Image}
          width={764}
          height={507}
        />
      </div>
    </section>
  );
}
