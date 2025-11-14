'use client';
import React from 'react';
import { useOrder } from '@/context/OrderContext';

export default function OrderCard({ onBack, onCloseToMenu }:{
  onBack: () => void; onCloseToMenu: () => void;
}) {
  const { orderItems, removeOne, removeAllOf, clearOrder, total } = useOrder();

  return (
    <div className="h-full w-full p-6 flex flex-col">
      <header className="flex items-center gap-3">
        <button onClick={onBack} aria-label="Back" className="rounded-lg text-2xl hover:text-orange-400 leading-none hover:opacity-90 font-chango mr-8 text-shadow-2xs text-white text-shadow-black hover:text-shadow-white">↩</button>
        <h2 className="text-white/95 text-3xl font-chango text-shadow-2xs text-shadow-black">Your Order</h2>
      </header>

      <div className="mt-6 space-y-3 overflow-none pr-2 max-h-[65%]">
        {orderItems.length === 0 ? (
          <p className="text-white/90 font-engagement text-2xl">No items yet.</p>
        ) : (
          orderItems.map((l, idx) => (
            <div key={`${l.id}-${l.note ?? ''}-${idx}`} className="flex items-center justify-between bg-white/15 rounded px-3 py-2">
              <div className="text-white/95 text-shadow-2xs text-shadow-black">
                <div className="font-chango">{l.name} <span className="opacity-80">x{l.quantity}</span></div>
                {l.note && <div className="text-sm opacity-90 italic">“{l.note}”</div>}
                <div className="text-sm">${(l.price * l.quantity).toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => removeOne(l.id)} className="bg-white/80 text-black rounded px-2 py-1 font-chango text-shadow-2xs text-shadow-orange">-1</button>
                <button onClick={() => removeAllOf(l.id)} className="bg-red-600 text-white rounded px-2 py-1 font-chango text-shadow-2xs text-shadow-black">Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-auto space-y-3">
        <div className="flex items-center justify-between text-white/95 text-2xl font-engagement">
          <span>Total</span><span>${total.toFixed(2)}</span>
        </div>
        <div className="flex gap-3">
          <button onClick={() => alert('Checkout: integrate payment or POST to backend')} className="font-chango bg-green-600 hover:bg-green-700 text-white text-shadow-sky px-4 py-2 rounded w-full">
            Checkout
          </button>
          <button onClick={onCloseToMenu} className="font-chango bg-white/80 hover:bg-white text-black text-shadow-sky px-4 py-2 rounded w-full">
            Return to Menu
          </button>
        </div>
        {orderItems.length > 0 && (
          <button onClick={clearOrder} className="text-white/90 no-underline border-2 border-solid text-m p-4 font-chango text-shadow-2xs text-shadow-black hover:bg-black">Clear order</button>
        )}
      </div>
    </div>
  );
}
