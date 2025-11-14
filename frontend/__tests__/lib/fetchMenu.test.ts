import { fetchMenu } from '@/lib/menuService';

// Mock the fetch at global level
global.fetch = jest.fn();

describe('fetchMenu integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and return menu items from /api/menu', async () => {
    const mockMenuData = [
      {
        id: 1,
        section: 'food' as const,
        subsection: 'chicken',
        name: 'Whole Chicken',
        price: 18.0,
        imagePath: '/chicken.webp',
      },
      {
        id: 2,
        section: 'food' as const,
        subsection: 'sides',
        name: 'Fries',
        price: 3.5,
        imagePath: '/fries.webp',
      },
      {
        id: 3,
        section: 'beverages' as const,
        subsection: 'soft drinks',
        name: 'Cola',
        price: 2.5,
        imagePath: '/cola.webp',
      },
    ];

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockMenuData,
      status: 200,
      statusText: 'OK',
    });

    const items = await fetchMenu();

    expect(items).toEqual(mockMenuData);
    expect(items).toHaveLength(3);
    expect(items[0].name).toBe('Whole Chicken');
    expect(global.fetch).toHaveBeenCalledWith('/api/menu', { cache: 'no-store' });
  });

  it('should throw error when fetch fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    await expect(fetchMenu()).rejects.toThrow('Failed to fetch menu');
  });

  it('should throw error on network error', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(fetchMenu()).rejects.toThrow();
  });

  it('should handle empty menu response', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
      status: 200,
      statusText: 'OK',
    });

    const items = await fetchMenu();

    expect(items).toEqual([]);
    expect(items).toHaveLength(0);
  });
});
