import { Link } from 'react-router-dom'
import Layout from "../components/layout/Layout";
import error from '../assets/images/error404.png'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
        <h2 className="display-1 fw-bold">Error 404</h2>
        <img 
          src={error}
          alt="Erreur 404"
          className="img-fluid mb-4"
          style={{ maxWidth: "100%", width: "50em", height: "auto" }}        />
        <p className="lead mb-4">Page non trouvée</p>
        <button className="button-error">
          <Link to="/">Retour à l&apos;accueil</Link>
        </button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;