/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({
  showAddMoviePopup,
  children,
}) => {
  const { name } = children.type;
  const isMovieDetails = name === 'MovieDetails';
  return (
    <header className={isMovieDetails ? 'Header Header--expanded' : 'Header'}>
      <div className="upper">
        <div className="upper__logo logo" />
        {isMovieDetails ? (
          <Link to="/">
            <button
              type="button"
              className="upper__search"
            />
          </Link>
        ) : (
          <button
            type="button"
            className="upper__addMovie"
            onClick={showAddMoviePopup}
          >
            <span className="upper__addMovieText">+ ADD MOVIE</span>
          </button>
        )}
      </div>
      {children}
    </header>
  );
};

Header.propTypes = {
  showAddMoviePopup: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Header;
