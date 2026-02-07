import { createContext, useContext, useState } from 'react';


// 1. Create the CartContext
const CartContext = createContext();

// 2. Create the CartProvider component
export function CartProvider({ children }) {
  // State to hold cart items
  const [cart, setCart] = useState([]);

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

  return  ( 
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

//3. Export a custom hook to allow use of the CartContext
export function useCart() {
  return useContext(CartContext);
}