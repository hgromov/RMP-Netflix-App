import { SHOW_MOVIE_DETAILS, HIDE_MOVIE_DETAILS } from '../../types';
import { movieDetails } from '../../initialState';

const movieDetailsReducer = (state = movieDetails, action) => {
  switch (action.type) {
    case SHOW_MOVIE_DETAILS: {
      return action.payload;
    }
    case HIDE_MOVIE_DETAILS: {
      return null;
    }
    default: return state;
  }
};

export default movieDetailsReducer;
