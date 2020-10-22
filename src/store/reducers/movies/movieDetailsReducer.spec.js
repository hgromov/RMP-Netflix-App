/* eslint-disable no-undef */
import movieDetailsReducer from './movieDetailsReducer';
import { SHOW_MOVIE_DETAILS, HIDE_MOVIE_DETAILS } from '../../types';
import { movieDetails } from '../../initialState';

const movie = {
  title: 'La La Land',
  tagline: "Here's to the fools who dream.",
  voteAverage: 7.9,
  date: '2016-12-29',
  posterPath: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
  overview:
    'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
  budget: 30000000,
  revenue: 445435700,
  runtime: 128,
  genres: ['Comedy', 'Drama', 'Romance'],
  id: 313369,
};

const showMovieDetailsAction = {
  type: SHOW_MOVIE_DETAILS,
  payload: movie,
};

const hideMovieDetailsAction = {
  type: HIDE_MOVIE_DETAILS,
};

describe('Movie details reducer', () => {
  it('should return the initial state', () => {
    expect(movieDetailsReducer(undefined, {})).toEqual(null);
  });

  it('should handle SHOW_MOVIE_DETAILS and HIDE_MOVIE_DETAILS', () => {
    expect(movieDetailsReducer(movieDetails, showMovieDetailsAction)).toEqual(movie);
    expect(movieDetailsReducer(movieDetails, hideMovieDetailsAction)).toEqual(null);
  });
});
