import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
function NavBar() {
  const selector =useSelector((state)=>state.handleReducer)
  return (
    <Navbar bg="light" expand="lg" className="bg-white py-3 shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold">Bollywood<span style={{color:"red"}}>Style</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto ">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/product">Product</Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>
          </Nav>
          <div className="button">
            <a href="" className="btn btn-outline-dark ms-2">
            <i className="fa fa-sign-in me-1"></i>Login</a>
            <a href="" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i>Register</a>
            <a href="" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i>Cart ({selector.length})</a>
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;