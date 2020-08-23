import React from 'react';
import PropTypes from 'prop-types';
import './filter-sort.scss';

const FilterSort = ({ handleSubmitCategory, handleSubmitSort }) => (
  <>
    <div className="filterSort-wrapper">
      <div className="filter">
        <input
          id="all"
          type="radio"
          name="category"
          value="all"
          onClick={handleSubmitCategory}
        />
        <label htmlFor="all">ALL</label>
        <input
          id="documentary"
          type="radio"
          name="category"
          value="documentary"
          onClick={handleSubmitCategory}
        />
        <label htmlFor="documentary">DOCUMENTARY</label>
        <input
          id="comedy"
          type="radio"
          name="category"
          value="comedy"
          onClick={handleSubmitCategory}
        />
        <label htmlFor="comedy">COMEDY</label>
        <input
          id="horror"
          type="radio"
          name="category"
          value="horror"
          onClick={handleSubmitCategory}
        />
        <label htmlFor="horror">HORROR</label>
        <input
          id="crime"
          type="radio"
          name="category"
          value="crime"
          onClick={handleSubmitCategory}
        />
        <label htmlFor="crime">CRIME</label>
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
