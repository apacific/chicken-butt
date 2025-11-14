export type SectionKey = 'food' | 'beverages';
export type MenuItem = {
  id: number;
  section: SectionKey;
  subsection: string;
  name: string;
  description?: string;
  price: number;
  imagePath?: string;
};
