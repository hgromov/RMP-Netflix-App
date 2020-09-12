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
  FILTER_BY_GENRE,
  SORT,
} from '../types';

const rootReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST: {
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      };
    }
    case ADD_MOVIE: {
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    }
    case TOGGLE_ADD_MOVIE_POPUP: {
      return {
        ...state,
        addMoviePopup: { isVisible: !state.addMoviePopup.isVisible },
      };
    }
    case SHOW_EDIT_MOVIE_POPUP: {
      return {
        ...state,
        editMoviePopup: {
          isVisible: true,
          id: action.payload,
        },
      };
    }
    case HIDE_EDIT_MOVIE_POPUP: {
      return {
        ...state,
        editMoviePopup: {
          isVisible: false,
          id: null,
        },
      };
    }
    case EDIT_MOVIE: {
      return {
        ...state,
        movies: state.movies.map((el) => {
          if (el.id === action.payload.id) {
            return action.payload;
          }
          return el;
        }),
      };
    }
    case SHOW_DELETE_MOVIE_POPUP: {
      return {
        ...state,
        deleteMoviePopup: {
          isVisible: true,
          id: action.payload,
        },
      };
    }
    case HIDE_DELETE_MOVIE_POPUP: {
      return {
        ...state,
        deleteMoviePopup: {
          isVisible: false,
          id: null,
        },
      };
    }
    case DELETE_MOVIE: {
      return {
        ...state,
        movies: state.movies.filter((el) => el.id !== action.payload),
      };
    }
    case SHOW_MOVIE_DETAILS: {
      return {
        ...state,
        movieDetails: action.payload,
      };
    }
    case HIDE_MOVIE_DETAILS: {
      return {
        ...state,
        movieDetails: null,
      };
    }
    case FILTER_BY_GENRE: {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case SORT: {
      return {
        ...state,
        movies: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
