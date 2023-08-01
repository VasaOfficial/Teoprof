/* eslint-disable simple-import-sort/imports */
/* eslint-disable tailwindcss/no-custom-classname */

import Section1 from '@/components/Section1';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Section3 from '../components/Section3';

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Navbar />
        <Section1 />
        <section className="flex h-[1000px] w-full items-center justify-center bg-section2">
          <div className="text-black">
            <h1>DRUGA SEKCIJA</h1>
          </div>
        </section>
        <Section3 />
        <section className="flex h-[1000px] w-full items-center justify-center bg-white">
          <div className="text-black">
            <h1>CETVRTA SEKCIJA</h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
