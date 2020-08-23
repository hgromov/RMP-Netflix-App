import React, { useState } from 'react';
import Header from '../containers/header/header';
import Content from '../containers/content/content';
import Footer from '../components/footer/footer';
import ErrorBoundary from '../components/error-boundary/error-boundary';
import PopupEdit from '../components/popups/popup-edit/popup-edit';
import PopupAdd from '../components/popups/popup-add/popup-add';
import PopupDelete from '../components/popups/popup-delete/popup-delete';

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
            ? 'layout--blur'
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
          <Content
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
