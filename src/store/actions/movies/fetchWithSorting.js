import { SORT } from '../../types';
import { mapToCamel } from '../../../common/services/renameMovieKeyNames';
import apiPath from './baseUrl';

const withSorting = (movies) => ({
  type: SORT,
  payload: movies,
});
const fetchWithSorting = (keyWord) => async (dispatch) => {
  const params = {
    sortBy: '',
    sortOrder: '',
  };
  switch (keyWord) {
    case 'newest': {
      params.sortBy = 'release_date';
      params.sortOrder = 'desc';
      break;
    }
    case 'oldest': {
      params.sortBy = 'release_date';
      params.sortOrder = 'asb';
      break;
    }
    case 'voteDesc': {
      params.sortBy = 'vote_average';
      params.sortOrder = 'desc';
      break;
    }
    case 'voteAsc': {
      params.sortBy = 'vote_average';
      params.sortOrder = 'desc';
      break;
    }
    default: return;
  }
  const { sortBy, sortOrder } = params;
  const res = await fetch(`${apiPath}/movies/?limit=50&sortBy=${sortBy}&sortOrder=${sortOrder}`, {
    'Content-Type': 'application/json',
  });
  const movies = await res.json();
  const { data } = movies;
  dispatch(withSorting(mapToCamel(data)));
};

export default fetchWithSorting;
