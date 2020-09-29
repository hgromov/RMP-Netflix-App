/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  urlPattern,
  numberPattern,
} from '../../../common/services/validationPatterns';
import './PopupEdit.scss';

const PopupEdit = ({
  title,
  posterPath,
  genres,
  date,
  overview,
  runtime,
  id,
  close,
  isVisible,
  editMovie,
}) => {
  const {
    register, handleSubmit, errors, reset,
  } = useForm();

  return (
    <div className={`PopupEdit-wrapper${isVisible ? '' : '--hiden'}`}>
      <div className="PopupEdit">
        <button
          type="button"
          className="PopupEdit__close-btn"
          onClick={close}
        />
        <h2 className="PopupEdit__heading">EDIT MOVIE</h2>
        <span className="PopupEdit__label">MOVIE ID</span>
        <span className="PopupEdit__id">{id}</span>
        <div className="PopupEdit__form">
          <form onSubmit={handleSubmit((editedMovie) => editMovie({ ...editedMovie, id }))}>
            <label className="PopupAdd__label">
              TITLE
              <input
                className={`PopupAdd__input ${
                  errors.title && 'PopupAdd__input--wrong'
                }`}
                type="text"
                name="title"
                defaultValue={title}
                ref={register({ required: true })}
              />
            </label>
            <label className="PopupAdd__label">
              RELEASE DATE
              <input
                className={`PopupAdd__input ${
                  errors.date && 'PopupAdd__input--wrong'
                }`}
                type="date"
                name="date"
                defaultValue={date}
                ref={register({ required: true })}
              />
            </label>
            <label className="PopupAdd__label">
              MOVIE URL
              <input
                className={`PopupAdd__input ${
                  errors.posterPath && 'PopupAdd__input--wrong'
                }`}
                type="text"
                name="posterPath"
                defaultValue={posterPath}
                ref={register({
                  required: true,
                  pattern: urlPattern,
                })}
              />
            </label>
            <label className="PopupAdd__label">
              GENRE
              <input
                className={`PopupAdd__input ${
                  errors.genres && 'PopupAdd__input--wrong'
                }`}
                type="text"
                name="genres"
                defaultValue={genres}
                ref={register({ required: true })}
              />
            </label>
            <label className="PopupAdd__label">
              OVERVIEW
              <input
                className={`PopupAdd__input ${
                  errors.overview && 'PopupAdd__input--wrong'
                }`}
                type="text"
                name="overview"
                defaultValue={overview}
                ref={register({ required: true })}
              />
            </label>
            <label className="PopupAdd__label">
              RUNTIME
              <input
                className={`PopupAdd__input ${
                  errors.runtime && 'PopupAdd__input--wrong'
                }`}
                type="number"
                name="runtime"
                defaultValue={runtime}
                ref={register({
                  required: true,
                  pattern: numberPattern,
                  min: 1,
                  max: 500,
                })}
              />
            </label>
            <div className="PopupEdit__buttons">
              <button
                type="button"
                className="PopupEdit__reset-btn"
                onClick={reset}
              >
                RESET
              </button>
              <button type="submit" className="PopupEdit__save-btn">
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

PopupEdit.propTypes = {
  id: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
};

export default PopupEdit;
