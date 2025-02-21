import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="py-4">
      <Container>
        {/* Company Name on the Right */}
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="text-white" style={{ fontWeight: 'bold' }}>
            theDev
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
