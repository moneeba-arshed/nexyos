// components/SearchBar.js
import React, { useState } from "react";
import styles from "../../style/SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${styles.searchInput}`}
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={`btn ${styles.searchButton}`} type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
