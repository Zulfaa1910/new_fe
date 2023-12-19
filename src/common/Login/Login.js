// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are provided
    if (!formData.email || !formData.password) {
      console.log('Please provide email and password');
      return;
    }

    console.log('Login form submitted:', formData);

    // Assume login logic here (e.g., API call)
    // For simplicity, I'm assuming login is successful
    // Additional logic after login if needed
    onLogin();

    // Redirect to the homepage
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>
        Belum punya akun? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
