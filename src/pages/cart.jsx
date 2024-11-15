
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotal } = useCart();
  const { token } = useUser(); 
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Función para aumentar la cantidad de una pizza en el carrito
  const handleIncrease = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) addToCart(item); // Añadir una más del mismo producto
  };

  // Función para disminuir la cantidad de una pizza en el carrito
  const handleDecrease = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      addToCart({ ...item, quantity: item.quantity - 1 });
    } else {
      removeFromCart(id);
    }
  };

  // Función para procesar el pago
  const handleCheckout = async () => {
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Enviar el token JWT
        },
        body: JSON.stringify({ cart }),
      });

      if (response.ok) {
        setSuccessMessage('¡Compra realizada con éxito!');
      } else {
        setErrorMessage('Hubo un problema al procesar la compra.');
      }
    } catch (error) {
      setErrorMessage('Error de conexión con el servidor.');
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="list-group">
          {cart.map((item) => (
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
                <span>{item.quantity}</span>
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
          <h4>Total: ${getTotal().toLocaleString()}</h4>
          <button
            className="btn btn-primary"
            disabled={!token}
            onClick={handleCheckout} // Ejecuta el checkout solo si el usuario está autenticado
          >
            Pagar
          </button>
        </div>
      )}
      {/* Mensajes de éxito o error */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Cart;
