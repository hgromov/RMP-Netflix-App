/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import getRaitingColor from '../../../common/services/getRaitingColor';

const Header = ({
  showAddMoviePopup,
  handleSubmit,
  onChange,
  movieDetails,
  hideMovieDetails,
}) => (
  <header className={movieDetails ? 'Header Header--expanded' : 'Header'}>
    <div className="upper">
      <div className="upper__logo logo" />
      {movieDetails ? (
        <button
          type="button"
          className="upper__search"
          onClick={() => {
            hideMovieDetails();
          }}
        />
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
    {movieDetails ? (
      <div className="movieDetails">
        <div className="movieDetails__image-wrapper">
          <img
            className="movieDetails__image"
            src={movieDetails.posterPath}
            alt="not found"
          />
        </div>
        <div className="movieDetails__info">
          <div className="movieDetails__main">
            <h1 className="movieDetails__title">{movieDetails.title}</h1>
            <div
              className={`movieDetails__raiting movieDetails__raiting--${getRaitingColor(movieDetails.voteAverage)}`}
            >
              {movieDetails.voteAverage}
            </div>
          </div>
          <h4 className="movieDetails__overview">{movieDetails.overview}</h4>
          <div className="movieDetails__time">
            <span className="movieDetails__date">
              {movieDetails.date.substr(0, 4)}
            </span>
            <span className="movieDetails__runtime">
              {`${movieDetails.runtime} min`}
            </span>
          </div>
          <p className="movieDetails__description">
            {movieDetails.description}
          </p>
        </div>
      </div>
    ) : (
      <div className="search">
        <h1 className="search__heading">FIND YOUR MOVIE</h1>
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__field"
            type="text"
            onChange={onChange}
            placeholder="What do you whant to watch?"
          />
          <button className="search__button" type="submit">
            SEARCH
          </button>
        </form>
      </div>
    )}
  </header>
);

Header.propTypes = {
  showAddMoviePopup: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  hideMovieDetails: PropTypes.func.isRequired,
  movieDetails: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  ),
};

Header.defaultProps = {
  movieDetails: null,
};

export default Header;
