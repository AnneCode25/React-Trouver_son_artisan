import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import StarRating from "../components/commons/StarRating.jsx";
import Layout from "../components/layout/Layout.jsx"

// Importez vos données JSON ici
import data from "../data/datas.json";

const SearchResultPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchTerm = location.state?.searchTerm || "";

  useEffect(() => {
    if (searchTerm) {
      const results = data.filter(
        (artisan) =>
          artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artisan.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleArtisanClick = (artisanId) => {
    navigate(`/artisan/${String(artisanId)}`);
  };

  return (
    <Layout>
    <div className="container mt-4">
      <h1 className="mb-4">Recherche</h1>
      <h2 className="h4 mb-3">Recherche par mot clé</h2>
      <p className="mb-3">
        Résultats pour : <strong>{searchTerm}</strong>
      </p>
      <p className="mb-4">{searchResults.length} résultat(s) trouvé(s)</p>

      {searchResults.length === 0 ? (
        <p>Aucun résultat trouvé.</p>
      ) : (
        <div className="row">
          {searchResults.map((artisan) => (
            <div key={artisan.id} className="col-12 mb-3">
              <div
                className="card cursor-pointer"
                onClick={() => handleArtisanClick(artisan.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{artisan.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {artisan.specialty}
                  </h6>
                  <p className="card-text">{artisan.location}</p>
                  <StarRating rating={parseFloat(artisan.note)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`. */}
      <Link to="/" className="btn btn-primary mt-4">
        Retour à l&apos;accueil
      </Link>
    </div>
    </Layout>
  );
};

export default SearchResultPage;
