import "./index.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header className="header">
      <h3>Muhammet Ramazan TOKLU</h3>
      <nav className="nav-items">
      <Link className="nav-link" to={{ pathname: `/` }}>
        About Me
      </Link>
      <Link className="nav-link" to={{ pathname: `/skills` }}>
        Skills
      </Link>
      <Link className="nav-link" to={{ pathname: `/work` }}>
        Work
      </Link>
      <Link className="nav-link" to={{ pathname: `/contact` }}>
        Contact
      </Link>
      </nav>
    </header>
  );
};

export default Nav;
