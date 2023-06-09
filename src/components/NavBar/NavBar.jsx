import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navBarWrapper">
      <Link to={"/hello"}>
        <div className="nav-left">Hello</div>
      </Link>
      <Link to={"/markers"}>
        <div className="nav-center">Markers</div>
      </Link>
      <Link to={"/right"}>
        <div className="nav-right">Right</div>
      </Link>
    </nav>
  );
}

export default NavBar;
