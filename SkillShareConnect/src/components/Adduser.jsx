// AddUserForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/user', userData);
      alert('User created successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('An error occurred while creating user.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
