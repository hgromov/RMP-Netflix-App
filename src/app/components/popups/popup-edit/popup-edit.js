import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './popup-edit.scss';

const PopupEdit = ({ name, ganres, year, id, close }) => {
  const [title, setTitle] = useState(name);
  const [date, setDate] = useState(year);
  const [url, setUrl] = useState('');
  const [genres, setGenres] = useState(ganres);
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState('');

  return (
    <div className="popupEdit-wrapper">
      <div className="popupEdit">
        <button className="popupEdit__close-btn" onClick={() => close()} />
        <h2 className="popupEdit__heading">EDIT MOVIE</h2>
        <span className="popupEdit__label">MOVIE ID</span>
        <span className="popupEdit__id">{id}</span>
        <div className="popupEdit__form">
          <label className="popupEdit__label">
            TITLE
            <input
              className="popupEdit__input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="popupEdit__label">
            RELEASE DATE
            <input
              className="popupEdit__input"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label className="popupEdit__label">
            MOVIE URL
            <input
              className="popupEdit__input"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <label className="popupEdit__label">
            GENRE
            <input
              className="popupEdit__input"
              type="text"
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
            />
          </label>
          <label className="popupEdit__label">
            OVERVIEW
            <input
              className="popupEdit__input"
              type="text"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          </label>
          <label className="popupEdit__label">
            RUNTIME
            <input
              className="popupEdit__input"
              type="text"
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
            />
          </label>
          <div className="popupEdit__buttons">
            <button className="popupEdit__reset-btn" onClick={() => {}}>
              RESET
            </button>
            <button className="popupEdit__save-btn" onClick={() => {}}>
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PopupEdit.propTypes = {
  id: PropTypes.number,
  ganres: PropTypes.string,
  year: PropTypes.string,
  close: PropTypes.func,
};

export default PopupEdit;
