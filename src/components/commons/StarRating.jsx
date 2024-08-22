import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2; // Arrondir à 0.5 près

  const starStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '1em',
    height: '1em',
    overflow: 'hidden',
    position: 'relative'
  };

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(roundedRating)) {
      // Étoile pleine
      stars.push(
        <span key={i} style={starStyle}>
          <FontAwesomeIcon icon={faStarSolid} className="text-warning" />
        </span>
      );
    } else if (i - 0.5 <= roundedRating) {
      // Demi-étoile
      stars.push(
        <span key={i} style={starStyle}>
          <FontAwesomeIcon 
            icon={faStarRegular} 
            className="text-warning"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
          <span style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '50%', 
            overflow: 'hidden'
          }}>
            <FontAwesomeIcon
              icon={faStarSolid}
              className="text-warning"
            />
          </span>
        </span>
      );
    } else {
      // Étoile vide
      stars.push(
        <span key={i} style={starStyle}>
          <FontAwesomeIcon
            icon={faStarRegular}
            className="text-warning"
          />
        </span>
      );
    }
  }

  return (
    <div className="d-flex align-items-center">
      <div className="me-2" style={{ lineHeight: 1, fontSize: '1rem' }}>{stars}</div>
      <span className="text-muted">{rating.toFixed(1)}/5</span>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;