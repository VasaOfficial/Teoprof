/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import Link from 'next/link';

import Section1 from '@/public/assets/section1.png';

export default function Section3() {
  return (
    <section className="bg-section-3 flex h-[2100px] w-full flex-row items-center justify-center gap-40 bg-section3">
      <div className="flex flex-col gap-36 text-black">
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold text-black">
          <Link href="/pages/spavace-sobe">
            <Image
              className="rounded-lg"
              alt="spavace sobe"
              src={Section1}
              width={650}
              height={507}
            />
          </Link>
          <p>Spavace Sobe</p>
        </div>
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold text-black">
          <Link href="/pages/kuhinja">
            <Image
              className="rounded-lg"
              alt="kuhinja"
              src={Section1}
              width={650}
              height={507}
            />
          </Link>
          <p>Kuhinje</p>
        </div>
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold text-black">
          <Link href="/pages/hodnici">
            <Image
              className="rounded-lg"
              alt="hodnici"
              src={Section1}
              width={650}
              height={507}
            />
          </Link>
          <p>Hodnici</p>
        </div>
      </div>
      <div className="flex flex-col gap-36 text-black ">
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold text-black">
          <Link href="/pages/dnevne-sobe">
            <Image
              className="rounded-lg"
              alt="dnevne sobe"
              src={Section1}
              width={650}
              height={507}
            />
          </Link>
          <p>Dnevne Sobe</p>
        </div>
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold text-black">
          <Link href="/pages/kupatila">
            <Image
              className="rounded-lg"
              alt="kupatila"
              src={Section1}
              width={650}
              height={507}
            />
          </Link>
          <p>Kupatila</p>
        </div>
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold text-black">
          <Link href="/pages/trpezarija">
            <Image
              className="rounded-lg"
              alt="trpezarija"
              src={Section1}
              width={650}
              height={507}
            />
          </Link>
          <p>Trpezarija</p>
        </div>
      </div>
    </section>
  );
}
