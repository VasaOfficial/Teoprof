/* eslint-disable simple-import-sort/imports */
/* eslint-disable tailwindcss/no-custom-classname */

import Section1 from '@/components/Section1';
import UpBtn from '@/components/ui/upButton';
import Section4 from '@/components/Section4';
import Footer from '../components/Footer';
import Section3 from '../components/Section3';

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Section1 />
        <section className="flex h-[1000px] w-full items-center justify-center bg-section2">
          <div className="text-black">
            <h1>DRUGA SEKCIJA</h1>
          </div>
        </section>
        <Section3 />
        <Section4 />
      </main>
      <Footer />
      <UpBtn />
    </>
  );
}
