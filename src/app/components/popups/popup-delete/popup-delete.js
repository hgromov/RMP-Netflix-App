import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './popup-delete.scss';

const PopupDelete = ({ id, close, submit }) => {
  return (
    <div className="popupDelete-wrapper">
      <div className="popupDelete">
        <button className="popupDelete__close-btn" onClick={() => close()} />
        <h2 className="popupDelete__heading">DELETE MOVIE</h2>
        <span className="popupDelete__label">
          Are you sure you want to delete this movie?
        </span>
        <button className="popupDelete__confirm" onClick={() => submit()}>
          CONFIRM
        </button>
      </div>
    </div>
  );
};

PopupDelete.propTypes = {
  id: PropTypes.number,
  close: PropTypes.func,
};

export default PopupDelete;
