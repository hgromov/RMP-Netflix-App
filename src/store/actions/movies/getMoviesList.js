import { GET_MOVIES_LIST } from '../../types';
import { mapToCamel } from '../../../common/services/renameMovieKeyNames';

const getMoviesListSuccess = (moviesList) => ({
  type: GET_MOVIES_LIST,
  payload: moviesList,
});
const getMoviesList = () => async (dispatch) => {
  const res = await fetch('http://localhost:4000/movies/?limit=50', {
    'Content-Type': 'application/json',
    method: 'GET',
  });
  const movies = await res.json();
  const { data } = movies;
  dispatch(getMoviesListSuccess(mapToCamel(data)));
};

export default getMoviesList;
