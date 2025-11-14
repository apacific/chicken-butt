'use client';
import React from 'react';
import Image from 'next/image';

export default function LogoBlock({
  src = '/images/logo_cb.png',
  alt = 'Restaurant Logo',
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <div className="flex-1 w-full grid place-items-center">
      <Image
        src={src}
        alt={alt}
        width={384}
        height={148}
        className="h-auto"
        style={{
          width: '30vw',
          maxWidth: '420px',
          minWidth: '384px',
        }}
        priority
      />
    </div>
  );
}
