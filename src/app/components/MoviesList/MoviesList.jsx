import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = ({ movies, showEditPopup, showDeletePopup }) => (
  <>
    <div className="movies-counter">
      <span className="movies-counter__amount">{movies.length}</span>
      <span> movies found</span>
    </div>
    <div className="MoviesList-wrapper">
      {movies.map(({
        title,
        date,
        url,
        genres,
        id,
      }) => (
        <MovieCard
          title={title}
          date={date}
          key={id}
          id={id}
          url={url}
          genres={genres}
          showEditPopup={showEditPopup}
          showDeletePopup={showDeletePopup}
        />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  showEditPopup: PropTypes.func.isRequired,
  showDeletePopup: PropTypes.func.isRequired,
};

export default MoviesList;
