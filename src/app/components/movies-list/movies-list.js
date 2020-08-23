import React from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import './movies-list.scss';

const MoviesList = ({ movies, showEditPopup, showDeletePopup }) => (
  <>
    <div className="movies-counter">
      <span className="movies-counter__amount">{movies.length}</span> movies
      found
    </div>
    <div className="moviesList-wrapper">
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} showEditPopup={showEditPopup} showDeletePopup={showDeletePopup} />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
