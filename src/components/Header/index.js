import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuIcon = ({menuOpen, toggleMenu})=>{
  
  return(
    <div className="close" onClick={()=>{toggleMenu()}}>
      <div className={`bar1 ${menuOpen?"opened":""}`}></div>
      <div className={`bar2 ${menuOpen?"opened":""}`}></div>
      <div className={`bar3 ${menuOpen?"opened":""}`}></div>
    </div>
  )
}
const Header = () => {
  let [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen);
  }
  return (
    <header className="header">
      <h3 className="heading">Muhammet Ramazan TOKLU</h3>
      <MenuIcon menuOpen={menuOpen} toggleMenu={toggleMenu}/>
      <nav className={`nav-items ${menuOpen?"":"menu-closed"}`}>
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
