'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ParallaxBackground = ({ image, sectionId }: { image: Image; sectionId: string; }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const relativeScroll = window.scrollY - section.offsetTop;
      const speed = 0.5; // parallax ratio
      let newOffset = relativeScroll * speed;

      // clamp to 0..max
      if (newOffset < 0) newOffset = 0;
      if (newOffset > section.offsetHeight * speed)
        newOffset = section.offsetHeight * speed;

      setOffsetY(newOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        style={{
          transform: `translateY(${offsetY}px)`,
          objectFit: 'cover',
          filter: 'brightness(100%) opacity(70%)',
        }}
        priority
      />
    </div>
  );
};

export default ParallaxBackground;