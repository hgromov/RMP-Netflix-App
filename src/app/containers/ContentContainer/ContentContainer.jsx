import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Content from '../../components/Content/Content';
import {
  getMoviesList,
  showEditPopup,
  showDeletePopup,
  getMovieDetails,
  fetchByGenre,
  fetchWithSorting,
} from '../../../store/actions';

const ContentContainer = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesList());
  }, []);
  const dispatchShowEditPopup = useCallback((id) => {
    dispatch(showEditPopup(id));
  });
  const dispatchShowDeletePopup = useCallback((id) => {
    dispatch(showDeletePopup(id));
  });
  const dispatchShowMovieDetails = useCallback((id) => {
    dispatch(getMovieDetails(id));
  });
  const dispatchFilterByGenre = useCallback((genre) => {
    dispatch(fetchByGenre(genre));
  });
  const dispatchFetchWithSorting = useCallback((e) => {
    const { value: keyWord } = e.target;
    dispatch(fetchWithSorting(keyWord));
  });

  return (
    <Content
      handleSubmitFilter={dispatchFilterByGenre}
      handleSubmitSort={dispatchFetchWithSorting}
      movies={movies}
      showMovieDetails={dispatchShowMovieDetails}
      showEditPopup={dispatchShowEditPopup}
      showDeletePopup={dispatchShowDeletePopup}
    />
  );
};

export default ContentContainer;
