// SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const SignUp = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: '',
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

    // Check if name, email, and password are provided
    if (!formData.name || !formData.email || !formData.password) {
      console.log('Please provide name, email, and password');
      return;
    }

    console.log('Sign Up form submitted:', formData);

    // Assume signup logic here (e.g., API call)
    // For simplicity, I'm assuming signup is successful
    // Additional logic after signup if needed
    onSignup();

    // Redirect to the login page
    navigate('/login');
  };


  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit" disabled={!formData.name || !formData.email || !formData.password}>
          Sign Up
        </button>
      </form>
      <p>
        Sudah punya akun? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
