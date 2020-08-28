import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = ({ movies, showEditPopup, showDeletePopup }) => (
  <>
    <div className="movies-counter">
      <span className="movies-counter__amount">{movies.length}</span>
      {' '}
      movies
      found
    </div>
    <div className="MoviesList-wrapper">
      {movies.map((movie) => (
        <MovieCard
          {...movie}
          key={movie.id}
          showEditPopup={showEditPopup}
          showDeletePopup={showDeletePopup}
        />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.array,
  showEditPopup: PropTypes.func,
  showDeletePopup: PropTypes.func,
};

export default MoviesList;
