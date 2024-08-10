import LogoRegion from '../../assets/images/logo_region.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
    <footer className="bg-light text-dark py-4">
      <div className="container">
        <div className="row align-items-center mb-4">
          {/* Logo de la région */}
          <div className="col-md-4 mb-3 mb-md-0">
            <img src={LogoRegion} alt="Logo Région Auvergne-Rhône-Alpes" className="img-fluid" style={{maxWidth: '200px'}} />
          </div>
          
          {/* Informations de contact */}
          <div className="col-md-8">
            <h5>Contactez-nous</h5>
            <address className="mb-0">
              <p className="mb-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                101 cours Charlemagne, CS 20033<br />
                <span className="ms-4">69269 LYON CEDEX 02, France</span>
              </p>
              <p className="mb-0">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a href="tel:+33426734000" className="text-dark footer-link">+33 (0)4 26 73 40 00</a>
              </p>
            </address>
          </div>
        </div>

        {/* Ligne de séparation */}
        <hr className="my-4" />

        {/* Mentions légales */}
        <div className="row">
          <div className="col-12">
            <ul className="list-inline text-center mb-0">
              <li className="list-inline-item"><Link to="/mentions-legales" className="text-dark">Mentions légales</Link></li>
              <li className="list-inline-item">•</li>
              <li className="list-inline-item"><Link to="/donnees-personnelles" className="text-dark">Données personnelles</Link></li>
              <li className="list-inline-item">•</li>
              <li className="list-inline-item"><Link to="/accessibilite" className="text-dark">Accessibilité</Link></li>
              <li className="list-inline-item">•</li>
              <li className="list-inline-item"><Link to="/cookies" className="text-dark">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="small mb-0">© {new Date().getFullYear()} Trouve ton artisan. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );


export default Footer;