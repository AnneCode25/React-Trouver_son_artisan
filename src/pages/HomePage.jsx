import Layout from "../components/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArtisansDuMois from "../components/home/ArtisansDuMois";

const HomePage = () => {
  const steps = [
    {
      icon: "fa-solid fa-list",
      title: "Choisir la catégorie",
      description: "Sélectionnez la catégorie d'artisanat dans le menu.",
    },
    {
      icon: "fa-solid fa-user",
      title: "Choisir un artisan",
      description:
        "Parcourez la liste et sélectionnez l'artisan qui correspond à vos besoins.",
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Contacter",
      description: "Utilisez le formulaire de contact pour joindre l'artisan.",
    },
    {
      icon: "fa-solid fa-clock",
      title: "Attendre la réponse",
      description: "Une réponse vous sera apportée sous 48h.",
    },
  ];

  return (
    <Layout>
        <div className="banner"></div>
        <div className="container">

        <div className="homepage-content-wrapper">
          <h1 className="titre-homepage">Trouve ton artisan !</h1>
          <section className="how-it-works py-5">
            <div className="container">
              <h2 className="text-center mb-5">Comment ça marche</h2>
              <div className="row">
                {steps.map((step, index) => (
                  <div key={index} className="col-md-6 col-lg-3 mb-4">
                    <div className="card h-100 text-center shadow-sm">
                      <div className="card-body d-flex flex-column justify-content-center">
                        <div className="mb-3">
                          <span className="bg-primary text-white rounded-circle p-3 d-inline-block">
                            <FontAwesomeIcon icon={step.icon} size="2x" />
                          </span>
                        </div>
                        <h5 className="card-title">{step.title}</h5>
                        <p className="card-text">{step.description}</p>
                      </div>
                      <div className="card-footer bg-white border-0">
                        <span className="text-primary font-weight-bold">
                          Étape {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <ArtisansDuMois />
    </Layout>
  );
};

export default HomePage;
