import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';





export default function HeaderNav(props) {
  const user = props.user ? props.user.userName : null;
  
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link className="navbar-brand nav-color" to="/songs">groovespace</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLinks user={props.user} />
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
  const signOutFunction = (event) => {
    signOut(getAuth());
  }
  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Nav.Link href="/browse" onClick={handleClick}>BROWSE</Nav.Link>
      </li>
      <li className="nav-item">
        <Nav.Link href="/upload">UPLOAD</Nav.Link>
      </li>
      {!props.user &&
        <li className="nav-item">
          <Nav.Link href="/signin">SIGN IN</Nav.Link>
        </li>}
      {props.user &&
        <li className="nav-item">
          <Nav.Link onClick={signOutFunction}>SIGN OUT</Nav.Link>
        </li>

      }

    </ul>
  );
}