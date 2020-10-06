import {
  GET_MOVIES_LIST,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  FILTER_BY_GENRE,
  SORT,
  SEARCH,
} from '../../types';
import { movies } from '../../initialState';

const moviesCrudReducer = (state = movies, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST: {
      return [...state, ...action.payload];
    }
    case ADD_MOVIE: {
      return [...state, action.payload];
    }

    case EDIT_MOVIE: {
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return action.payload;
        }
        return el;
      });
    }
    case DELETE_MOVIE: {
      return state.filter((el) => el.id !== action.payload);
    }
    case FILTER_BY_GENRE: {
      return action.payload;
    }
    case SORT: {
      return action.payload;
    }
    case SEARCH: {
      return action.payload;
    }
    default: return state;
  }
};

export default moviesCrudReducer;
