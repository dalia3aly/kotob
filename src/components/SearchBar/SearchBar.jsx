import React, { useState } from "react";
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("inauthor");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm, searchType);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title or author"
      />
      <select
      className={styles.searchSelect}
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}>
        <option value="intitle">Title</option>
        <option value="inauthor">Author</option>
      </select>
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
};

export default SearchBar;
