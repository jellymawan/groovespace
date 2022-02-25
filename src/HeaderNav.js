/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function HeaderNav(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button class="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand nav-color" href="#">groovespace</a>
      </nav>
      <div className="collapse navbar-collapse">
        <NavLinks />
        <Form />
      </div>
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
    <form class="d-flex m-auto">
      <label hidden for="search">Search</label>
      <input class="form-control me-2" type="search" placeholder="Search user/song/artist" aria-label="Search for user, song, artist" id="search" />
      <button class="btn btn-outline-secondary" type="submit">SEARCH</button>
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
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">BROWSE <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">UPLOAD</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SIGN IN</a>
      </li>
    </ul>
  );
}