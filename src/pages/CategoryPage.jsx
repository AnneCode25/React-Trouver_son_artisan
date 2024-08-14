import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import artisansData from '../data/datas.json';
import Layout from "../components/layout/Layout";

const CategoryPage = () => {

        const { category } = useParams();
        const [artisans, setArtisans] = useState([]);

        useEffect(() => {
                const filteredArtisans = artisansData.filter(artisan => artisan.category.toLowerCase() === category.toLowerCase());
                setArtisans(filteredArtisans);
        }, [category]);

        return (
                <Layout>
                <div className="p-4">
                  <h1 className="text-2xl font-bold mb-4">Artisans de la catégorie : {category}</h1>
                  {artisans.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {artisans.map(artisan => (
                        <div key={artisan.id} className="border p-4 rounded shadow">
                          <h2 className="text-xl font-semibold">{artisan.name}</h2>
                          <p>{artisan.description}</p>
                          <Link 
                            to={`/artisan/${artisan.id}`} 
                            className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                          >
                            Voir détails
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Aucun artisan trouvé dans cette catégorie.</p>
                  )}
                </div>
                </Layout>
              );
            };

export default CategoryPage;