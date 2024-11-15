import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const LoginPage = () => {
  const { token, login } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [serverError, setServerError] = useState('');

  // Redirigir a la página de inicio si el usuario ya está autenticado
  if (token) {
    return <Navigate to="/" />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validaciones
  const validateForm = () => {
    let formErrors = {};

    if (!formData.email) formErrors.email = 'El email es requerido';
    if (!formData.password) formErrors.password = 'La contraseña es requerida';
    if (formData.password.length < 6)
      formErrors.password = 'La contraseña debe tener al menos 6 caracteres';

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        await login(formData.email, formData.password);
        setSuccessMessage('Inicio de sesión exitoso');
        setErrors({});
        setServerError('');
      } catch (error) {
        setServerError('Error de autenticación. Verifica tus credenciales.');
        setSuccessMessage('');
      }
    } else {
      setErrors(validationErrors);
      setSuccessMessage('');
      setServerError('');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={{ color: 'red' }}>{errors.password}</span>
          )}
        </div>

        <button className="Btn" type="submit">Iniciar sesión</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {serverError && <p style={{ color: 'red' }}>{serverError}</p>}
    </div>
  );
};

export default LoginPage;
