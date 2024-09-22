import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#191919' }}>
      <a className="navbar-brand text-white" href="#">🍕 Pizzería Mamma Mia!</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-outline-secondary m-2">🍕 Home</button>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <button className="btn btn-outline-secondary m-2">🔓 Profile</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-secondary m-2">🔒 Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <button className="btn btn-outline-secondary m-2">🔐 Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-secondary m-2">🔐 Register</button>
              </li>
            </>
          )}
          <li className="nav-item">
            <button className="btn btn-outline-info m-2">🛒 Total: ${total.toLocaleString()}</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
