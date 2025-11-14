'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import type { MenuItem } from '@/types/Menu';

export type OrderLine = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  note?: string;
};

export interface OrderContextProps {
  orderItems: OrderLine[];
  addItem: (item: MenuItem, qty?: number, note?: string) => void;
  removeOne: (id: number) => void;
  removeAllOf: (id: number) => void;
  clearOrder: () => void;
  total: number;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderItems, setOrderItems] = useState<OrderLine[]>([]);

  const addItem = (item: MenuItem, qty = 1, note?: string) => {
    setOrderItems(prev => {
      const found = prev.find(l => l.id === item.id && (note ?? '') === (l.note ?? ''));
      if (found) return prev.map(l => l === found ? { ...l, quantity: l.quantity + qty } : l);
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: qty, note }];
    });
  };

  const removeOne = (id: number) => {
    setOrderItems(prev =>
      prev.flatMap(l => (l.id === id ? (l.quantity > 1 ? [{ ...l, quantity: l.quantity - 1 }] : []) : [l]))
    );
  };

  const removeAllOf = (id: number) => setOrderItems(prev => prev.filter(l => l.id !== id));
  const clearOrder = () => setOrderItems([]);
  const total = orderItems.reduce((s, l) => s + l.price * l.quantity, 0);

  return (
    <OrderContext.Provider value={{ orderItems, addItem, removeOne, removeAllOf, clearOrder, total }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrder must be used within OrderProvider');
  return ctx;
};
