import { createSelector } from 'reselect';

const select = (selector, callback) => createSelector(
  selector, (state) => (callback ? callback(state) : state),
);

const getMovies = (state) => state.movies;
const getIsVisibleAddPopup = (state) => state.addMoviePopup.isVisible;
const getIsVisibleEditPopup = (state) => state.editMoviePopup.isVisible;
const getIsVisibleDeletePopup = (state) => state.deleteMoviePopup.isVisible;
const getIdOfEditedMovie = (state) => state.editMoviePopup.id;
const getIdOfDeletedMovie = (state) => state.deleteMoviePopup.id;

export const moviesSelector = select(getMovies);
export const movieDetailsSelector = select((state) => state.movieDetails);

export const isVisibleAddPopupSelector = select(getIsVisibleAddPopup);
export const isVisibleEditPopupSelector = select(getIsVisibleEditPopup);
export const isVisibleDeletePopupSelector = select(getIsVisibleDeletePopup);

export const idOfEditedMovieSelector = select(getIdOfEditedMovie);
export const idOfDeletedMovieSelector = select(getIdOfDeletedMovie);

export const isBlurSelector = createSelector(
  [
    getIsVisibleAddPopup,
    getIsVisibleEditPopup,
    getIsVisibleDeletePopup,
  ],
  (addPopup, editPopup, deletePopup) => (
    (addPopup || editPopup || deletePopup)
      ? 'Layout--blur'
      : ''
  ),
);

export const editedMovieSelector = createSelector(
  [getMovies, getIdOfEditedMovie],
  (movies, id) => movies.find((movie) => movie.id === id),
);
