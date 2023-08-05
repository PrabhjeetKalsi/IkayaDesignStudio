import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar d-flex justify-content-center">
      <a className="navbar-brand d-flex justify-content-center" href="/">
        <img src={logo} width="60" height="40" />
        Ikaya Design Studio
      </a>
    </nav>
  );
}

export default Navbar;
