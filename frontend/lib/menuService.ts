import type { MenuItem, SectionKey } from '@/types/Menu';

export type GroupedMenu = Record<SectionKey, Record<string, MenuItem[]>>;

export async function fetchMenu(): Promise<MenuItem[]> {
  const res = await fetch('/api/menu', { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch menu: ${res.status} ${res.statusText}`);
  return (await res.json()) as MenuItem[];
}

export function groupMenu(items: MenuItem[]): GroupedMenu {
  const grouped: GroupedMenu = { food: {}, beverages: {} };
  for (const it of items) {
    const sec = it.section as SectionKey;
    (grouped[sec] ??= {});
    (grouped[sec][it.subsection] ??= []).push(it);
  }
  return grouped;
}
