'use client';
import React, { useState } from 'react';
import type { SectionKey, MenuItem } from '@/types/Menu';
import { useOrder } from '@/context/OrderContext';

export default function SubsectionGallery({
  section,
  subsection,
  items,
  index,
  setIndex,
  onBack,
  onOpenOrder,
}: {
  section: SectionKey;
  subsection: string;
  items: MenuItem[];
  index: number;
  setIndex: (i: number) => void;
  onBack: () => void;
  onOpenOrder: () => void;
}) {
  const { addItem } = useOrder();
  const current = items[index];
  const [expanded, setExpanded] = useState(false);

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setExpanded(false);
    setIndex((index - 1 + items.length) % items.length);
  };
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setExpanded(false);
    setIndex((index + 1) % items.length);
  };

  const handleToggle = () => setExpanded((v) => !v);

  return (
    <div className="h-full w-full p-6 relative flex flex-col">
      {/* Back + subsection header */}
      <header className="absolute left-6 top-6 flex items-center gap-3 z-10">
        <button
          onClick={(e) => { e.stopPropagation(); onBack(); }}
          aria-label="Back"
          className="rounded-lg text-2xl hover:text-orange-400 leading-none hover:opacity-90 font-chango mr-8 text-white text-shadow-2xs text-shadow-black hover:text-shadow-white"
        >
          ↩

        </button>
        <h3 className="text-white/90 text-lg sm:text-xl uppercase tracking-wide font-chango">
          {section} · {subsection}
        </h3>
      </header>

      {/* Click/Tap area to toggle details */}
      <div
        className="flex-1 flex flex-col justify-end cursor-pointer"
        onClick={handleToggle}
      >
        {current && (
          <div className="bg-black/30 backdrop-blur-[1px] p-5 sm:p-6">
            {/* Title & price always visible */}
            <div className="flex items-baseline justify-between gap-4">
              <h4 className="text-white text-2xl sm:text-3xl font-chango">
                {current.name}
              </h4>
              <span className="text-green-300 text-2xl font-chango">
                ${current.price.toFixed(2)}
              </span>
            </div>

            {/* Details only when expanded */}
            {expanded && (
              <>
                {current.description && (
                  <p className="mt-2 text-white/90 text-3xl leading-relaxed font-engagement">
                    {current.description}
                  </p>
                )}

                {/* Add-to-order row */}
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem(current); // uses existing context; quantity/notes optional
                    }}
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-none font-chango text-shadow-2xs text-shadow-black"
                  >
                    Add to Order
                  </button>

                  <button
                    onClick={(e) => { e.stopPropagation(); onOpenOrder(); }}
                    className="px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-none font-chango text-shadow-2xs text-shadow-black"
                  >
                    View Order
                  </button>
                </div>
              </>
            )}

            {/* Nav controls (don’t toggle details) */}
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={prev}
                className="px-3 py-1.5 bg-white/15 text-white hover:bg-white/25 rounded-none font-chango"
              >
                ‹ Prev
              </button>
              <button
                onClick={next}
                className="px-3 py-1.5 bg-white/15 text-white hover:bg-white/25 rounded-none font-chango"
              >
                Next ›
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
