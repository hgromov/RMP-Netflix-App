import React from 'react';
import PropTypes from 'prop-types';
import Content from '../../components/Content/Content';
import movies from '../../mock/movies';

const ContentContainer = ({ showEditPopup, showDeletePopup }) => (
  <Content
    handleSubmitCategory={() => {}}
    handleSubmitSort={() => {}}
    movies={movies}
    showEditPopup={showEditPopup}
    showDeletePopup={showDeletePopup}
  />
);

ContentContainer.propTypes = {
  showEditPopup: PropTypes.func,
  showDeletePopup: PropTypes.func,
};

export default ContentContainer;