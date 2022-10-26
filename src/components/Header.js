import React from 'react';
import logo from '../images/logo.png'
import Image from 'react-bootstrap/Image';
import { Container, Navbar, Nav } from 'react-bootstrap';


const Header= () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
       <Image className="pe-3" src={logo} alt=''></Image> 
        <Navbar.Brand href="/home">EDU Leanring</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to='/categories'>Courses</Link> */}
            <Nav.Link href="/categories">Courses</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
    
    );
};

export default Header;