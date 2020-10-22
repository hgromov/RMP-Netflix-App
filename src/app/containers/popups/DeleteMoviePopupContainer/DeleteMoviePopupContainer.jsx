import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PopupDelete from '../../../components/popups/PopupDelete/PopupDelete';
import { idOfDeletedMovieSelector, isVisibleDeletePopupSelector } from '../../../../store/selectors';
import { hideDeletePopup, deleteMovie } from '../../../../store/actions';

const deletePopupContainer = () => {
  const id = useSelector(idOfDeletedMovieSelector);
  const isVisible = useSelector(isVisibleDeletePopupSelector);
  const dispatch = useDispatch();
  const close = () => dispatch(hideDeletePopup());
  const dispatchDeleteMovie = () => {
    dispatch(deleteMovie(id));
    close();
  };

  return (
    <PopupDelete
      isVisible={isVisible}
      id={id}
      close={close}
      deleteMovie={dispatchDeleteMovie}
    />
  );
};

export default deletePopupContainer;
