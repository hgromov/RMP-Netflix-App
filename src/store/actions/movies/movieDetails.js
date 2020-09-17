import { SHOW_MOVIE_DETAILS, HIDE_MOVIE_DETAILS } from '../../types';
import { toCamel } from '../../../common/services/renameMovieKeyNames';

const showMovieDetails = (movie) => ({
  type: SHOW_MOVIE_DETAILS,
  payload: movie,
});
export const getMovieDetails = (id) => async (dispatch) => {
  const res = await fetch(`http://localhost:4000/movies/${id}`);
  const movie = toCamel(await res.json());
  dispatch(showMovieDetails(movie));
};
export const hideMovieDetails = () => ({ type: HIDE_MOVIE_DETAILS });
