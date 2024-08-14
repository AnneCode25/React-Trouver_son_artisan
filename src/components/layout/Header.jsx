import { Link, useNavigate } from "react-router-dom";
import NavLinkActive from "../commons/NavLinkActive.jsx";
import Logo from "../../assets/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate('/search', { state: { searchTerm: searchTerm.trim() } });
      setOverlayVisible(false);
      setSearchTerm(''); // Réinitialiser le terme de recherche après la navigation
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="logo"
              style={{ maxWidth: "100%", width: "100px", height: "auto" }}
            />
          </Link>
          <div>
            {!isDesktop && (
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                className="search"
                onClick={openOverlay}
              />
            )}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLinkActive to="/categorie/batiment">Bâtiment</NavLinkActive>
              </li>
              <li className="nav-item">
                <NavLinkActive to="/categorie/services">Services</NavLinkActive>
              </li>
              <li className="nav-item">
                <NavLinkActive to="/categorie/fabrication">Fabrication</NavLinkActive>
              </li>
              <li className="nav-item">
                <NavLinkActive to="/categorie/alimentation">Alimentation</NavLinkActive>
              </li>
            </ul>
            {isDesktop && (
              <form className="d-flex overlay-recherche" role="search" onSubmit={handleSearch}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Rechercher"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button className="btn btn-outline-success" type="submit">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
      {overlayVisible && (
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Rechercher"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-outline-success" type="submit">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      )}
    </header>
  );
};

export default Header;