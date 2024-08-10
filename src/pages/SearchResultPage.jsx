import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Importez vos données JSON ici
import data from '../data/datas.json';

const SearchResultPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchTerm = location.state?.searchTerm || '';
    
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
  }, [location.state]);

  return (
    <div className="container mt-4">
      <h2>Résultats de recherche</h2>
      {searchResults.length === 0 ? (
        <p>Aucun résultat trouvé.</p>
      ) : (
        <ul className="list-group">
          {searchResults.map((item, index) => (
            <li key={index} className="list-group-item">
              <strong>{item.name}</strong> - {item.specialty} à {item.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResultPage;