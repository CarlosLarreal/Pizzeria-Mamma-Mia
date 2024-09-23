import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes: </strong>{ingredients.join(', ')}
        </p>
        <p className="card-text"><strong>Precio: </strong>${price.toLocaleString()}</p>
        <div className='d-flex justify-content-between'>
            <button className="btn btn-outline-danger btn-sm">Ver Más 👀</button>
            <button className="btn btn-dark btn-sm">🛒 Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
