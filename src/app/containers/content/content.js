import React from 'react';
import Content from '../../components/content/content';
import movies from '../../mock/movies';

export default ({showEditPopup, showDeletePopup}) => (
  <Content
    handleSubmitCategory={() => {}}
    handleSubmitSort={() => {}}
    movies={movies}
    showEditPopup={showEditPopup}
    showDeletePopup={showDeletePopup}
  />
);
