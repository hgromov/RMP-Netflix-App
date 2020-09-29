import { ADD_MOVIE } from '../../types';
import {
  toCamel,
  toUnderscore,
} from '../../../common/services/renameMovieKeyNames';
import apiPath from './baseUrl';

const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});
const postMovie = (movie) => async (dispatch) => {
  const newMovie = toUnderscore(movie);
  newMovie.runtime = +newMovie.runtime;
  newMovie.genres = newMovie.genres.split(', ');
  const res = await fetch(`${apiPath}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  });
  const CamelizedMovie = toCamel(await res.json());
  dispatch(addMovie(CamelizedMovie));
};

export default postMovie;
