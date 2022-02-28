import {Link} from 'react-router-dom';
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap';
/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function HeaderNav(props) {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link className="navbar-brand nav-color" to="/home">groovespace</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLinks />
            </Nav>
            <Form />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

/**
 * Will work on implementing a search feature in this function
 * @param {*} props 
 * @returns 
 */
export function Form(props) {
  return (
    <form className="d-flex m-auto">
      <label hidden htmlFor="search">Search</label>
      <input className="form-control me-2" type="search" placeholder="Search user/song/artist" aria-label="Search for user, song, artist" id="search" />
      <button className="btn btn-outline-secondary" type="submit">SEARCH</button>
    </form>
  );
}

/**
 * Still need to work on this function
 * @param {*} props 
 * @returns 
 */
export function NavLinks(props) {
  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Nav.Link href="#">BROWSE</Nav.Link>
      </li>
      <li className="nav-item">
        <Nav.Link href="#">UPLOAD</Nav.Link>
      </li>
      <li className="nav-item">
        <Nav.Link href="#">SIGN IN</Nav.Link>
      </li>
    </ul>
  );
}