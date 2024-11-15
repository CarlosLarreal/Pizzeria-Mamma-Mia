import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Inicia el token como null
  const [email, setEmail] = useState(null); // Estado para almacenar el email del usuario

  // Método de login
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setEmail(data.email); // Guarda el email del usuario
      }
    } catch (error) {
      console.error('Error en login:', error);
    }
  };

  // Método de register
  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setEmail(data.email); // Guarda el email después de registrarse
      }
    } catch (error) {
      console.error('Error en register:', error);
    }
  };

  // Método de logout
  const logout = () => {
    setToken(null); // Elimina el token
    setEmail(null); // Elimina el email del estado
  };

  // Método para obtener el perfil del usuario autenticado
  const fetchUserProfile = async () => {
    if (!token) return;
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setEmail(data.email); // Actualiza el email con los datos del perfil
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, fetchUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
