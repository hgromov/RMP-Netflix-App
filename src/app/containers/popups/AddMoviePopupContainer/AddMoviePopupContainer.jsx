import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddPopup, postMovie } from '../../../../store/actions';
import PopupAdd from '../../../components/popups/PopupAdd/PopupAdd';

const AddMoviePopupContainer = () => {
  const isVisible = useSelector((state) => state.addMoviePopup.isVisible);
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
