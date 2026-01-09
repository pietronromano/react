import { createContext, useContext, useState, useEffect } from 'react';



// 1. Create the CartContext
const CartContext = createContext();

// 2. Create the CartProvider component
export function CartProvider({ children }) {
  // State to hold cart items
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
        }
        return [...prev, { ...product, qty: 1 }];
      });
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return  ( 
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

//3. Export a custom hook to allow use of the CartContext
export function useCart() {
  return useContext(CartContext);
}