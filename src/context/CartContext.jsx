import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

// Hook personalizado para usar el CartContext
export const useCart = () => useContext(CartContext);

// Proveedor de contexto que envuelve la aplicación
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === pizza.id);
      if (itemInCart) {
        // Si ya está en el carrito, aumenta la cantidad
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Si no está en el carrito, agregarlo con quantity 1
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calcular el total del carrito
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString();
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
