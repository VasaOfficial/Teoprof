import Image from 'next/image';

import EmailIcon from '@/public/assets/Email.png';
import GoogleMapIcon from '@/public/assets/Google Map.png';
import PhoneIcon from '@/public/assets/phone icon.png';

export default function Footer() {
  return (
    <footer className="flex h-[700px] w-full flex-col items-center justify-evenly bg-footer ">
      <div className="flex ">
        <iframe
          title="googleMap"
          id="gmap_canvas"
          width="800px"
          height="400px"
          src="https://maps.google.com/maps?width=700&amp;height=350&amp;hl=en&amp;q=Belgrade, Kneza Milosa 17&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
        <div className="ml-32 mt-20 flex flex-col italic text-white">
          <p className="text-4xl font-bold tracking-wide underline">
            Contact info
          </p>
          <br />
          <br />
          <div className="flex flex-col gap-5 text-3xl font-semibold">
            <div className="flex gap-3">
              <Image src={PhoneIcon} alt="phone icon" width={40} height={30} />
              <p>06523213122</p>
            </div>
            <div className="flex gap-3">
              <Image
                src={GoogleMapIcon}
                alt="phone icon"
                width={40}
                height={30}
              />
              <p>Beograd, Kneza Milosa 17</p>
            </div>
            <div className="flex gap-3">
              <Image src={EmailIcon} alt="phone icon" width={40} height={30} />
              <p>teoprof@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full max-w-[85%] border-t border-gray-500" />
      <p className="text-white">
        Copyright © 2023 Teoprof. Sva prava su zadržana.
      </p>
    </footer>
  );
}
