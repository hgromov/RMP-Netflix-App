import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';

const HeaderContainer = ({ showAddMoviePopup }) => (
  <Header
    addMovie={showAddMoviePopup}
    handleSubmit={() => {}}
    onChange={() => {}}
  />
);

HeaderContainer.propTypes = {
  showAddMoviePopup: PropTypes.func,
};

export default HeaderContainer;
