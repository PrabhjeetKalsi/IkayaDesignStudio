import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar d-flex justify-content-center py-5">
        <a className="navbar-brand d-flex justify-content-center" href="/">
          <img src={logo} width="180" height="120" />
          <h1 className="my-auto">Ikaya Design Studio</h1>
        </a>
      </nav>
      <nav className="navbar navbar-expand-sm py-0">
        <div className="collapse navbar-collapse d-flex justify-content-center">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item px-5">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link" href="#work">
                Work
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
