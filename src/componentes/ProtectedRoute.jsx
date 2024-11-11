import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
    const { token } = useUser();
  
    return token ? children : <Navigate to="/login" />;
  };
  
  export default ProtectedRoute;
