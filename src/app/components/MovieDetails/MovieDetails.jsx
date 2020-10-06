import React, { useEffect } from 'react';
import {
  useParams, Redirect,
} from 'react-router-dom';
import './MovieDetails.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../../../store/actions';
import getRaitingColor from '../../../common/services/getRaitingColor';

const MovieDetails = () => {
  const { id } = useParams();
  const movieDetails = useSelector((state) => state.movieDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [id]);

  if (movieDetails === '404') {
    return <Redirect to="/404" />;
  }

  return movieDetails ? (
    <div className="movieDetails">
      <div className="movieDetails__image-wrapper">
        <img
          className="movieDetails__image"
          src={movieDetails.posterPath}
          alt="not found"
        />
      </div>
      <div className="movieDetails__info">
        <div className="movieDetails__main">
          <h1 className="movieDetails__title">{movieDetails.title}</h1>
          <div
            className={`movieDetails__raiting movieDetails__raiting--${getRaitingColor(
              movieDetails.voteAverage
            )}`}
          >
            {movieDetails.voteAverage}
          </div>
        </div>
        <h4 className="movieDetails__overview">{movieDetails.overview}</h4>
        <div className="movieDetails__time">
          <span className="movieDetails__date">
            {movieDetails.date.substr(0, 4)}
          </span>
          <span className="movieDetails__runtime">
            {`${movieDetails.runtime} min`}
          </span>
        </div>
        <p className="movieDetails__description">{movieDetails.description}</p>
      </div>
    </div>
  ) : null;
};

export default MovieDetails;