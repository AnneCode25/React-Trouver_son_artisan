import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import StarRating from '../components/commons/StarRating'

// Importez vos données JSON ici
import data from '../data/datas.json';

const SearchResultPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || '';

  useEffect(() => {
      if (searchTerm) {
      const results = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Recherche</h1>
      <h2 className="h4 mb-3">Recherche par mot clé</h2>
      <p className="mb-3">Résultats pour : <strong>{searchTerm}</strong></p>
      <p className="mb-4">{searchResults.length} résultat(s) trouvé(s)</p>

      {searchResults.length === 0 ? (
        <p>Aucun résultat trouvé.</p>
      ) : (
        <div className="row">
          {searchResults.map((item, index) => (
            <div key={index} className="col-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.specialty}</h6>
                  <p className="card-text">{item.location}</p>
                  <StarRating rating={parseFloat(item.note)} />
                  </div>
              </div>
            </div>
          ))}
        </div>
      )}
{/* `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`. */}
      <Link to="/" className="btn btn-primary mt-4">Retour à l&apos;accueil</Link>
    </div>
  );
};

export default SearchResultPage;