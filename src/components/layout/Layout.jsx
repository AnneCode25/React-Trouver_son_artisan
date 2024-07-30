import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Foooter';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;