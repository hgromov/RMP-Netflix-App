import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PopupAdd.scss';

const PopupAdd = ({ close }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');
  const [genres, setGenres] = useState('');
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState('');

  return (
    <div className="PopupAdd-wrapper">
      <div className="PopupAdd">
        <button className="PopupAdd__close-btn" onClick={() => close()} />
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
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label className="PopupAdd__label">
            MOVIE URL
            <input
              className="PopupAdd__input"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
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
              type="text"
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
            />
          </label>
          <div className="PopupAdd__buttons">
            <button className="PopupAdd__reset-btn" onClick={() => {}}>
              RESET
            </button>
            <button className="PopupAdd__save-btn" onClick={() => {}}>
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PopupAdd.propTypes = {
  close: PropTypes.func,
};

export default PopupAdd;
