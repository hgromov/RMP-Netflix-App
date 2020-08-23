import React from 'react';
import Header from '../../components/header/header';

export default ({showAddMoviePopup}) => {
  return (
    <Header addMovie={showAddMoviePopup} handleSubmit={() => {}} onChange={() => {}} />
  );
};
