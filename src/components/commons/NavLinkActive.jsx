import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLinkActive({to, children}) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);

  return (
    <Link 
    to={to}
    className = { `nav-link ${isActive ? 'active' : ''}`}
    >
      {children}
    </Link>
  )
}

NavLinkActive.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLinkActive;