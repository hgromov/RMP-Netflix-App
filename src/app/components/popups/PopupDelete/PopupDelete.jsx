/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import './PopupDelete.scss';

const PopupDelete = ({ close, deleteMovie }) => (
  <div className="PopupDelete-wrapper">
    <div className="PopupDelete">
      <button
        type="button"
        className="PopupDelete__close-btn"
        onClick={() => close()}
      />
      <h2 className="PopupDelete__heading">DELETE MOVIE</h2>
      <span className="PopupDelete__label">
        Are you sure you want to delete this movie?
      </span>
      <button type="button" className="PopupDelete__confirm" onClick={() => deleteMovie()}>
        CONFIRM
      </button>
    </div>
  </div>
);

PopupDelete.propTypes = {
  close: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default PopupDelete;
