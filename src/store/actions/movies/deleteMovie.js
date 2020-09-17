import { DELETE_MOVIE } from '../../types';

const removeMovie = (id) => ({
  type: DELETE_MOVIE,
  payload: id,
});
const deleteMovie = (id) => async (dispatch) => {
  const res = await fetch(`http://localhost:4000/movies/${id}`, {
    method: 'DELETE',
  });
  if (res.status === 204) {
    dispatch(removeMovie(id));
  }
};

export default deleteMovie;
