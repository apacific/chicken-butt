import React from 'react';
import { renderHook, act, render, screen } from '@testing-library/react';
import { OrderProvider, useOrder } from '../context/OrderContext';
import type { MenuItem } from '../types/Menu';
import '@testing-library/jest-dom';

describe('OrderContext', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <OrderProvider>{children}</OrderProvider>
  );

  const item: MenuItem = {
    id: 1,
    section: 'food',
    subsection: 'chicken',
    name: 'Chicken',
    price: 10,
    description: 'Delicious chicken',
    imagePath: '/images/chicken.jpg'
  };

  const item2: MenuItem = {
    id: 2,
    section: 'food',
    subsection: 'sides',
    name: 'Rice',
    price: 3,
    description: 'White rice',
    imagePath: '/images/rice.jpg'
  };

  it('provides initial empty order state', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    expect(result.current.orderItems).toEqual([]);
    expect(result.current.total).toBe(0);
  });

  it('throws error when useOrder is used outside OrderProvider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      renderHook(() => useOrder());
    }).toThrow('useOrder must be used within OrderProvider');
    consoleError.mockRestore();
  });

  it('adds and removes items', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => result.current.addItem(item));
    expect(result.current.orderItems.length).toBe(1);
    act(() => result.current.removeOne(item.id));
    expect(result.current.orderItems.length).toBe(0);
  });

  it('adds item with default quantity of 1', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => result.current.addItem(item));
    expect(result.current.orderItems[0].quantity).toBe(1);
  });

  it('adds item with custom quantity', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => result.current.addItem(item, 5));
    expect(result.current.orderItems[0].quantity).toBe(5);
  });

  it('adds item with note', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => result.current.addItem(item, 1, 'Extra spicy'));
    expect(result.current.orderItems[0].note).toBe('Extra spicy');
  });

  it('increments quantity when adding duplicate item without note', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => {
      result.current.addItem(item, 2);
      result.current.addItem(item, 3);
    });
    expect(result.current.orderItems).toHaveLength(1);
    expect(result.current.orderItems[0].quantity).toBe(5);
  });

  it('treats items with different notes as separate line items', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => {
      result.current.addItem(item, 1, 'Extra spicy');
      result.current.addItem(item, 1, 'Extra mild');
    });
    expect(result.current.orderItems).toHaveLength(2);
  });

  it('adds multiple different items', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => {
      result.current.addItem(item, 1);
      result.current.addItem(item2, 2);
    });
    expect(result.current.orderItems).toHaveLength(2);
    expect(result.current.orderItems[0].id).toBe(1);
    expect(result.current.orderItems[1].id).toBe(2);
  });

  it('calculates correct total with single item', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => result.current.addItem(item, 2));
    expect(result.current.total).toBe(20);
  });

  it('calculates correct total with multiple items', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => {
      result.current.addItem(item, 2); // 10 * 2 = 20
      result.current.addItem(item2, 3); // 3 * 3 = 9
    });
    expect(result.current.total).toBe(29);
  });

  it('removes one quantity of an item', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => result.current.addItem(item, 3));
    expect(result.current.orderItems[0].quantity).toBe(3);
    act(() => result.current.removeOne(1));
    expect(result.current.orderItems[0].quantity).toBe(2);
  });

  it('removes item when quantity reaches zero', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => result.current.addItem(item, 1));
    expect(result.current.orderItems).toHaveLength(1);
    act(() => result.current.removeOne(1));
    expect(result.current.orderItems).toHaveLength(0);
  });

  it('removes all of an item', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => {
      result.current.addItem(item, 5);
      result.current.addItem(item2, 2);
    });
    expect(result.current.orderItems).toHaveLength(2);
    act(() => result.current.removeAllOf(1));
    expect(result.current.orderItems).toHaveLength(1);
    expect(result.current.orderItems[0].id).toBe(2);
  });

  it('clears entire order', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => {
      result.current.addItem(item, 2);
      result.current.addItem(item2, 3);
    });
    expect(result.current.orderItems).toHaveLength(2);
    act(() => result.current.clearOrder());
    expect(result.current.orderItems).toHaveLength(0);
    expect(result.current.total).toBe(0);
  });

  it('calculates correct total after removing items', () => {
    const { result } = renderHook(() => useOrder(), { wrapper });
    act(() => {
      result.current.addItem(item, 2); // 20
      result.current.addItem(item2, 2); // 6
    });
    expect(result.current.total).toBe(26);
    act(() => result.current.removeOne(1)); // Remove 1 chicken: 20 - 10 = 10
    expect(result.current.total).toBe(16);
  });

  it('renders children correctly', () => {
    render(
      <OrderProvider>
        <div data-testid="test-child">Test Child</div>
      </OrderProvider>
    );
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });

  it('persists state across multiple hook calls within provider', () => {
    const { result: result1 } = renderHook(() => useOrder(), { wrapper });
    const { result: result2 } = renderHook(() => useOrder(), { wrapper });
    act(() => {
      result1.current.addItem(item, 1);
    });
    expect(result2.current.orderItems).toHaveLength(1);
    expect(result2.current.total).toBe(10);
  });
});
