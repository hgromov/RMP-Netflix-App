export const toUnderscore = (movie) => {
  const newMovie = movie;
  newMovie.release_date = newMovie.date;
  newMovie.poster_path = newMovie.posterPath;
  delete newMovie.posterPath;
  delete newMovie.date;
  return newMovie;
};

export const toCamel = (movie) => {
  const newMovie = movie;
  newMovie.posterPath = newMovie.poster_path;
  newMovie.date = newMovie.release_date;
  newMovie.voteAverage = newMovie.vote_average;
  delete newMovie.poster_path;
  delete newMovie.release_date;
  return newMovie;
};
