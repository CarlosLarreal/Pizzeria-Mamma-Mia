import React from 'react';
import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Home from './pages/Home';
import Register from './pages/RegisterPage';
import Login from './pages/Login';
import Cart from './pages/cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
