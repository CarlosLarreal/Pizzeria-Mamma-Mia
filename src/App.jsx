import React from 'react';
import Navbar from './componentes/Navbar';
//import RegisterPage from './componentes/RegisterPage';
//import LoginPage from './componentes/login';
//import Home from './componentes/Home';
import Footer from './componentes/Footer';
import Pizza from './componentes/Pizza';
//import Cart from "./componentes/cart";

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/*<Home /> */}
      {/* <RegisterPage/> */}
      {/*<LoginPage /> */}
      {/*<Cart />*/}
      <Pizza/>
      <Footer />
    </div>
  );
}

export default App;
