import React, { useState } from 'react';
import Textfield1 from '../components/Textfield';
import LoginImg from '../assets/img4.png';
import CustomButton from '../components/Button';
// import { auth } from '/src/config/firebase.jsx'; 
import { auth } from '../config/firebase'; // Assuming firebase.jsx is in the same directory as LoginPage.jsx


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Redirect to Home.jsx after successful login
      window.location.href = '/Button';

    } catch (error) {
      setError(error.message); // Display login error
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-500" style={{ height: 'calc(100vh)', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'url("./src/assets/bg.png")'}}>
      <div className="bg-opacity-50 backdrop-blur-md rounded-lg p-8" style={{ backgroundColor: "white", boxShadow: "10px 20px 30px rgba(0, 0, 0, 0.5)", display: 'flex', flexDirection: 'column', alignItems: 'center', width: "30%", padding: "30px", borderRadius: "20px" }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={LoginImg} style={{ width: "80%", height: "auto" }} alt="Login" />
          <div style={{ color: "black", width: '80%', padding: '20px', borderRadius: "10px" }}>
            <Textfield1
              label="Email address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              autocomplete="on"
            />
            <Textfield1
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CustomButton variant="primary" onClick={handleLogin}>
                Login
              </CustomButton>
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              Don't have an account? <a href="/signup" style={{ color: 'ActiveBorder' }}>Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


