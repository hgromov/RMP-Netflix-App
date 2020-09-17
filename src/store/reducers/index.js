import { combineReducers } from 'redux';
import moviesCrudReducer from './movies/moviesCrudReducer';
import movieDetailsReducer from './movies/movieDetailsReducer';
import popupAddReducer from './popups/popupAddReducer';
import popupEditReducer from './popups/popupEditReducer';
import popupDeleteReducer from './popups/popupDeleteReducer';

export default combineReducers({
  movieDetails: movieDetailsReducer,
  movies: moviesCrudReducer,
  addMoviePopup: popupAddReducer,
  editMoviePopup: popupEditReducer,
  deleteMoviePopup: popupDeleteReducer,
});
