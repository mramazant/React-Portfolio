import "./index.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav-bar">
      <h3>Muhammet Ramazan TOKLU</h3>
      <Link className="nav-link" to={{ pathname: `/` }}>
        About Me
      </Link>
      <Link className="nav-link" to={{ pathname: `/work` }}>
        Work
      </Link>
      <Link className="nav-link" to={{ pathname: `/contact` }}>
        Contact
      </Link>
    </div>
  );
};

export default Nav;
