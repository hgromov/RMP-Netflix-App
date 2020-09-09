import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PopupEdit from '../../../components/popups/PopupEdit/PopupEdit';
import { hideEditPopup, putMovie } from '../../../../store/actions';

const editPopupContainer = () => {
  const id = useSelector((state) => state.editMoviePopup.id);
  const isVisible = useSelector((state) => state.editMoviePopup.isVisible);
  const selectedMovie = useSelector((state) => state.movies.find((movie) => movie.id === id));
  const dispatch = useDispatch();
  const close = () => dispatch(hideEditPopup());
  const dispatchEditMovie = (movie) => {
    dispatch(putMovie(movie));
    close();
  };
  if (!id) return null;

  const {
    title,
    posterPath,
    genres,
    date,
    overview,
    runtime,
  } = selectedMovie;

  return (
    <PopupEdit
      close={close}
      isVisible={isVisible}
      id={id}
      title={title}
      posterPath={posterPath}
      genres={genres}
      date={date}
      overview={overview}
      runtime={runtime}
      editMovie={dispatchEditMovie}
    />
  );
};

export default editPopupContainer;
