import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import type { MouseEventHandler } from 'react';

const ZoomedImage = (props: {
  onClose: MouseEventHandler<HTMLDivElement> | undefined;
  src: string | StaticImport;
  alt: string;
}) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-[70]">
      <Image
        onClick={props.onClose}
        src={props.src}
        alt={props.alt}
        className="rounded-2xl"
        width={1300}
        height={1000}
      />
    </div>
  );
};
export default ZoomedImage;
