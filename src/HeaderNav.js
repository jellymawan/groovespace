// SEARCH FUNCTIONALITY STILL INCOMPLETE
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data/music-data.json';
import { CardList } from './CardList';

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
    </header>
  )
}

// component for navlinks
export function NavLinks(props) {
  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Nav.Link href="/browse">BROWSE</Nav.Link>
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

/**
 * Incomplete
 * @param {*} props 
 * @returns 
 */
export function Search(props) {
  const [query, setQuery] = useState("");
  // const onChange = (e) => {
  //   setQuery(e.target.value)
  //   document.querySelector('.btn.btn-outline-secondary').addEventListener('click', (e) => {
  //     e.preventDefault();
  //     console.log(query);
  //     HandleSearch(query);
  //   });
  // }
  function onSubmit(e) {
    e.preventDefault();
    HandleSearch(query);
  }
  return (
    <form className="d-flex m-auto">
      <label hidden htmlFor="search">Search</label>
      <input className="form-control me-2" type="search" placeholder="Search user/song/artist" aria-label="Search for user, song, artist" id="search" onChange={e => setQuery(e.target.value)} />
      <button className="btn btn-outline-secondary" type="submit" onSubmit={onSubmit}>SEARCH</button>
    </form>
  );
}

/**
 * Incomplete
 * @param {*} filteredArr 
 */
function HandleSearch(query) {
  let filteredArr = Data.filter((song) => {
    if (query === "") {
      return song;
    } else if (query === song.title.toLowerCase().includes(query.toLowerCase()) || 
    query === song.artist.toLowerCase().includes(query.toLowerCase())) {
      return song;
    }
  });
  console.log(filteredArr);
  CardList(filteredArr);
}