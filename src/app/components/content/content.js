import React from 'react';
import PropTypes from 'prop-types';
import FilterSort from '../filter-sort/filter-sort';
import MoviesList from '../movies-list/movies-list';
import './content.scss';

const Content = ({
  handleSubmitCategory,
  handleSubmitSort,
  movies,
  showEditPopup,
  showDeletePopup,
}) => (
  <div className="content">
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
  handleFilterSort: PropTypes.func,
  movies: PropTypes.array,
};

export default Content;
