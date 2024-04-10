import React from 'react';
import { Navbar, Container, Nav, Form, InputGroup } from 'react-bootstrap';
import { HouseFill, Link45deg, Search } from 'react-bootstrap-icons';
import logoImg from '../assets/ssc.svg'; // Import your logo image here

const NavigationBar = () => {
  return (

    <Navbar bg="light" expand="lg" style={{height:'60px'}}>
        <Navbar.Brand href="#home">
          <img
            src={logoImg}
            height="30"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="d-flex flex-column align-items-center ms-3">
              <HouseFill className="mb-1" style={{ fontSize: '1.7em' }} />
              <span className="ms-1">Home</span>
            </Nav.Link>
            <Nav.Link href="#link" className="d-flex flex-column align-items-center ms-3">
              <Link45deg className="mb-1" style={{ fontSize: '1.7em' }} />
              <span className="ms-1">Link</span>
            </Nav.Link>
          </Nav>
          <Form className="d-flex flex-column align-items-center">
            <InputGroup className="">
              
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1"> <Search></Search> </InputGroup.Text>
            </InputGroup>
          </Form>
        </Navbar.Collapse>

    </Navbar>
  
  );
};

export default NavigationBar;
