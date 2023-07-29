import Image from 'next/image';
import BackgroundImage from 'public/assets/background.avif';

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        {/* <Navbar /> */}
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
        </section>
        <section className="flex h-[1000px] w-full items-center justify-center bg-white">
          <div className="text-black">
            <h1>DRUGA SEKCIJA</h1>
          </div>
        </section>
        <section className="flex h-[1000px] w-full items-center justify-center bg-section-3">
          <div className="text-black">
            <h1>TRECA SEKCIJA</h1>
          </div>
        </section>
        <section className="flex h-[1000px] w-full items-center justify-center bg-section-4">
          <div className="text-black">
            <h1>CETVRTA SEKCIJA</h1>
          </div>
        </section>
      </main>
      <footer className="h-[300px] w-full bg-footer">FOOTER</footer>
    </>
  );
}
