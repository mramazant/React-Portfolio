import "./index.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <h3 class="heading">Muhammet Ramazan TOKLU</h3>
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

export default Header;
