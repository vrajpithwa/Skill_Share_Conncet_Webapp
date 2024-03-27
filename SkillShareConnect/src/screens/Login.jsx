import React from 'react';
import Textfield1 from '../components/Textfield';
import LoginImg from '../assets/img4.png';
import CustomButton from '../components/Button';

export default function LoginPage() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-500" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',   backgroundImage: 'url("./src/assets/bg.png")',}}>
 
      <div className="bg-opacity-50 backdrop-blur-md rounded-lg p-8" style={{backgroundColor: "white" ,boxShadow: "10px 20px 30px rgba(0, 0, 0, 0.5)", display: 'flex', flexDirection: 'column', alignItems: 'center', width: "400px", height: "500px", padding: "30px", borderRadius: "20px" }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={LoginImg} style={{ width: "300px", height: "auto" }} alt="Login" />
          <div style={{ color: "black", width: '300px', padding: '20px', borderRadius: "10px" }}>
            <Textfield1
              label="Email address"
              type="text"
              st
              placeholder="name@example.com">
              </Textfield1>
            <Textfield1
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton variant="primary">
                Click Me
            </CustomButton>
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              Don't have an account? <a href="/signup" style={{ color:'ActiveBorder' }}>Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
