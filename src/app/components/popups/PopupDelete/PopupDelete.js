import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PopupDelete.scss';

const PopupDelete = ({ close, submit }) => {
  return (
    <div className="PopupDelete-wrapper">
      <div className="PopupDelete">
        <button className="PopupDelete__close-btn" onClick={() => close()} />
        <h2 className="PopupDelete__heading">DELETE MOVIE</h2>
        <span className="PopupDelete__label">
          Are you sure you want to delete this movie?
        </span>
        <button className="PopupDelete__confirm" onClick={() => submit()}>
          CONFIRM
        </button>
      </div>
    </div>
  );
};

PopupDelete.propTypes = {
  close: PropTypes.func,
  submit: PropTypes.func,
};

export default PopupDelete;
