/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import HeaderContainer from '../containers/HeaderContainer/HeaderContainer';
import ContentContainer from '../containers/ContentContainer/ContentContainer';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import PopupEdit from '../components/popups/PopupEdit/PopupEdit';
import PopupAdd from '../components/popups/PopupAdd/PopupAdd';
import PopupDelete from '../components/popups/PopupDelete/PopupDelete';
import moviesList from '../common/mock/movies';

const Layout = () => {
  const initialMovies = () => JSON.parse(localStorage.getItem('moviesList')) || moviesList;
  const [movies, setMovies] = useState(initialMovies);
  useEffect(() => {
    localStorage.setItem('moviesList', JSON.stringify(movies));
  }, [movies]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [isShownAddPopup, setIsShownAddPopup] = useState(false);
  const [addPopup, setAddPopup] = useState(null);
  const [isShownEditPopup, setIsShownEditPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(null);
  const [isShownDeletePopup, setIsShownDeletePopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(null);

  const showMovieDetails = (id) => {
    setMovieDetails(movies.find((movie) => movie.id === id));
  };

  const hideMovieDetails = () => {
    setMovieDetails(null);
  };

  const addPopupFactory = () => {
    setAddPopup(
      <PopupAdd
        close={() => setIsShownAddPopup(false)}
        addMovie={(movie) => {
          const newMovie = {
            ...movie,
            id: movies.length + 1,
          };
          setMovies([...movies, newMovie]);
          setIsShownAddPopup(false);
        }}
      />,
    );
    setIsShownAddPopup(true);
  };

  const editPopupFactory = (props) => {
    setEditPopup(
      <PopupEdit
        {...props}
        close={() => setIsShownEditPopup(false)}
        editMovie={({
          id, title, url, genres, date, overview, runtime,
        }) => {
          const newMoviesList = movies.map((movie) => {
            let newMovie = null;
            if (movie.id === id) {
              newMovie = {
                title,
                url,
                genres,
                date,
                overview,
                runtime,
                id,
              };
            }
            return newMovie || movie;
          });
          setMovies(newMoviesList);
          setIsShownEditPopup(false);
        }}
      />,
    );
    setIsShownEditPopup(true);
  };

  const deletePopupFactory = ({ id }) => {
    setDeletePopup(
      <PopupDelete
        id={id}
        close={() => setIsShownDeletePopup(false)}
        deleteMovie={() => {
          setMovies(movies.filter((movie) => movie.id !== id));
          setIsShownDeletePopup(false);
        }}
      />,
    );
    setIsShownDeletePopup(true);
  };

  return (
    <>
      <div
        className={
          isShownAddPopup || isShownEditPopup || isShownDeletePopup
            ? 'Layout--blur'
            : ''
        }
      >
        <ErrorBoundary>
          <HeaderContainer
            showAddMoviePopup={addPopupFactory}
            hideMovieDetails={hideMovieDetails}
            movie={movieDetails}
          />
          <ContentContainer
            movies={movies}
            showEditPopup={editPopupFactory}
            showDeletePopup={deletePopupFactory}
            showMovieDetails={showMovieDetails}
          />
        </ErrorBoundary>
        <Footer />
      </div>
      {isShownEditPopup && editPopup}
      {isShownDeletePopup && deletePopup}
      {isShownAddPopup && addPopup}
    </>
  );
};

export default Layout;
