'use client';
import React, { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type OverlayTone = 'none' | 'light' | 'medium' | 'dark';
type BgFit = 'cover' | 'contain';

export default function CardShell({
  children,
  className,
  style,
  bgImage,
  overlay = 'medium',
  bgFit = 'cover',
  centerContent, // optional centered layer (e.g., for a logo) consistent across views
  bgClassName,   // optional: apply classes specifically to the background layer
}: PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  bgImage?: string;
  overlay?: OverlayTone;
  bgFit?: BgFit;
  centerContent?: ReactNode;
  bgClassName?: string;
}>) {
  // Overlay presets
  const overlayClass =
    overlay === 'none'
      ? 'bg-transparent'
      : overlay === 'light'
      ? 'bg-gradient-to-b from-black/15 via-black/10 to-black/20'
      : overlay === 'medium'
      ? 'bg-gradient-to-b from-black/25 via-black/20 to-black/30'
      : 'bg-gradient-to-b from-black/30 via-black/20 to-black/40';

  // Background sizing preset
  const bgFitClass = bgFit === 'contain' ? 'bg-contain bg-center bg-no-repeat' : 'bg-cover bg-center';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/85">
      <div
        className={cn(
          'relative overflow-hidden rounded-none shadow-xl',
          'portrait:w-[92vw] portrait:aspect-[1/1.618] portrait:max-h-[92vh]',
          'landscape:h-[92vh] landscape:aspect-[1.618/1] landscape:max-w-[92vw]',
          // Background defaults (can be overridden via bgClassName or className)
          bgFitClass,
          bgClassName,
          className
        )}
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          ...style,
        }}
      >
        {/* Overlay */}
        {overlay !== 'none' && (
          <div
            className={cn(
              'pointer-events-none absolute inset-0',
              overlayClass
            )}
          />
        )}

        {/* Optional centered content layer (e.g., a consistent logo wrapper) */}
        {centerContent && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="">{centerContent}</div>
          </div>
        )}

        {/* Foreground */}
        <div className="relative h-full w-full overflow-hidden text-shadow-2xs text-shadow-black">
          {children}
        </div>
      </div>
    </div>
  );
}
