import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ showAddMoviePopup, handleSubmit, onChange }) => (
  <header className="Header">
    <div className="upper">
      <div className="upper__logo logo" />
      <button type="button" className="upper__addMovie" onClick={showAddMoviePopup}>
        <span className="upper__addMovieText">+ ADD MOVIE</span>
      </button>
    </div>
    <div className="search">
      <h1 className="search__heading">FIND YOUR MOVIE</h1>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__field"
          type="text"
          onChange={onChange}
          placeholder="What do you whant to watch?"
        />
        <button className="search__button" type="submit">
          SEARCH
        </button>
      </form>
    </div>
  </header>
);

Header.propTypes = {
  showAddMoviePopup: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Header;
