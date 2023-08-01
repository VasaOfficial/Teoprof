'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const UpBtn = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsButtonVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="scroll-to-top"
      type="button"
      className="fixed bottom-16 right-16 z-10 h-12 w-12 rounded-full bg-emerald-400 p-2 text-xl leading-3 text-black shadow-md transition-all hover:scale-105"
      onClick={handleClick}
      style={{
        opacity: isButtonVisible ? 1 : 0,
        transform: `translateY(${isButtonVisible ? '0' : '20px'})`,
        transition: 'opacity 0.5s, transform 0.5s',
        pointerEvents: isButtonVisible ? 'auto' : 'none',
      }}
    >
      <Image
        src="/assets/up.svg"
        alt="scroll to top icon"
        height={50}
        width={50}
      />
    </button>
  );
};

export default UpBtn;
