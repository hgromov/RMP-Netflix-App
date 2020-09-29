/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { urlPattern, numberPattern } from '../../../common/services/validationPatterns';
import './PopupAdd.scss';

const PopupAdd = ({ isVisible, close, addMovie }) => {
  const {
    register, handleSubmit, errors, reset,
  } = useForm();

  return (
    <div className={`PopupAdd-wrapper${isVisible ? '' : '--hiden'}`}>
      <div className="PopupAdd">
        <button
          type="button"
          className="PopupAdd__close-btn"
          onClick={close}
        />
        <h2 className="PopupAdd__heading">ADD MOVIE</h2>

        <div className="PopupAdd__form">
          <form onSubmit={handleSubmit(addMovie)}>
            <label className="PopupAdd__label">
              TITLE
              <input
                className={`PopupAdd__input ${
                  errors.title && 'PopupAdd__input--wrong'
                }`}
                type="text"
                name="title"
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
                ref={register({
                  required: true,
                  pattern: numberPattern,
                  min: 1,
                  max: 500,
                })}
              />
            </label>
            <div className="PopupAdd__buttons">
              <button
                type="button"
                className="PopupAdd__reset-btn"
                onClick={reset}
              >
                RESET
              </button>
              <button type="submit" className="PopupAdd__save-btn">
                SAVE
              </button>
            </div>
          </form>
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
