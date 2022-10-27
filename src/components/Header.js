import React, { useContext } from 'react';
import logo from '../images/logo.png'
import Image from 'react-bootstrap/Image';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Button from 'react-bootstrap/Button';

const Header= () => {
  const { user, logOut } = useContext(AuthContext);

    const Log_out = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}

          <Nav>
            <>
            {
              user?.uid ?
              <>
                  <span>{user.uid}</span>
                  <Button variant="light" onClick={Log_out}>Log out</Button>
              </>
              :
              <>
                  <Link to='/login' className='btn btn-warning m-2'>Login</Link>
                  <Link to='/register' className='btn btn-info m-2'>Register</Link>
                  </>
            }
            </>
            <Link to="/profile">
                            {user?.uid ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL} className='ms-3 mt-1' >
                                </Image>
                                : <FaUser className='mt-3'></FaUser>
                            }
                        </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
    
    );
};

export default Header;