/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './FilterSort.scss';

const FilterSort = ({ handleSubmitFilter, handleSubmitSort }) => (
  <>
    <div className="FilterSort-wrapper">
      <div className="filter">
        <input
          className="filter__input"
          id="all"
          type="radio"
          name="category"
          onClick={() => handleSubmitFilter('')}
        />
        <label className="filter__label" htmlFor="all">
          ALL
        </label>
        <input
          className="filter__input"
          id="documentary"
          type="radio"
          name="category"
          onClick={() => handleSubmitFilter('documentary')}
        />
        <label className="filter__label" htmlFor="documentary">
          DOCUMENTARY
        </label>
        <input
          className="filter__input"
          id="comedy"
          type="radio"
          name="category"
          onClick={() => handleSubmitFilter('comedy')}
        />
        <label className="filter__label" htmlFor="comedy">
          COMEDY
        </label>
        <input
          className="filter__input"
          id="horror"
          type="radio"
          name="category"
          onClick={() => handleSubmitFilter('horror')}
        />
        <label className="filter__label" htmlFor="horror">
          HORROR
        </label>
        <input
          className="filter__input"
          id="crime"
          type="radio"
          name="category"
          onClick={() => handleSubmitFilter('crime')}
        />
        <label className="filter__label" htmlFor="crime">
          CRIME
        </label>
      </div>
      <div className="sort">
        <h2 className="sort__heading">SORT BY</h2>
        <select onChange={handleSubmitSort} className="sort__select">
          <option defaultValue value="newest" className="sort__option">
            RELEASE DATE DESC
          </option>
          <option value="oldest" className="sort__option">
            RELEASE DATE ASC
          </option>
          <option value="voteDesc" className="sort__option">
            VOTE AVARANGE DESC
          </option>
          <option value="voteAsc" className="sort__option">
            VOTE AVARANGE ASC
          </option>
        </select>
      </div>
    </div>
    <hr className="check-bar" />
  </>
);

FilterSort.propTypes = {
  handleSubmitFilter: PropTypes.func.isRequired,
  handleSubmitSort: PropTypes.func.isRequired,
};

export default FilterSort;
