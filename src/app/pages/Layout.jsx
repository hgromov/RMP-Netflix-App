/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Header from '../containers/HeaderContainer/HeaderContainer';
import ContentContainer from '../containers/ContentContainer/ContentContainer';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import PopupEdit from '../components/popups/PopupEdit/PopupEdit';
import PopupAdd from '../components/popups/PopupAdd/PopupAdd';
import PopupDelete from '../components/popups/PopupDelete/PopupDelete';
import moviesList from '../mock/movies';

const Layout = () => {
  const [isShownAddPopup, setIsShownAddPopup] = useState(false);
  const [addPopup, setAddPopup] = useState(null);
  const [isShownEditPopup, setIsShownEditPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(null);
  const [isShownDeletePopup, setIsShownDeletePopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(null);
  const [movies, setMovies] = useState(moviesList);

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
          <Header
            showAddMoviePopup={() => {
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
            }}
          />
          <ContentContainer
            movies={movies}
            showEditPopup={(props) => {
              setEditPopup(
                <PopupEdit
                  {...props}
                  close={() => setIsShownEditPopup(false)}
                  editMovie={({
                    id,
                    title,
                    url,
                    genres,
                    date,
                    overview,
                    runtime,
                  }) => {
                    const newMoviesList = moviesList.map((movie) => {
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
            }}
            showDeletePopup={({ id }) => {
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
            }}
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
