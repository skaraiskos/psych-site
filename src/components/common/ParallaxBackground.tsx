'use client';

import { useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';

/*This defines the SHAPE of the image prop.*/
type ParallaxImage = {
  src: StaticImageData;
  alt: string;
};

/*This defines the props of the component.*/
type ParallaxBackgroundProps = {
  image: ParallaxImage;
  sectionId: string;
};

const ParallaxBackground = ({
  image,
  sectionId,
}: ParallaxBackgroundProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);

      if (!section) return;

      // How far user has scrolled relative to THIS section
      const relativeScroll = window.scrollY - section.offsetTop;

      // Parallax speed
      const speed = 0.5;

      let newOffset = relativeScroll * speed;

      // Prevent image from moving too far upward
      if (newOffset < 0) newOffset = 0;

      // Prevent image from moving too far downward
      if (newOffset > section.offsetHeight * speed) {
        newOffset = section.offsetHeight * speed;
      }

      setOffsetY(newOffset);
    };

    window.addEventListener('scroll', handleScroll);

    // Run once immediately
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionId]);

  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        style={{
          transform: `translateY(${offsetY}px)`,
          objectFit: 'cover',
          filter: 'brightness(100%) opacity(70%)',
        }}
      />
    </div>
  );
};

export default ParallaxBackground;