import { Link } from 'react-router-dom';
import NavLinkActive from '../commons/NavLinkActive.jsx';
import Logo from "../../assets/images/Logo.png";


const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link class="navbar-brand" to="/">
      <img src={Logo} alt="logo" style={{ maxwidth:'100%', width:'100px', height:'auto'}}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLinkActive to="/batiment">Bâtiment</NavLinkActive>
        </li>
        <li className="nav-item">
          <NavLinkActive to="/services">Services</NavLinkActive>
        </li>
        <li className="nav-item">
          <NavLinkActive to="/fabrication">Fabrication</NavLinkActive>
        </li>
        <li className="nav-item">
          <NavLinkActive to="/alimentation">Alimentation</NavLinkActive>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </header>
);

export default Header;
