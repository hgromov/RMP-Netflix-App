import { SHOW_EDIT_MOVIE_POPUP, HIDE_EDIT_MOVIE_POPUP } from '../../types';
import { editMoviePopup } from '../../initialState';

const popupEditReducer = (state = editMoviePopup, action) => {
  switch (action.type) {
    case SHOW_EDIT_MOVIE_POPUP: {
      return {
        isVisible: true,
        id: action.payload,
      };
    }
    case HIDE_EDIT_MOVIE_POPUP: {
      return {
        isVisible: false,
        id: null,
      };
    }
    default: return state;
  }
};

export default popupEditReducer;
