import React from 'react';
import PropTypes from 'prop-types';
import FilterSort from '../FilterSort/FilterSort';
import MoviesList from '../MoviesList/MoviesList';
import './Content.scss';

const Content = ({
  handleSubmitFilter,
  handleSubmitSort,
  movies,
  showEditPopup,
  showDeletePopup,
  showMovieDetails,
}) => (
  <div className="Content">
    <FilterSort
      handleSubmitFilter={handleSubmitFilter}
      handleSubmitSort={handleSubmitSort}
    />
    <MoviesList
      movies={movies}
      showEditPopup={showEditPopup}
      showDeletePopup={showDeletePopup}
      showMovieDetails={showMovieDetails}
    />
  </div>
);

Content.propTypes = {
  handleSubmitFilter: PropTypes.func.isRequired,
  handleSubmitSort: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  showEditPopup: PropTypes.func.isRequired,
  showDeletePopup: PropTypes.func.isRequired,
  showMovieDetails: PropTypes.func.isRequired,
};

export default Content;
