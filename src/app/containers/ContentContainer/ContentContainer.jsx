import React from 'react';
import PropTypes from 'prop-types';
import Content from '../../components/Content/Content';

const ContentContainer = ({
  showEditPopup,
  showDeletePopup,
  showMovieDetails,
  movies,
}) => (
  <Content
    handleSubmitCategory={() => {}}
    handleSubmitSort={() => {}}
    movies={movies}
    showMovieDetails={showMovieDetails}
    showEditPopup={showEditPopup}
    showDeletePopup={showDeletePopup}
  />
);

ContentContainer.propTypes = {
  showEditPopup: PropTypes.func.isRequired,
  showDeletePopup: PropTypes.func.isRequired,
  showMovieDetails: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContentContainer;
