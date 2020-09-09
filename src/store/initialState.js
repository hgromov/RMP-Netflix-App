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

export default initialState;
