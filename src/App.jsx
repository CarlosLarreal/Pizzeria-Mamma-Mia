import React from 'react';
import Navbar from './Navbar';
import RegisterPage from './RegisterPage';
import LoginPage from './login';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
