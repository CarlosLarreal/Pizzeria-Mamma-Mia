import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { email, fetchUserProfile, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProfile(); // Obtener el perfil del usuario al cargar el componente
  }, [fetchUserProfile]);

  return (
    <div>
      <h1>Perfil</h1>
      <p>Email: {email}</p>
      <button onClick={() => { logout(); navigate('/'); }}>Logout</button>
    </div>
  );
};

export default Profile;
