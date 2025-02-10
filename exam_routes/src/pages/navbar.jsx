import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 

const NavigationBar = () => {

  let user= Cookies.get('user');
console.log(user);
const logout = () => {
  Cookies.remove("token");

};
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {
              user?(<Nav.Link onClick={logout} >logout</Nav.Link>):(<Nav.Link as={Link} to="/login">Login</Nav.Link>)
            }
           {
              user?(<Nav.Link >{user.name}</Nav.Link>):(<Nav.Link as={Link} to="/Signup">Signup</Nav.Link>)
            }
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
