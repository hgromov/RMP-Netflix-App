const initialState = {
  movies: [],
  movieDetails: null,
  addMoviePopup: { isVisible: false },
  editMoviePopup: {
    isVisible: false,
    id: null,
  },
  deleteMoviePopup: {
    isVisible: false,
    id: null,
  },
};

export const {
  movies,
  movieDetails,
  addMoviePopup,
  editMoviePopup,
  deleteMoviePopup,
} = initialState;

export default initialState;
