/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const MovieCard = ({
  url,
  title,
  genres,
  date,
  id,
  overview,
  runtime,
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
        <img className="MovieCard__picture" src={url} alt="not found" />
        {isShownOptions && (
          <button
            type="button"
            className="MovieCard__options"
            onClick={() => {
              setIsShownOptions(false);
              setIsShownSelect(true);
            }}
          >
            <div className="MovieCard__options-dot" />
            <div className="MovieCard__options-dot" />
            <div className="MovieCard__options-dot" />
          </button>
        )}
        {isShownSelect && (
          <div className="MovieCard__select">
            <button
              type="button"
              className="MovieCard__select-close"
              onClick={() => setIsShownSelect(false)}
            />
            <button
              type="button"
              className="MovieCard__select-edit"
              onClick={() => showEditPopup({
                url,
                title,
                genres,
                date,
                id,
                overview,
                runtime,
              })}
            >
              Edit
            </button>
            <button
              type="button"
              className="MovieCard__select-delete"
              onClick={() => showDeletePopup({ id })}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="MovieCard__desctiption">
        <div className="title">{title}</div>
        <div className="MovieCard__genres">
          {genres.length === 2 ? genres.join(' / ') : genres.join(', ')}
        </div>
        <div className="MovieCard__date">{date}</div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  showEditPopup: PropTypes.func.isRequired,
  showDeletePopup: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  runtime: '',
  overview: '',
};

export default MovieCard;
