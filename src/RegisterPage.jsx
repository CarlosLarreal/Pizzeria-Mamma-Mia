import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

 
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
    if (!formData.confirmPassword)
      formErrors.confirmPassword = 'Confirma la contraseña';
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = 'Las contraseñas no coinciden';

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage('Registro exitoso');
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSuccessMessage('');
    }
  };

  return (
    <div className='register'>
      <h2>Register</h2>
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

        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit">Registrarse</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default RegisterPage;
