import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      {searchQuery ? (
        <button onClick={handleClearSearch} className={styles.clearButton}>
          Clear
        </button>
      ) : (
        <>
          <FaSearch />
        </>
      )}
    </div>
  );
};
