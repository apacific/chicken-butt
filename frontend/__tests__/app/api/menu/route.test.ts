import { GET } from '@/app/api/menu/route';
import { NextResponse } from 'next/server';

// Mock the global fetch
global.fetch = jest.fn();

describe('GET /api/menu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return menu items with status 200 on successful upstream response', async () => {
    const mockMenuData = [
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
        section: 'beverages',
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

    const response = await GET();

    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json).toEqual(mockMenuData);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/menu'),
      { cache: 'no-store' }
    );
  });

  it('should return 502 when upstream returns non-200 status', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      text: async () => 'Backend error message',
    });

    const response = await GET();

    expect(response.status).toBe(502);
    const json = await response.json();
    expect(json).toHaveProperty('error', 'Upstream error');
    expect(json).toHaveProperty('status', 500);
  });

  it('should handle upstream server error gracefully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 503,
      statusText: 'Service Unavailable',
      text: async () => {
        throw new Error('Text parsing failed');
      },
    });

    const response = await GET();

    expect(response.status).toBe(502);
    const json = await response.json();
    expect(json).toHaveProperty('error', 'Upstream error');
  });

  it('should handle network/fetch errors with status 500', async () => {
    const networkError = new Error('Network connection failed');
    (global.fetch as jest.Mock).mockRejectedValueOnce(networkError);

    const response = await GET();

    expect(response.status).toBe(500);
    const json = await response.json();
    expect(json).toHaveProperty('error', 'Proxy fetch failed');
    expect(json).toHaveProperty('message');
  });

  it('should use BACKEND_ORIGIN environment variable when set', async () => {
    const originalEnv = process.env.BACKEND_ORIGIN;
    process.env.BACKEND_ORIGIN = 'http://custom-backend:9000';

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
      status: 200,
      statusText: 'OK',
    });

    await GET();

    expect(global.fetch).toHaveBeenCalledWith(
      'http://custom-backend:9000/menu',
      { cache: 'no-store' }
    );

    // Restore original
    process.env.BACKEND_ORIGIN = originalEnv;
  });

  it('should fall back to localhost when BACKEND_ORIGIN is not set', async () => {
    const originalEnv = process.env.BACKEND_ORIGIN;
    delete process.env.BACKEND_ORIGIN;

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
      status: 200,
      statusText: 'OK',
    });

    await GET();

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:8080/menu',
      { cache: 'no-store' }
    );

    // Restore original
    process.env.BACKEND_ORIGIN = originalEnv;
  });
});
