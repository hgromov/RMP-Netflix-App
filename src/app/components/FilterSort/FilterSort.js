import React from 'react';
import PropTypes from 'prop-types';
import './FilterSort.scss';

const FilterSort = ({ handleSubmitCategory, handleSubmitSort }) => (
  <>
    <div className="FilterSort-wrapper">
      <div className="filter">
        <input
          className="filter__input"
          id="all"
          type="radio"
          name="category"
          value="all"
          onClick={handleSubmitCategory}
        />
        <label className="filter__label" htmlFor="all">
          ALL
        </label>
        <input
          className="filter__input"
          id="documentary"
          type="radio"
          name="category"
          value="documentary"
          onClick={handleSubmitCategory}
        />
        <label className="filter__label" htmlFor="documentary">
          DOCUMENTARY
        </label>
        <input
          className="filter__input"
          id="comedy"
          type="radio"
          name="category"
          value="comedy"
          onClick={handleSubmitCategory}
        />
        <label className="filter__label" htmlFor="comedy">
          COMEDY
        </label>
        <input
          className="filter__input"
          id="horror"
          type="radio"
          name="category"
          value="horror"
          onClick={handleSubmitCategory}
        />
        <label className="filter__label" htmlFor="horror">
          HORROR
        </label>
        <input
          className="filter__input"
          id="crime"
          type="radio"
          name="category"
          value="crime"
          onClick={handleSubmitCategory}
        />
        <label className="filter__label" htmlFor="crime">
          CRIME
        </label>
      </div>
      <div className="sort">
        <h2 className="sort__heading">SORT BY</h2>
        <select onChange={handleSubmitSort} className="sort__select">
          <option defaultValue value="newest">
            RELEASE DATE
          </option>
          <option value="oldest">oldest</option>
        </select>
      </div>
    </div>
    <hr className="check-bar" />
  </>
);

FilterSort.propTypes = {
  handleSubmitCategory: PropTypes.func,
  handleSubmitSort: PropTypes.func,
};

export default FilterSort;
