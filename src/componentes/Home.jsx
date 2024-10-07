import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../assets/js/pizzas';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="card-container">
        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id} 
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
