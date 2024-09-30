import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#191919' }}>
      <a className="navbar-brand text-white m-2 text-decoration-none" href="#">🍕 Pizzería Mamma Mia!</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-outline-secondary m-2 btn-sm">🍕 Home</button>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <button className="btn btn-outline-secondary m-2 btn-sm">🔓 Profile</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-secondary m-2 btn-sm">🔒 Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <button className="btn btn-outline-secondary m-2 btn-sm">🔐 Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-secondary m-2 btn-sm">🔐 Register</button>
              </li>
            </>
          )}
         
        </ul>
      </div>
      <div class="d-flex justify-content-end">
            <li className="nav-item">
            <button className="btn btn-outline-info m-2 btn-sm">🛒 Total: ${total.toLocaleString()}</button>
            </li>
      </div>
    </nav>
  );
};

export default Navbar;
