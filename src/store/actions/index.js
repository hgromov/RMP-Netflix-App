import getMoviesList from './movies/getMoviesList';
import postMovie from './movies/postMovie';
import putMovie from './movies/putMovie';
import deleteMovie from './movies/deleteMovie';
import fetchByGenre from './movies/fetchByGenre';
import fetchWithSorting from './movies/fetchWithSorting';
import { getMovieDetails, hideMovieDetails } from './movies/movieDetails';
import {
  toggleAddPopup,
  showEditPopup,
  hideEditPopup,
  showDeletePopup,
  hideDeletePopup,
} from './popups';

export {
  // CRUD
  getMoviesList,
  getMovieDetails,
  hideMovieDetails,
  postMovie,
  putMovie,
  deleteMovie,
  // filtering & sorting
  fetchByGenre,
  fetchWithSorting,
  // popups
  toggleAddPopup,
  showEditPopup,
  hideEditPopup,
  showDeletePopup,
  hideDeletePopup,
};
