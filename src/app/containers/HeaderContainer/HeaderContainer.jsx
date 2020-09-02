import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';

const HeaderContainer = ({ showAddMoviePopup, hideMovieDetails, movie }) => {
  const [movieDetails, setMovieDetails] = useState(movie);

  useEffect(() => {
    setMovieDetails(movie);
  }, [movie]);

  return (
    <Header
      showAddMoviePopup={showAddMoviePopup}
      handleSubmit={() => {}}
      onChange={() => {}}
      search={() => {}}
      movieDetails={movieDetails}
      hideMovieDetails={hideMovieDetails}
      // movieDetails={{
      //   url:
      //     'https://s1.livelib.ru/boocover/1000530481/o/10c8/Quentin_Tarantino__Pulp_Fiction_A_Quentin_Tarantino_Screenplay.jpeg',
      //   title: 'Pulp Fiction',
      //   genres: ['Crime', 'Comedy'],
      //   date: '1994',
      //   raiting: 1.3,
      //   description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written
      // and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John
      // Travolta,
      // Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma
      // Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp
      // magazines and hardboiled crime novels popular during the mid-2
      // 0th century, known for their grap
      // hic violence and punchy dialogue.',
      //   overview: 'Oscar winning Movie',
      //   runtime: '154 min',
      // }}
    />
  );
};
HeaderContainer.propTypes = {
  showAddMoviePopup: PropTypes.func.isRequired,
  hideMovieDetails: PropTypes.func.isRequired,
  movie: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  ),
};

HeaderContainer.defaultProps = {
  movie: null,
};

export default HeaderContainer;
