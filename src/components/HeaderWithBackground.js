import React from 'react';
import logo from '../images/logo.png'
import Image from 'react-bootstrap/Image';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/1.jpg';

const HeaderWithBackground = () => {
    return (
        <div>
            <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
       <Image className="pe-3" src={logo} alt=''></Image> 
        <Navbar.Brand href="#home">EDU Leanring</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
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

    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="w-100 "
          src={img1}
          alt=""
        />
        <Carousel.Caption className='pb-5 mb-5'>
          <h1>Let's Learn Together </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
</div>
    
    );
};

export default HeaderWithBackground;