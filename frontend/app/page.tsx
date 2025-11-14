'use client';

import { useEffect, useMemo, useState } from 'react';
import CardShell from '@/components/CardShell';
import HomeCard from '@/components/cards/HomeCard';
import SectionCard from '@/components/cards/SectionCard';
import SubsectionGallery from '@/components/cards/SubsectionGallery';
import OrderCard from '@/components/cards/OrderCard';
import type { SectionKey, MenuItem } from '@/types/Menu';
import { fetchMenu, groupMenu, type GroupedMenu } from '@/lib/menuService';

type View =
  | { name: 'home' }
  | { name: 'section'; section: SectionKey }
  | { name: 'subsection'; section: SectionKey; subsection: string; index: number }
  | { name: 'order'; from?: { section: SectionKey; subsection: string; index: number } };

export default function Page() {
  const [view, setView] = useState<View>({ name: 'home' });
  const [items, setItems] = useState<MenuItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load from backend via /api/menu
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await fetchMenu();
        if (alive) setItems(data);
      } catch (e: unknown) {
        if (alive) {
          setError(
            typeof e === 'object' && e !== null && 'toString' in e ? String(e) : 'Failed to load menu'
          );
        }
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // Group once items are available
  const grouped: GroupedMenu | null = useMemo(() => {
    if (!items) return null;
    return groupMenu(items);
  }, [items]);

  // Navigation helpers (no `any` in the state updater)
  const goHome = () => setView({ name: 'home' });
  const goSection = (section: SectionKey) => setView({ name: 'section', section });
  const goSubsection = (section: SectionKey, subsection: string) =>
    setView({ name: 'subsection', section, subsection, index: 0 });
  const openOrder = () =>
    setView((v): View =>
      v.name === 'subsection'
        ? { name: 'order', from: { section: v.section, subsection: v.subsection, index: v.index } }
        : { name: 'order' }
    );

  // Background image per current card
  const bgImage =
    view.name === 'subsection' && grouped
      ? grouped[view.section][view.subsection]?.[view.index]?.imagePath
      : undefined;

  // Loading / error shell
  if (error) {
    return (
      <CardShell overlay="medium" bgFit="cover">
        <div className="flex h-full items-center justify-center">
          <p className="text-white/90">{error}</p>
        </div>
      </CardShell>
    );
  }

  if (!grouped) {
    return (
      <CardShell overlay="medium" bgFit="cover">
        <div className="flex h-full items-center justify-center">
          <p className="text-white/90">Loading menu…</p>
        </div>
      </CardShell>
    );
  }

  return (
    <CardShell
      bgImage={bgImage}
      overlay="medium"
      bgFit={view.name === 'home' || view.name === 'section' ? 'cover' : 'cover'}
    >
      {view.name === 'home' && (
        <HomeCard
          onFood={() => goSection('food')}
          onBeverages={() => goSection('beverages')}
        />
      )}

      {view.name === 'section' && (
        <SectionCard
          section={view.section}
          subsections={Object.keys(grouped[view.section]).sort()}
          onBack={goHome}
          onPick={(sub) => goSubsection(view.section, sub)}
        />
      )}

      {view.name === 'subsection' && (
        <SubsectionGallery
          section={view.section}
          subsection={view.subsection}
          items={grouped[view.section][view.subsection] || []}
          index={view.index}
          setIndex={(i) => setView({ ...view, index: i })}
          onBack={() => goSection(view.section)}
          onOpenOrder={openOrder}
        />
      )}

      {view.name === 'order' && (
        <OrderCard
          onBack={() => {
            if (view.from) setView({ name: 'subsection', ...view.from });
            else goHome();
          }}
          onCloseToMenu={() => {
            if (view.from) setView({ name: 'subsection', ...view.from });
            else goHome();
          }}
        />
      )}
    </CardShell>
  );
}
