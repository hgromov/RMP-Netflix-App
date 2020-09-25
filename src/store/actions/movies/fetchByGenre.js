import { FILTER_BY_GENRE } from '../../types';
import { mapToCamel } from '../../../common/services/renameMovieKeyNames';
import apiPath from './baseUrl';

const filterByGenre = (movies) => ({
  type: FILTER_BY_GENRE,
  payload: movies,
});
const fetchByGenre = (genre) => async (dispatch) => {
  const res = await fetch(`${apiPath}/movies/?limit=50&filter=${genre}`, {
    'Content-Type': 'application/json',
  });
  const movies = await res.json();
  const { data } = movies;
  dispatch(filterByGenre(mapToCamel(data)));
};

export default fetchByGenre;
