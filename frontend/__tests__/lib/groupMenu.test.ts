import { groupMenu, type GroupedMenu } from '@/lib/menuService';
import type { MenuItem } from '@/types/Menu';

describe('groupMenu', () => {
  it('should group menu items by section and subsection', () => {
    const items: MenuItem[] = [
      {
        id: 1,
        section: 'food',
        subsection: 'chicken',
        name: 'Whole Chicken',
        price: 18.0,
        imagePath: '/chicken.webp',
      },
      {
        id: 2,
        section: 'food',
        subsection: 'chicken',
        name: 'Half Chicken',
        price: 10.0,
        imagePath: '/half-chicken.webp',
      },
      {
        id: 3,
        section: 'food',
        subsection: 'sides',
        name: 'Fries',
        price: 3.5,
        imagePath: '/fries.webp',
      },
      {
        id: 4,
        section: 'beverages',
        subsection: 'soft drinks',
        name: 'Cola',
        price: 2.5,
        imagePath: '/cola.webp',
      },
    ];

    const grouped = groupMenu(items);

    // Check structure
    expect(grouped).toHaveProperty('food');
    expect(grouped).toHaveProperty('beverages');

    // Check food subsections
    expect(grouped.food).toHaveProperty('chicken');
    expect(grouped.food).toHaveProperty('sides');
    expect(grouped.food.chicken).toHaveLength(2);
    expect(grouped.food.sides).toHaveLength(1);

    // Check beverages subsections
    expect(grouped.beverages).toHaveProperty('soft drinks');
    expect(grouped.beverages['soft drinks']).toHaveLength(1);

    // Verify items are correctly placed
    expect(grouped.food.chicken[0].name).toBe('Whole Chicken');
    expect(grouped.food.chicken[1].name).toBe('Half Chicken');
    expect(grouped.food.sides[0].name).toBe('Fries');
    expect(grouped.beverages['soft drinks'][0].name).toBe('Cola');
  });

  it('should handle empty items array', () => {
    const grouped = groupMenu([]);
    expect(grouped.food).toBeDefined();
    expect(grouped.beverages).toBeDefined();
    expect(Object.keys(grouped.food)).toHaveLength(0);
    expect(Object.keys(grouped.beverages)).toHaveLength(0);
  });

  it('should accumulate items in the same subsection', () => {
    const items: MenuItem[] = [
      {
        id: 1,
        section: 'food',
        subsection: 'chicken',
        name: 'Whole Chicken',
        price: 18.0,
        imagePath: '/chicken.webp',
      },
      {
        id: 2,
        section: 'food',
        subsection: 'chicken',
        name: 'Half Chicken',
        price: 10.0,
        imagePath: '/half-chicken.webp',
      },
      {
        id: 3,
        section: 'food',
        subsection: 'chicken',
        name: 'Quarter Chicken',
        price: 7.5,
        imagePath: '/quarter-chicken.webp',
      },
    ];

    const grouped = groupMenu(items);
    expect(grouped.food.chicken).toHaveLength(3);
  });
});
