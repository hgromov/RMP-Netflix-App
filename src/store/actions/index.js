import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  SHOW_MOVIE_DETAILS,
  HIDE_MOVIE_DETAILS,
  GET_MOVIES_LIST,
  TOGGLE_ADD_MOVIE_POPUP,
  SHOW_EDIT_MOVIE_POPUP,
  HIDE_EDIT_MOVIE_POPUP,
  SHOW_DELETE_MOVIE_POPUP,
  HIDE_DELETE_MOVIE_POPUP,
} from '../types';
import { toCamel, toUnderscore } from '../../app/common/services/renameMovieKeyNames';

export const mapToCamel = (moviesList) => moviesList.map(toCamel);

export const getMoviesListSuccess = (moviesList) => ({
  type: GET_MOVIES_LIST,
  payload: moviesList,
});
export const getMoviesList = () => async (dispatch) => {
  const res = await fetch('http://localhost:4000/movies/?limit=10', {
    'Content-Type': 'text/html',
  });
  const movies = await res.json();
  const { data } = movies;
  dispatch(getMoviesListSuccess(mapToCamel(data)));
};

export const toggleAddPopup = () => ({ type: TOGGLE_ADD_MOVIE_POPUP });
export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});
export const postMovie = (movie) => async (dispatch) => {
  const newMovie = toUnderscore(movie);
  const res = await fetch('http://localhost:4000/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  });
  const CamelizedMovie = toCamel(await res.json());
  dispatch(addMovie(CamelizedMovie));
};

export const showEditPopup = (id) => ({
  type: SHOW_EDIT_MOVIE_POPUP,
  payload: id,
});
export const hideEditPopup = () => ({ type: HIDE_EDIT_MOVIE_POPUP });
const editMovie = (movie) => ({
  type: EDIT_MOVIE,
  payload: movie,
});
export const putMovie = (movie) => async (dispatch) => {
  const newMovie = toUnderscore(movie);
  const res = await fetch('http://localhost:4000/movies', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  });
  const CamelizedMovie = toCamel(await res.json());
  dispatch(editMovie(CamelizedMovie));
};

export const showDeletePopup = (id) => ({
  type: SHOW_DELETE_MOVIE_POPUP,
  payload: id,
});
export const hideDeletePopup = () => ({ type: HIDE_DELETE_MOVIE_POPUP });
export const removeMovie = (id) => ({
  type: DELETE_MOVIE,
  payload: id,
});
export const deleteMovie = (id) => async (dispatch) => {
  const res = await fetch(`http://localhost:4000/movies/${id}`, { method: 'DELETE' });
  if (res.status === 204) {
    dispatch(removeMovie(id));
  }
};

export const showMovieDetails = (movie) => ({
  type: SHOW_MOVIE_DETAILS,
  payload: movie,
});
export const getMovieDetails = (id) => async (dispatch) => {
  const res = await fetch(`http://localhost:4000/movies/${id}`);
  const movie = toCamel(await res.json());
  dispatch(showMovieDetails(movie));
};
export const hideMovieDetails = () => ({ type: HIDE_MOVIE_DETAILS });
