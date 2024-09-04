import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import StarRating from '../components/commons/StarRating'; 
import data from '../data/datas.json'; 
import EmailForm from "../components/commons/EmailForm";

const ArtisanPage = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    console.log('Données complètes:', data);
    console.log('ID recherché:', id);
    const foundArtisan = data.find(item => String(item.id) === String(id));
    console.log('Artisan trouvé:', foundArtisan);
    setArtisan(foundArtisan);
  }, [id]);

    if (!artisan) {
    return <Layout><div>Artisan non trouvé</div></Layout>;
  }

  return (
    <Layout>
      <div className="container mt-4">
        <h1>{artisan.name}</h1>
        <StarRating rating={parseFloat(artisan.note)} />
        <p><strong>Spécialité:</strong> {artisan.specialty}</p>
        <p><strong>Localisation:</strong> {artisan.location}</p>
        <p><strong>À propos:</strong> {artisan.about}</p>
        <p><strong>Site web:</strong> <a href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a></p>
        
        <h2 className="mt-4 contact">Contactez votre artisan :</h2>
        <EmailForm />
      </div>
    </Layout>
  );
};

export default ArtisanPage;