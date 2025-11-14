'use client';
import React from 'react';

export type NavItem = { label: string; onClick: () => void };

export default function NavPanel({ items }: { items: NavItem[] }) {
  return (
    <nav className="w-full grid h-[112px] place-items-center mb-8">
      <div className="w-[min(90%,600px)]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <li key={it.label}>
              <button
                onClick={it.onClick}
                className="w-full py-2 text-white/95 text-xl sm:text-2xl font-chango
                           capitalize decoration-white/50 hover:text-white text-center text-shadow-2xs text-shadow-black"
              >
                {it.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
