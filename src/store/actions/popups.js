import {
  TOGGLE_ADD_MOVIE_POPUP,
  SHOW_EDIT_MOVIE_POPUP,
  HIDE_EDIT_MOVIE_POPUP,
  SHOW_DELETE_MOVIE_POPUP,
  HIDE_DELETE_MOVIE_POPUP,
} from '../types';

export const toggleAddPopup = () => ({ type: TOGGLE_ADD_MOVIE_POPUP });

export const showEditPopup = (id) => ({
  type: SHOW_EDIT_MOVIE_POPUP,
  payload: id,
});
export const hideEditPopup = () => ({ type: HIDE_EDIT_MOVIE_POPUP });

export const showDeletePopup = (id) => ({
  type: SHOW_DELETE_MOVIE_POPUP,
  payload: id,
});
export const hideDeletePopup = () => ({ type: HIDE_DELETE_MOVIE_POPUP });
