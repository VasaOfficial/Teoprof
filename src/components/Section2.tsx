/* eslint-disable simple-import-sort/imports */

'use client';

import { type SetStateAction, useState } from 'react';
import { Montserrat } from 'next/font/google';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Section1Image from 'public/assets/section1.png';

import ZoomedImage from './ui/zoomedImage';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function Section2() {
  const [zoomedImage, setZoomedImage] = useState<StaticImageData | null>(null);

  const openZoomedImage = (src: SetStateAction<StaticImageData | null>) => {
    setZoomedImage(src);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <section className="flex h-[830px] w-full items-center justify-center bg-section2 transition">
      {zoomedImage && (
        <ZoomedImage
          src={zoomedImage}
          alt="Zoomed Image"
          onClose={closeZoomedImage}
        />
      )}
      <div className="flex flex-col items-center">
        <p className={`${montserrat.variable} text-5xl font-extrabold`}>
          Istaknuti Proizvodi
        </p>
        <div className="my-20 flex gap-20">
          <div className="flex cursor-pointer flex-col items-center gap-10 text-2xl font-extrabold">
            <Image
              className="rounded-2xl shadow-lg shadow-stone-400"
              alt="trpezarijski sto1"
              src={Section1Image}
              width={500}
              height={500}
              onClick={() => openZoomedImage(Section1Image)}
            />
            <p>Trpezarijski sto</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center gap-10 text-2xl font-extrabold ">
            <Image
              className="rounded-2xl  shadow-lg shadow-stone-400"
              alt="trpezarijski sto2"
              src={Section1Image}
              width={500}
              height={500}
              onClick={() => openZoomedImage(Section1Image)}
            />
            <p>Trpezarijski sto</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center gap-10 text-2xl font-extrabold">
            <Image
              className="rounded-2xl  shadow-lg shadow-stone-400"
              alt="trpezarijski sto3"
              src={Section1Image}
              width={500}
              height={500}
              onClick={() => openZoomedImage(Section1Image)}
            />
            <p>Trpezarijski sto</p>
          </div>
        </div>
      </div>
    </section>
  );
}
