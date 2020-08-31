/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PopupEdit.scss';

const PopupEdit = ({
  title: titleDefault,
  url: urlDefault,
  genres: genresDefault,
  date: dateDefault,
  overview: overviewDefault,
  runtime: runtimeDefault,
  id,
  close,
  editMovie,
}) => {
  const [title, setTitle] = useState(titleDefault);
  const [url, setUrl] = useState(urlDefault);
  const [genres, setGenres] = useState(genresDefault);
  const [date, setDate] = useState(dateDefault);
  const [overview, setOverview] = useState(overviewDefault);
  const [runtime, setRuntime] = useState(runtimeDefault);

  return (
    <div className="PopupEdit-wrapper">
      <div className="PopupEdit">
        <button
          type="button"
          className="PopupEdit__close-btn"
          onClick={() => close()}
        />
        <h2 className="PopupEdit__heading">EDIT MOVIE</h2>
        <span className="PopupEdit__label">MOVIE ID</span>
        <span className="PopupEdit__id">{id}</span>
        <div className="PopupEdit__form">
          <label className="PopupEdit__label">
            TITLE
            <input
              className="PopupEdit__input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="PopupEdit__label">
            RELEASE DATE
            <input
              className="PopupEdit__input"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label className="PopupEdit__label">
            MOVIE URL
            <input
              className="PopupEdit__input"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <label className="PopupEdit__label">
            GENRE
            <input
              className="PopupEdit__input"
              type="text"
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
            />
          </label>
          <label className="PopupEdit__label">
            OVERVIEW
            <input
              className="PopupEdit__input"
              type="text"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          </label>
          <label className="PopupEdit__label">
            RUNTIME
            <input
              className="PopupEdit__input"
              type="text"
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
            />
          </label>
          <div className="PopupEdit__buttons">
            <button
              type="button"
              className="PopupEdit__reset-btn"
              onClick={() => {
                setTitle(titleDefault);
                setUrl(urlDefault);
                setGenres(genresDefault);
                setDate(dateDefault);
                setOverview(overviewDefault);
                setRuntime(runtimeDefault);
              }}
            >
              RESET
            </button>
            <button
              type="button"
              className="PopupEdit__save-btn"
              onClick={() => {
                editMovie({
                  title,
                  url,
                  genres,
                  date,
                  overview,
                  runtime,
                  id,
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

PopupEdit.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
};

export default PopupEdit;
