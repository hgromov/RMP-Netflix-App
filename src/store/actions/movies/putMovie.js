import { EDIT_MOVIE } from '../../types';
import { toCamel, toUnderscore } from '../../../common/services/renameMovieKeyNames';

const editMovie = (movie) => ({
  type: EDIT_MOVIE,
  payload: movie,
});
const putMovie = (movie) => async (dispatch) => {
  const newMovie = toUnderscore(movie);
  const res = await fetch('http://localhost:4000/movies', {
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
