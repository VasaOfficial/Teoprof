import Image from 'next/image';

import Sto from '@/public/assets/sto.png';

export default function Hodnici() {
  return (
    <section className="m-32 flex flex-col items-center">
      <h1 className="m-10 text-center text-4xl font-bold">Dnevne Sobe</h1>
      <div className="mb-20 flex max-w-[90%] flex-col justify-start">
        <h2 className="mb-8 flex justify-start text-2xl font-bold text-black">
          Vrste Proizvoda
        </h2>
        <div className="flex justify-start gap-10">
          <div className="flex flex-col gap-5">
            <Image
              className="rounded-3xl"
              src={Sto}
              alt="sto"
              width={400}
              height={400}
              quality={100}
            />
            <h3 className="text-xl font-bold">Trpezariski sto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Image
              className="rounded-3xl"
              src={Sto}
              alt="sto"
              width={400}
              height={400}
              quality={100}
            />
            <h3 className="text-xl font-bold">Trpezariski sto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Image
              className="rounded-3xl"
              src={Sto}
              alt="sto"
              width={400}
              height={400}
              quality={100}
            />
            <h3 className="text-xl font-bold">Trpezariski sto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-20 w-full max-w-[90%] border-t border-gray-500" />
    </section>
  );
}
