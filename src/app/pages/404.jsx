import React from 'react';
import { Link } from 'react-router-dom';

import banner from '../assets/notFound.png';
import Footer from '../components/Footer/Footer';

const NotFound = () => (
  <>
    <div className="error-page">
      <Link to="/">
        <div className="logo error-page__logo" />
      </Link>
      <img className="error-page__banner" src={banner} alt="not found" />
      <Footer />
    </div>
  </>
);

export default NotFound;
