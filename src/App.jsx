import React from 'react';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './componentes/ProtectedRoute';
import { UserProvider } from './context/UserContext';
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
    <UserProvider>
    <div className="App">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
    </UserProvider>
  );
}

export default App;
