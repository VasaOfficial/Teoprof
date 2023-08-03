import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import type { MouseEventHandler } from 'react';

const ZoomedImage = (props: {
  onClose: MouseEventHandler<HTMLDivElement> | undefined;
  src: string | StaticImport;
  alt: string;
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={props.onClose}
      // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70"
    >
      <Image
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
