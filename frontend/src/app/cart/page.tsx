"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "The Essential Tee",
      subtitle: "Custom Edition • Organic Cotton",
      price: 48,
      size: "Medium",
      quantity: 1,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvuIeezvlqlRTC0Od2-I-MquONX64g08i7TfAovtL7aqYPeX4UfHKbGrFL8nDJZyUVZVXxeQ-lQPkF1FmDPM8Fo2nadIfvWfK6fMSjBnzFZSFpIbNaPEJs2Mkr1Zg0jc7r4JonoU-XZKKLVbUP3b8qfUqaRcXgXKFh5OSz2ygn6J0B7zwXZK66Gkk8Wejt4VpONmv0SzwJLodNA0etkwIgn38r03-TX4YT-N2gbJ_96RgP3U9-k4hB6gr6HrM1zv_R-IU-ocWseX9B",
    },
    {
      id: 2,
      title: "The Sculpt Hoodie",
      subtitle: "Heritage Grey • 450GSM",
      price: 120,
      size: "Large",
      quantity: 1,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0g2mMsKxpFU8X3wxKD4FmsQt8v4fP561HzE5p86NYn7S8mzWCxflQ2BWayJe7xvtwybs_8cIAa9S2LSj9Pts6eVRWtKsKxdXXHyIeW7k9lkCGymhb3GrBUAHmojSOnGXve4g2W5CkEmg83LvlxPLMZvYrTUSZ5soYebya0_ZLY3Z4QN9Ac3mkdFmrJ3qLaBX5ad6jt0sKGDMvBGa1R_Fi9LaM-QoaaGNJuDgnGouf5nP8Xnb0TFQ5t7HKkm-Xf7rGD_sKfxxp5mSF",
    },
  ]);

  const incrementQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="font-headline text-5xl mb-12">The Shopping Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-8 space-y-12">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-8 pb-12 group">
              <div className="w-full md:w-56 aspect-[4/5] overflow-hidden rounded-sm flex-shrink-0 bg-surface-container-low">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-headline text-2xl font-semibold">{item.title}</h3>
                    <p className="font-label text-[0.6875rem] uppercase text-on-surface-variant">{item.subtitle}</p>
                  </div>
                  <span className="font-headline text-xl font-medium">${item.price}</span>
                </div>

                <div className="mt-6 flex gap-8">
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[0.625rem] uppercase text-on-surface-variant">Size</span>
                    <span className="text-sm font-medium">{item.size}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[0.625rem] uppercase text-on-surface-variant">Quantity</span>
                    <div className="flex items-center border-b border-outline-variant/30 py-1">
                      <button onClick={() => decrementQty(item.id)} className="px-2 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="px-4 text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => incrementQty(item.id)} className="px-2 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 sticky top-32">
          <div className="bg-surface-container-lowest p-10 rounded-sm border border-outline-variant/10 shadow-md space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant font-medium text-sm">Total</span>
              <span className="font-medium">${total}</span>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dim text-on-primary font-headline py-5 px-6 flex items-center justify-center gap-3">
              Proceed to Checkout
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;