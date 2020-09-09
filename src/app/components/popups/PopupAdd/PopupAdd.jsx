/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PopupAdd.scss';

const PopupAdd = ({ isVisible, close, addMovie }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [posterPath, setPosterPath] = useState('');
  const [genres, setGenres] = useState('');
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState(0);

  return (
    <div className={`PopupAdd-wrapper${isVisible ? '' : '--hiden'}`}>
      <div className="PopupAdd">
        <button
          type="button"
          className="PopupAdd__close-btn"
          onClick={() => close()}
        />
        <h2 className="PopupAdd__heading">ADD MOVIE</h2>

        <div className="PopupAdd__form">
          <label className="PopupAdd__label">
            TITLE
            <input
              className="PopupAdd__input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="PopupAdd__label">
            RELEASE DATE
            <input
              className="PopupAdd__input"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label className="PopupAdd__label">
            MOVIE URL
            <input
              className="PopupAdd__input"
              type="text"
              value={posterPath}
              onChange={(e) => setPosterPath(e.target.value)}
            />
          </label>
          <label className="PopupAdd__label">
            GENRE
            <input
              className="PopupAdd__input"
              type="text"
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
            />
          </label>
          <label className="PopupAdd__label">
            OVERVIEW
            <input
              className="PopupAdd__input"
              type="text"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          </label>
          <label className="PopupAdd__label">
            RUNTIME
            <input
              className="PopupAdd__input"
              type="number"
              value={runtime}
              onChange={(e) => setRuntime(+e.target.value)}
            />
          </label>
          <div className="PopupAdd__buttons">
            <button
              type="button"
              className="PopupAdd__reset-btn"
              onClick={() => {
                setTitle('');
                setDate('');
                setPosterPath('');
                setGenres('');
                setOverview('');
                setRuntime('');
              }}
            >
              RESET
            </button>
            <button
              type="button"
              className="PopupAdd__save-btn"
              onClick={() => {
                addMovie({
                  title,
                  date,
                  posterPath,
                  genres: genres.split(', '),
                  overview,
                  runtime,
                });
              }}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PopupAdd.propTypes = {
  close: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default PopupAdd;
