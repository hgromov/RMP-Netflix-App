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
  handleSubmitCategory: PropTypes.func,
  handleSubmitSort: PropTypes.func,
  movies: PropTypes.array,
  showEditPopup: PropTypes.func,
  showDeletePopup: PropTypes.func,
};

export default Content;
