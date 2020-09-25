import { DELETE_MOVIE } from '../../types';
import apiPath from './baseUrl';

const removeMovie = (id) => ({
  type: DELETE_MOVIE,
  payload: id,
});
const deleteMovie = (id) => async (dispatch) => {
  const res = await fetch(`${apiPath}/movies/${id}`, {
    method: 'DELETE',
  });
  if (res.status === 204) {
    dispatch(removeMovie(id));
  }
};

export default deleteMovie;
