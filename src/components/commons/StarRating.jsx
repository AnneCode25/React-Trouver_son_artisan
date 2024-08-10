import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2; // Arrondir à 0.5 près

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStarSolid} className="text-warning" />
      );
    } else if (i - 0.5 === roundedRating) {
      stars.push(
        <span key={i} className="position-relative d-inline-block">
          <FontAwesomeIcon icon={faStarRegular} className="text-warning" />
          <FontAwesomeIcon
            icon={faStarSolid}
            className="text-warning position-absolute"
            style={{ clipPath: "inset(0 50% 0 0)", left: 0 }}
          />
        </span>
      );
    } else {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarRegular}
          className="text-warning"
        />
      );
    }
  }

  return (
    <div className="d-flex align-items-center">
      <div className="me-2">{stars}</div>
      <span className="text-muted">{rating.toFixed(1)}/5</span>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.node.isRequired,
};

export default StarRating;
