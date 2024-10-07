import React from 'react';
import Navbar from './componentes/Navbar';
//import RegisterPage from './componentes/RegisterPage';
//import LoginPage from './componentes/login';
//import Home from './componentes/Home';
import Footer from './componentes/Footer';
import Cart from "./componentes/cart";

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/*<Home />*/}
      {/* <RegisterPage/> */}
      {/*<LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
