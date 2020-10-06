import { SHOW_MOVIE_DETAILS, HIDE_MOVIE_DETAILS } from '../../types';
import { toCamel } from '../../../common/services/renameMovieKeyNames';
import apiPath from './baseUrl';

const showMovieDetails = (movie) => ({
  type: SHOW_MOVIE_DETAILS,
  payload: movie,
});
export const getMovieDetails = (id) => async (dispatch) => {
  try {
    const res = await fetch(`${apiPath}/movies/${id}`);
    const movie = toCamel(await res.json());
    dispatch(showMovieDetails(movie));
  } catch (error) {
    dispatch(showMovieDetails('404'));
  }
};
export const hideMovieDetails = () => ({ type: HIDE_MOVIE_DETAILS });
