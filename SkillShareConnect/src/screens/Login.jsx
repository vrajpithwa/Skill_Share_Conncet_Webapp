import React from 'react';
import Textfield1 from '../components/Textfield';
import LoginImg from '../assets/img4.png';
import CustomButton from '../components/Button';
export default function LoginPage (){
    return ( 
       <div style={{backgroundColor: '#3e1f47', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {/* i want this image and textfield in column and centre */}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

             <img src={LoginImg} style={{width: "20%", height:"auto"}}/>
        <div style={{color:"white", width: '300px', padding: '20px', borderRadius: "10px"}}>
        <Textfield1
        label="Email address"
        type="email"
        placeholder="name@example.com"
      />
        <Textfield1
        label="Password"
        type="password"
        placeholder="Enter you password"
      />

<div style={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton variant="primary">
              Click Me
            </CustomButton>
          </div>
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            Don't have an account? <a href="/signup" style={{ color: 'white' }}>Sign Up</a>
          </div>
        </div>
        </div>
        </div>
       
    );
}