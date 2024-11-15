import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { getTotal } = useCart();
  const { token, logout } = useUser();
  const total = getTotal();

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#191919' }}>
      <Link className="navbar-brand text-white m-2 text-decoration-none" to="/">🍕 Pizzería Mamma Mia!</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="btn btn-outline-secondary m-2 btn-sm" to="/">🍕 Home</Link>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link className="btn btn-outline-secondary m-2 btn-sm" to="/profile">👤 Profile</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-secondary m-2 btn-sm" onClick={logout}>🔓 Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="btn btn-outline-secondary m-2 btn-sm" to="/login">🔐 Login</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-secondary m-2 btn-sm" to="/register">🔐 Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="d-flex justify-content-end">
        <li className="nav-item">
          <Link className="btn btn-outline-info m-2 btn-sm" to="/cart">🛒 Total: ${total}</Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;



