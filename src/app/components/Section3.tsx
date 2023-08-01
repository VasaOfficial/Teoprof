import Image from 'next/image';

import Section1 from '@/public/assets/section1.png';

export default function Section3() {
  return (
    <section className="bg-section-3 flex h-[2100px] w-full flex-row items-center justify-center gap-40 bg-section3">
      <div className="flex flex-col gap-36 text-black">
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold italic text-black">
          <a href="/">
            <Image
              className="rounded-lg"
              alt="spavace sobe"
              src={Section1}
              width={650}
              height={507}
            />
          </a>
          <p>Spavace Sobe</p>
        </div>
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold italic text-black">
          <a href="/">
            <Image
              className="rounded-lg"
              alt="kuhinje"
              src={Section1}
              width={650}
              height={507}
            />
          </a>
          <p>Kuhinje</p>
        </div>
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold italic text-black">
          <a href="/">
            <Image
              className="rounded-lg"
              alt="hodnici"
              src={Section1}
              width={650}
              height={507}
            />
          </a>
          <p>Hodnici</p>
        </div>
      </div>
      <div className="flex flex-col gap-36 text-black ">
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold italic text-black">
          <a href="/">
            <Image
              className="rounded-lg"
              alt="dneven sobe"
              src={Section1}
              width={650}
              height={507}
            />
          </a>
          <p>Dnevne Sobe</p>
        </div>
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold italic text-black">
          <a href="/">
            <Image
              className="rounded-lg"
              alt="kupatila"
              src={Section1}
              width={650}
              height={507}
            />
          </a>
          <p>Kupatila</p>
        </div>
        <div className="flex flex-col items-center gap-10 text-3xl font-extrabold italic text-black">
          <a href="/">
            <Image
              className="rounded-lg"
              alt="trpezarija"
              src={Section1}
              width={650}
              height={507}
            />
          </a>
          <p>Trpezarija</p>
        </div>
      </div>
    </section>
  );
}
