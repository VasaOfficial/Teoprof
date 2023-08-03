/* eslint-disable simple-import-sort/imports */
/* eslint-disable tailwindcss/no-custom-classname */

import Section1 from '@/components/Section1';
import UpBtn from '@/components/ui/upButton';
import Section4 from '@/components/Section4';
import Section2 from '@/components/Section2';
import Footer from '../components/Footer';
import Section3 from '../components/Section3';

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <Footer />
      <UpBtn />
    </>
  );
}
