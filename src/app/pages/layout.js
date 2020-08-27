import React, { useState } from 'react';
import Header from '../containers/HeaderContainer/HeaderContainer';
import ContentContainer from '../containers/ContentContainer/ContentContainer';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import PopupEdit from '../components/popups/PopupEdit/PopupEdit';
import PopupAdd from '../components/popups/PopupAdd/PopupAdd';
import PopupDelete from '../components/popups/PopupDelete/PopupDelete';

const Layout = () => {
  const [isShownAddPopup, setIsShownAddPopup] = useState(false);
  const [addPopup, setAddPopup] = useState(null);
  const [isShownEditPopup, setIsShownEditPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(null);
  const [isShownDeletePopup, setIsShownDeletePopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(null);

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
                  submit={() => {}}
                />
              );
              setIsShownAddPopup(true);
            }}
          />
          <ContentContainer
            showEditPopup={(props) => {
              setEditPopup(
                <PopupEdit
                  {...props}
                  close={() => setIsShownEditPopup(false)}
                  submit={() => {}}
                />
              );
              setIsShownEditPopup(true);
            }}
            showDeletePopup={(props) => {
              setDeletePopup(
                <PopupDelete
                  {...props}
                  close={() => setIsShownDeletePopup(false)}
                  submit={() => {}}
                />
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
