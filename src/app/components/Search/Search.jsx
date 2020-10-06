import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: { query: '' } });
  const history = useHistory();
  const search = ({ query }) => {
    if (query) {
      history.push(`/search/${query}`);
      reset();
    }
  };

  return (
    <div className="search">
      <h1 className="search__heading">FIND YOUR MOVIE</h1>
      <form className="search__form" onSubmit={handleSubmit(search)}>
        <input
          className="search__field"
          type="text"
          placeholder="What do you whant to watch?"
          name="query"
          ref={register({ required: true })}
        />
        <button className="search__button" type="submit">
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Search;
