import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Estado para almacenar la pizza
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/P001');
        if (!response.ok) {
          throw new Error('Error al obtener la pizza');
        }
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) {
    return (
      <div className="container my-4">
        <p>Cargando información de la pizza...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-4">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!pizza) {
    return (
      <div className="container my-4">
        <p>No se encontró la pizza.</p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="card mb-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pizza.img} className="img-fluid rounded-start" alt={pizza.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h5>
              <p className="card-text">{pizza.desc}</p>
              <p className="card-text"><strong>Precio:</strong> ${pizza.price.toLocaleString()}</p>
              <p className="card-text"><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
              <button className="btn btn-dark">🛒 Añadir al Carrito</button> {/* Sin funcionalidad por ahora */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
