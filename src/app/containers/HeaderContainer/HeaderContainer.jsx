import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import { toggleAddPopup, hideMovieDetails } from '../../../store/actions';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const showAddMoviePopup = useCallback(() => dispatch(toggleAddPopup()));
  const movieDetails = useSelector((state) => state.movieDetails);
  const dispatchHiheMovieDetails = useCallback(() => {
    dispatch(hideMovieDetails());
  });

  return (
    <Header
      showAddMoviePopup={showAddMoviePopup}
      handleSubmit={() => {}}
      onChange={() => {}}
      search={() => {}}
      movieDetails={movieDetails}
      hideMovieDetails={dispatchHiheMovieDetails}
    />
  );
};

export default HeaderContainer;
