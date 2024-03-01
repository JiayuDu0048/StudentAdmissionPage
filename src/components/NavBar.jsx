function NavBar() {
  return (
    <>
      <nav className="navbar custom-NavBar">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://steinhardt.nyu.edu">
            <img
              src="https://docs.steinhardt.nyu.edu/e/identity/k2/steinhardt_white.png"
              alt="Logo"
              height="25"
              className="d-inline-block align-text-top"
            ></img>
          </a>
          <a
            className="navbar-brand ms-auto"
            href="https://steinhardt.nyu.edu/create"
          >
            <img
              src="https://s2.loli.net/2024/02/13/s2FU8CekdSuwiZg.png"
              alt="Logo"
              height="25"
              className="d-inline-block align-text-top"
            ></img>
          </a>
          <button className="btn btn-secondary" type="button">
            Log Out
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
