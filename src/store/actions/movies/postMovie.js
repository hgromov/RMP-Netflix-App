import { ADD_MOVIE } from '../../types';
import { toCamel, toUnderscore } from '../../../common/services/renameMovieKeyNames';

const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});
const postMovie = (movie) => async (dispatch) => {
  const newMovie = toUnderscore(movie);
  const res = await fetch('http://localhost:4000/movies', {
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
