import React from 'react';
import PropTypes from 'prop-types';
import FilterSort from '../FilterSort/FilterSort';
import MoviesList from '../MoviesList/MoviesList';
import './Content.scss';

const Content = ({
  handleSubmitCategory,
  handleSubmitSort,
  movies,
  showEditPopup,
  showDeletePopup,
}) => (
  <div className="Content">
    <FilterSort
      handleSubmitCategory={handleSubmitCategory}
      handleSubmitSort={handleSubmitSort}
    />
    <MoviesList
      movies={movies}
      showEditPopup={showEditPopup}
      showDeletePopup={showDeletePopup}
    />
  </div>
);

Content.propTypes = {
  handleSubmitCategory: PropTypes.func.isRequired,
  handleSubmitSort: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  showEditPopup: PropTypes.func.isRequired,
  showDeletePopup: PropTypes.func.isRequired,
};

export default Content;
