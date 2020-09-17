import { TOGGLE_ADD_MOVIE_POPUP } from '../../types';
import { addMoviePopup } from '../../initialState';

const popupAddReducer = (state = addMoviePopup, action) => {
  if (action.type === TOGGLE_ADD_MOVIE_POPUP) {
    return { isVisible: !state.isVisible };
  }
  return state;
};

export default popupAddReducer;
