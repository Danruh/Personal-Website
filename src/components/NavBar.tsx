import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


class NavBar extends React.Component {
    render() {
        return (
            <>
            <style type='text/css'>
                {`
                .navbar-dark {
                    color: light;
                    text-align: center;
                    background-color: #282c34;
                    border-color: #282c34;
                }

                .container-dark {
                    background-color: #282c34;
                }
                `}
            </style>
            <Container>
                <Navbar expand='lg' className='navbar-dark'>
                    <Navbar.Brand href='#home'>
                        <strong>drtl.</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link href='/about'>About</Nav.Link>
                            <Nav.Link href='/projects'>Projects</Nav.Link>
                            <Nav.Link href='/contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            </>
        );
    }
}

/*
class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Danruh Lasta</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        );
    }
}*/

export default NavBar;