import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = ({
  movies, showEditPopup, showDeletePopup, showMovieDetails,
}) => (
  <>
    <div className="movies-counter">
      <span className="movies-counter__amount">{movies.length}</span>
      <span> movies found</span>
    </div>
    <div className="MoviesList-wrapper">
      {movies.map(({
        title,
        date,
        posterPath,
        genres,
        id,
      }) => (
        <MovieCard
          title={title}
          date={date}
          key={id}
          id={id}
          posterPath={posterPath}
          genres={genres}
          showEditPopup={showEditPopup}
          showDeletePopup={showDeletePopup}
          showMovieDetails={showMovieDetails}
        />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  showEditPopup: PropTypes.func.isRequired,
  showDeletePopup: PropTypes.func.isRequired,
  showMovieDetails: PropTypes.func.isRequired,
};

export default MoviesList;
