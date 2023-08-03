/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import Link from 'next/link';

import Section1Image from '@/public/assets/section1.png';

export default function Section4() {
  return (
    <section className="my-24 flex h-auto w-full flex-col items-center justify-center gap-20 bg-white">
      <h1 className="text-5xl font-bold">Stolarija i Namestaj</h1>
      <div className="flex gap-20">
        <div className="group flex flex-col items-center rounded-lg hover:scale-105 hover:transition-transform hover:duration-300 hover:ease-out">
          <Link href="/pages/stolovi">
            <div className="relative">
              <Image
                className="rounded-t-lg shadow-xl"
                alt="stolovi"
                src={Section1Image}
                width={433}
                height={334}
              />
              <div className=" rounded-b-lg bg-white p-4 text-center shadow-xl">
                <p className="text-xl font-bold text-black">Stolovi</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="group flex flex-col items-center rounded-lg hover:scale-105 hover:transition-transform hover:duration-300 hover:ease-out">
          <Link href="/pages/prozori">
            <div className="relative">
              <Image
                className="rounded-t-lg shadow-xl"
                alt="prozori"
                src={Section1Image}
                width={433}
                height={334}
              />
              <div className=" rounded-b-lg bg-white p-4 text-center shadow-xl">
                <p className="text-xl font-bold text-black">Prozori</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="group flex flex-col items-center rounded-lg hover:scale-105 hover:transition-transform hover:duration-300 hover:ease-out">
          <Link href="/pages/stolice">
            <div className="relative">
              <Image
                className="rounded-t-lg shadow-xl"
                alt="stolice"
                src={Section1Image}
                width={433}
                height={334}
              />
              <div className=" rounded-b-lg bg-white p-4 text-center shadow-xl">
                <p className="text-xl font-bold text-black">Stolice</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex gap-20 text-black">
        <div className="group flex flex-col items-center rounded-lg hover:scale-105 hover:transition-transform hover:duration-300 hover:ease-out">
          <Link href="/pages/stepeniste">
            <div className="relative">
              <Image
                className="rounded-t-lg shadow-xl"
                alt="stepeniste"
                src={Section1Image}
                width={433}
                height={334}
              />
              <div className=" rounded-b-lg bg-white p-4 text-center shadow-xl">
                <p className="text-xl font-bold text-black">Stepeniste</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="group flex flex-col items-center rounded-lg hover:scale-105 hover:transition-transform hover:duration-300 hover:ease-out">
          <Link href="/pages/vrata">
            <div className="relative">
              <Image
                className="rounded-t-lg shadow-xl"
                alt="vrata"
                src={Section1Image}
                width={433}
                height={334}
              />
              <div className=" rounded-b-lg bg-white p-4 text-center shadow-xl">
                <p className="text-xl font-bold text-black">Vrata</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
