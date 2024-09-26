import React from "react";
import PropTypes from "prop-types";
import styles from "./CategoryMenu.module.css";

export const CategoryMenu = ({ label, onClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        <span className={styles.icon}>▶</span>
        <span className={styles.label}>{label}</span>
      </button>
    </div>
  );
};

CategoryMenu.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
