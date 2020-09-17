import { SHOW_DELETE_MOVIE_POPUP, HIDE_DELETE_MOVIE_POPUP } from '../../types';
import { deleteMoviePopup } from '../../initialState';

const popupDeleteReducer = (state = deleteMoviePopup, action) => {
  switch (action.type) {
    case SHOW_DELETE_MOVIE_POPUP: {
      return {
        isVisible: true,
        id: action.payload,
      };
    }
    case HIDE_DELETE_MOVIE_POPUP: {
      return {
        isVisible: false,
        id: null,
      };
    }
    default: return state;
  }
};

export default popupDeleteReducer;
