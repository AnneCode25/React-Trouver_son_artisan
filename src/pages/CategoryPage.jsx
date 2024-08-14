import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import artisansData from '../data/datas.json';
import Layout from "../components/layout/Layout";
import StarRating from "../components/commons/StarRating";

const CategoryPage = () => {

        const { category } = useParams();
        const [artisans, setArtisans] = useState([]);
        const navigate = useNavigate();

        useEffect(() => {
                const filteredArtisans = artisansData.filter(artisan => artisan.category.toLowerCase() === category.toLowerCase());
                setArtisans(filteredArtisans);
        }, [category]);

        const handleArtisanClick = (artisanId) => {
                navigate(`/artisan/${String(artisanId)}`);
        };

        return (
                <Layout>
                <div className="p-4">
                  <h1 className="text-2xl font-bold mb-4">Artisans de la catégorie : {category}</h1>
                  {artisans.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {artisans.map(artisan => (
                        <div key={artisan.id} className="border p-4 rounded shadow" onClick={() => handleArtisanClick(artisan.id)}>
                          <h2 className="text-xl font-semibold">{artisan.name}</h2>
                          <p>{artisan.description}</p>
                          <p>{artisan.about}</p>
                          <div className="flex justify-between items-center mt-2">
                  <StarRating rating={parseFloat(artisan.note)} />
                  <small className="text-gray-500">{artisan.location}</small>
                </div>
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