import { combineReducers } from 'redux';
import { moviesCrudReducer, movieDetailsReducer } from './movies';
import { popupAddReducer, popupEditReducer, popupDeleteReducer } from './popups';

export default combineReducers({
  movieDetails: movieDetailsReducer,
  movies: moviesCrudReducer,
  addMoviePopup: popupAddReducer,
  editMoviePopup: popupEditReducer,
  deleteMoviePopup: popupDeleteReducer,
});
