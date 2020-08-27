import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

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
      className="MovieCard"
      onMouseEnter={() => setIsShownOptions(true)}
      onMouseLeave={() => setIsShownOptions(false)}
    >
      <div className="MovieCard__imageWrapper">
        <img className="MovieCard__picture" src={pic} alt="not found"></img>
        {isShownOptions && (
          <button
            type="button"
            className="MovieCard__options"
            onClick={() => {
              setIsShownOptions(false);
              setIsShownSelect(true);
            }}
          >
            <div className="MovieCard__options-dot"></div>
            <div className="MovieCard__options-dot"></div>
            <div className="MovieCard__options-dot"></div>
          </button>
        )}
        {isShownSelect && (
          <div className="MovieCard__select">
            <button
              className="MovieCard__select-close"
              onClick={() => setIsShownSelect(false)}
            ></button>
            <button
              className="MovieCard__select-edit"
              onClick={() => showEditPopup({ id, name, ganres, year })}
            >
              Edit
            </button>
            <button
              className="MovieCard__select-delete"
              onClick={() => showDeletePopup({ id })}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="MovieCard__desctiption">
        <div className="MovieCard__name">{name}</div>
        <div className="MovieCard__ganres">{ganres}</div>
        <div className="MovieCard__year">{year}</div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  pic: PropTypes.string,
  name: PropTypes.string,
  ganres: PropTypes.string,
  year: PropTypes.string,
  showEditPopup: PropTypes.func,
  showDeletePopup: PropTypes.func,
};

export default MovieCard;
