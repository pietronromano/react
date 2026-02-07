import { createContext, useContext, useState } from 'react';

// 1. Create the CartContext
const CartContext = createContext();

// 2. Create the CartProvider component
export function CartProvider({ children }) {
  // State to hold cart items
  const [cart, setCart] = useState([]);

  return <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>;
}

//3. Export a custom hook to allow use of the CartContext
export function useCart() {
  return useContext(CartContext);
}