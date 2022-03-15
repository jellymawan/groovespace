import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function HeaderNav(props) {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link className="navbar-brand nav-color" to="/songs">groovespace</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLinks />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export function NavLinks(props) {
  let handleClick = () => {
    document.getElementById('search-form').classList.remove('d-none');
  }
  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Nav.Link href="/browse" onClick={handleClick}>BROWSE</Nav.Link>
      </li>
      <li className="nav-item">
        <Nav.Link href="/upload">UPLOAD</Nav.Link>
      </li>
      <li className="nav-item">
        <Nav.Link href="/signin">SIGN IN</Nav.Link>
      </li>
    </ul>
  );
}