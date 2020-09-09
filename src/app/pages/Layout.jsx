/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderContainer from '../containers/HeaderContainer/HeaderContainer';
import ContentContainer from '../containers/ContentContainer/ContentContainer';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import AddMoviePopupContainer from '../containers/popups/AddMoviePopupContainer/AddMoviePopupContainer';
import EditMoviePopupContainer from '../containers/popups/EditMoviePopupContainer/EditMoviePopupContainer';
import DeleteMoviePopupContainer from '../containers/popups/DeleteMoviePopupContainer/DeleteMoviePopupContainer';

const Layout = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  // const showMovieDetails = (id) => {
  //   setMovieDetails(movies.find((movie) => movie.id === id));
  // };

  const hideMovieDetails = () => {
    setMovieDetails(null);
  };

  const isVisibleAddPopup = useSelector((state) => state.addMoviePopup.isVisible);
  const isVisibleEditPopup = useSelector((state) => state.editMoviePopup.isVisible);
  const isVisibleDeletePopup = useSelector((state) => state.deleteMoviePopup.isVisible);

  const isBlur = useMemo(() => (
    (isVisibleAddPopup || isVisibleEditPopup || isVisibleDeletePopup)
      ? 'Layout--blur'
      : ''
  ), [isVisibleAddPopup, isVisibleEditPopup, isVisibleDeletePopup]);

  return (
    <>
      <div className={isBlur}>
        <ErrorBoundary>
          <HeaderContainer
            hideMovieDetails={hideMovieDetails}
            movie={movieDetails}
          />
          <ContentContainer />
        </ErrorBoundary>
        <Footer />
      </div>
      <AddMoviePopupContainer />
      <EditMoviePopupContainer />
      <DeleteMoviePopupContainer />
    </>
  );
};

export default Layout;
