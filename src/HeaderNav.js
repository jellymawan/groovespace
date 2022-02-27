import {Link} from 'react-router-dom';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function HeaderNav(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand nav-color" to="/home">groovespace</Link>
        <div className="collapse navbar-collapse">
          <NavLinks />
          <Form />
        </div>
      </nav>
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
        <a className="nav-link" href="#">BROWSE <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">UPLOAD</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SIGN IN</a>
      </li>
    </ul>
  );
}