import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import StarRating from '../components/commons/StarRating'; // Assurez-vous que le chemin est correct
import data from '../data/datas.json'; // Assurez-vous que le chemin est correct

const ArtisanPage = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    console.log('Données complètes:', data);
    console.log('ID recherché:', id);
    const foundArtisan = data.find(item => String(item.id) === String(id));
    console.log('Artisan trouvé:', foundArtisan);
    setArtisan(foundArtisan);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ici, vous implémenteriez la logique d'envoi d'email
    console.log('Form submitted:', formData);
    // Réinitialiser le formulaire après soumission
    setFormData({ name: '', email: '', message: '' });
  };

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
        
        <h2 className="mt-4">Contactez {artisan.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleInputChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </Layout>
  );
};

export default ArtisanPage;