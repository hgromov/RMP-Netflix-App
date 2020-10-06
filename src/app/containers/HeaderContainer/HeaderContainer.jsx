import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleAddPopup } from '../../../store/actions';
import Header from '../../components/Header/Header';

const HeaderContainer = ({ children }) => {
  const dispatch = useDispatch();
  const showAddMoviePopup = useCallback(() => dispatch(toggleAddPopup()));

  return <Header showAddMoviePopup={showAddMoviePopup}>{children}</Header>;
};

HeaderContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HeaderContainer;
