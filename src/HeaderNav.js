import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { useState } from 'react';
import { queryAllByAltText } from '@testing-library/react';
import musicData from './data/music-data.json';

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
            <Search songs={props.songs} callBack={props.callBack}/>
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

// component for search bar and functionality. PARTIALLY COMPLETE***
export function Search(props) {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
    props.callBack(musicData);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredArr = props.songs.filter((song) => {
      if (query === "") {
        return song;
      } else if (song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())) {
        return song;
      }
    });
    props.callBack(filteredArr);
  }
  return (
    <form className="d-flex m-auto" onSubmit={handleSubmit}>
      <label hidden htmlFor="search">Search</label>
      <input className="form-control me-2" type="search"
      placeholder="Search user/song/artist"
      aria-label="Search for user, song, artist"
      id="search" onChange={handleChange} />
      <button className="btn btn-outline-secondary" type="submit">SEARCH</button>
    </form>
  );
}