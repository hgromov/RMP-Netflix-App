import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PopupAdd from '../../../components/popups/PopupAdd/PopupAdd';
import { isVisibleAddPopupSelector } from '../../../../store/selectors';
import { toggleAddPopup, postMovie } from '../../../../store/actions';

const AddMoviePopupContainer = () => {
  const isVisible = useSelector(isVisibleAddPopupSelector);
  const dispatch = useDispatch();
  const close = () => dispatch(toggleAddPopup());
  const dispatchAddMovie = (movie) => {
    dispatch(postMovie(movie));
    close();
  };

  return (
    <PopupAdd isVisible={isVisible} close={close} addMovie={dispatchAddMovie} />
  );
};

export default AddMoviePopupContainer;
