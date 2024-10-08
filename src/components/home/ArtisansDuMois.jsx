import artisansData from "../../data/datas.json";
import StarRating from "../commons/StarRating.jsx";
import { useNavigate } from "react-router-dom";

const ArtisansDuMois = () => {
  const topArtisans = artisansData.filter((artisan) => artisan.top);
  const navigate = useNavigate();
  const handleArtisanClick = (artisanId) => {
    navigate(`/artisan/${String(artisanId)}`);
  };

  return (
    <section className="artisans-du-mois py-5">
      <div className="container">
        <h2 className="mb-5 titre-homepage">Artisans du Mois</h2>
        <div className="row">
          {topArtisans.map((artisan) => (
            <div key={artisan.id} className="col-md-4 mb-4">
              <div
                className="card"
                onClick={() => handleArtisanClick(artisan.id)}
              >
                <div className="card-body">
                  <h5 className="card-title">{artisan.name}</h5>
                  <p className="card-text">{artisan.specialty}</p>
                  <p className="card-text">{artisan.about}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <StarRating rating={parseFloat(artisan.note)} />
                    <small className="text-muted">{artisan.location}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisansDuMois;
