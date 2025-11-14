'use client';
import React from 'react';
import LogoBlock from '@/components/ui/LogoBlock';
import NavPanel from '@/components/ui/NavPanel';

export default function HomeCard({
  onFood,
  onBeverages,
}: {
  onFood: () => void;
  onBeverages: () => void;
}) {
  return (
    <div className="h-full w-full p-6 flex flex-col">
      <LogoBlock />
      <NavPanel
        items={[
          { label: 'FOOD', onClick: onFood },
          { label: 'BEVERAGES', onClick: onBeverages },
        ]}
      />
    </div>
  );
}
