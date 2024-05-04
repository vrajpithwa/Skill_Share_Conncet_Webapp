import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomButton({ variant, onClick, children }) {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
}

export default CustomButton;
