'use client';
import React from 'react';
import type { SectionKey } from '@/types/Menu';
import LogoBlock from '@/components/ui/LogoBlock';
import NavPanel from '@/components/ui/NavPanel';

export default function SectionCard({
  section,
  subsections,
  onBack,
  onPick,
}: {
  section: SectionKey;
  subsections: string[];
  onBack: () => void;
  onPick: (sub: string) => void;
}) {
  return (
    <div className="h-full w-full p-6 relative flex flex-col">
      {/* Back + title (absolute so it doesn't push layout) */}
      <header className="absolute left-6 top-6 flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Back"
          className="rounded-lg text-2xl hover:text-orange-400 leading-none hover:opacity-90 font-chango mr-8 text-white text-shadow-2xs text-shadow-black hover:text-shadow-white"
        >
          ↩
        </button>
        <h2 className="text-white/90 text-xl sm:text-2xl font-chango uppercase tracking-wide text-shadow-2xs text-shadow-black">
          {section}
        </h2>
      </header>

      <LogoBlock />

      <NavPanel
        items={subsections.map((s) => ({ label: s, onClick: () => onPick(s) }))}
      />
    </div>
  );
}
