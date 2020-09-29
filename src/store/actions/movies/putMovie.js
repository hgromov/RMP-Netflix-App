import { EDIT_MOVIE } from '../../types';
import { toCamel, toUnderscore } from '../../../common/services/renameMovieKeyNames';
import apiPath from './baseUrl';

const editMovie = (movie) => ({
  type: EDIT_MOVIE,
  payload: movie,
});
const putMovie = (movie) => async (dispatch) => {
  const newMovie = toUnderscore(movie);
  newMovie.runtime = +newMovie.runtime;
  newMovie.genres = newMovie.genres.split(', ');
  const res = await fetch(`${apiPath}/movies`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  });
  const CamelizedMovie = toCamel(await res.json());
  dispatch(editMovie(CamelizedMovie));
};

export default putMovie;
