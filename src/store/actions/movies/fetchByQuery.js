import { SEARCH } from '../../types';
import { mapToCamel } from '../../../common/services/renameMovieKeyNames';
import apiPath from './baseUrl';

const filterByQuery = (movies) => ({
  type: SEARCH,
  payload: movies,
});
const fetchByQuery = (query) => async (dispatch) => {
  const res = await fetch(`${apiPath}/movies/?limit=50&search=${query}&searchBy=title`, {
    'Content-Type': 'application/json',
  });
  const movies = await res.json();
  const { data } = movies;
  dispatch(filterByQuery(mapToCamel(data)));
};

export default fetchByQuery;
