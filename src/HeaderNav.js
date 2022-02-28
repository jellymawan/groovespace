import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data/music-data.json';

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
          <Link className="navbar-brand nav-color" to="/songs">groovespace</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLinks />
            </Nav>
            <Search />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p className="alert alert-danger">Some functionality not working: Accessing the 'BROWSE', 'UPLOAD', 'SIGN IN' tabs will not lead to anywhere; Buttons to like and add on to music is not implemented yet</p>
      {/* will delete above line for final project */}
    </header>
  )
}

// component for navlinks
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

/**
 * Incomplete
 * @param {*} props 
 * @returns 
 */
export function Search(props) {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  let filteredArr = Data.filter((song) => {
    if (query === "") {
      return song;
    } else if (query === song.title.toLowerCase().includes(query.toLowerCase()) || 
    query === song.artist.toLowerCase().includes(query.toLowerCase())) {
      console.log(song.title);
      return song;
    }
  });
  return (
    <form className="d-flex m-auto" onSubmit={handleSubmit}>
      <label hidden htmlFor="search">Search</label>
      <input className="form-control me-2" type="search" placeholder="Search user/song/artist" aria-label="Search for user, song, artist" id="search" onChange={event => setQuery(event.target.value)} />
      <button className="btn btn-outline-secondary" type="submit" onClick={HandleSearch(filteredArr)}>SEARCH</button>
    </form>
  );
}

/**
 * Incomplete
 * @param {*} filteredArr 
 */
function HandleSearch(filteredArr) {
  console.log(filteredArr);
}