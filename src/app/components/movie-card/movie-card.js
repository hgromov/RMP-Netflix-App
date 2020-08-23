import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './movie-card.scss';

const MovieCard = ({
  pic,
  name,
  ganres,
  year,
  id,
  showEditPopup,
  showDeletePopup,
}) => {
  const [isShownOptions, setIsShownOptions] = useState(false);
  const [isShownSelect, setIsShownSelect] = useState(false);
  return (
    <div
      className="movieCard"
      onMouseEnter={() => setIsShownOptions(true)}
      onMouseLeave={() => setIsShownOptions(false)}
    >
      <div className="movieCard__imageWrapper">
        <img className="movieCard__picture" src={pic} alt="not found"></img>
        {isShownOptions && (
          <button
            type="button"
            className="movieCard__options"
            onClick={() => {
              setIsShownOptions(false);
              setIsShownSelect(true);
            }}
          >
            <div className="movieCard__options-dot"></div>
            <div className="movieCard__options-dot"></div>
            <div className="movieCard__options-dot"></div>
          </button>
        )}
        {isShownSelect && (
          <div className="movieCard__select">
            <button
              className="movieCard__select-close"
              onClick={() => setIsShownSelect(false)}
            ></button>
            <button
              className="movieCard__select-edit"
              onClick={() => showEditPopup({ id, name, ganres, year })}
            >
              Edit
            </button>
            <button
              className="movieCard__select-delete"
              onClick={() => showDeletePopup({ id })}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="movieCard__desctiption">
        <div className="movieCard__name">{name}</div>
        <div className="movieCard__ganres">{ganres}</div>
        <div className="movieCard__year">{year}</div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  pic: PropTypes.string,
  name: PropTypes.string,
  ganres: PropTypes.string,
  year: PropTypes.string,
};

export default MovieCard;
