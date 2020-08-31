import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';

const HeaderContainer = ({ showAddMoviePopup }) => (
  <Header
    showAddMoviePopup={showAddMoviePopup}
    handleSubmit={() => {}}
    onChange={() => {}}
  />
);

HeaderContainer.propTypes = {
  showAddMoviePopup: PropTypes.func.isRequired,
};

export default HeaderContainer;
