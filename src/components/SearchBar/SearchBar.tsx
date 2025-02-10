import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import css from './SearchBar.module.css';
import SearchBarProps from './types';

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query);
    setQuery('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <button type='submit' className={css.searchBtn}>
          <FaSearch className={css.searchSvg} />
        </button>
        <input
          type='text'
          placeholder='Search images and photos'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete='off'
          className={css.searchArea}
        />
      </form>
    </header>
  );
};

export default SearchBar;
