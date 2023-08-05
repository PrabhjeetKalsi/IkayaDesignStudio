import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <img src={logo} width="60" height="40" />
        Ikaya Design Studio
      </a>
    </nav>
  );
}

export default Navbar;
