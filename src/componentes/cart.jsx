
import React, { useState } from 'react';
import { pizzaCart as initialCart } from '../assets/js/pizzas';

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  // Función para aumentar la cantidad de una pizza en el carrito
  const handleIncrease = (id) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, count: item.count + 1 } : item 
    );
    setCart(updatedCart);
  };

  // Función para disminuir la cantidad de una pizza en el carrito
  const handleDecrease = (id) => {
    const updatedCart = cart
      .map(item => 
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter(item => item.count > 0);
    setCart(updatedCart);
  };

  // Calcular el total de la compra
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="list-group">
          {cart.map(item => (
            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '20px' }} 
                />
                <div>
                  <h5>{item.name}</h5>
                  <p>Precio: ${item.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button 
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </button>
                <span>{item.count}</span>
                <button 
                  className="btn btn-sm btn-outline-secondary ms-2"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <h4>Total: ${total.toLocaleString()}</h4>
          <button className="btn btn-primary">Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
