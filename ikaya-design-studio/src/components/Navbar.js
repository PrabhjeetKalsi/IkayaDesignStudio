import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav class="navbar">
      <a class="navbar-brand" href="/">
        <img src={logo} width="60" height="40" />
        Ikaya Design Studio
      </a>
    </nav>
  );
}

export default Navbar;
