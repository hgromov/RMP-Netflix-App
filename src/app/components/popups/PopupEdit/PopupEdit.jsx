import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PopupEdit.scss';

const PopupEdit = ({ name, ganres, year, id, close, submit }) => {
  const [title, setTitle] = useState(name);
  const [date, setDate] = useState(year);
  const [url, setUrl] = useState('');
  const [genres, setGenres] = useState(ganres);
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState('');

  return (
    <div className="PopupEdit-wrapper">
      <div className="PopupEdit">
        <button className="PopupEdit__close-btn" onClick={() => close()} />
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
            <button type="button" className="PopupEdit__reset-btn" onClick={() => {}}>
              RESET
            </button>
            <button type="button" className="PopupEdit__save-btn" onClick={() => {}}>
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
  name: PropTypes.string,
  ganres: PropTypes.string,
  year: PropTypes.string,
  close: PropTypes.func,
};

export default PopupEdit;
