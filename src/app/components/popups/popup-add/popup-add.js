import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './popup-add.scss';

const PopupAdd = ({ close }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');
  const [genres, setGenres] = useState('');
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState('');

  return (
    <div className="popupAdd-wrapper">
      <div className="popupAdd">
        <button className="popupAdd__close-btn" onClick={() => close()} />
        <h2 className="popupAdd__heading">ADD MOVIE</h2>

        <div className="popupAdd__form">
          <label className="popupAdd__label">
            TITLE
            <input
              className="popupAdd__input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="popupAdd__label">
            RELEASE DATE
            <input
              className="popupAdd__input"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label className="popupAdd__label">
            MOVIE URL
            <input
              className="popupAdd__input"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <label className="popupAdd__label">
            GENRE
            <input
              className="popupAdd__input"
              type="text"
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
            />
          </label>
          <label className="popupAdd__label">
            OVERVIEW
            <input
              className="popupAdd__input"
              type="text"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          </label>
          <label className="popupAdd__label">
            RUNTIME
            <input
              className="popupAdd__input"
              type="text"
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
            />
          </label>
          <div className="popupAdd__buttons">
            <button className="popupAdd__reset-btn" onClick={() => {}}>
              RESET
            </button>
            <button className="popupAdd__save-btn" onClick={() => {}}>
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
