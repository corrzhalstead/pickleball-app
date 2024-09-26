import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CategoryList.module.css";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";

export function CategoryList() {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    "Ball",
    "Accessories",
    "Eyewear",
    "Glasses",
    "Bags",
    "Gloves",
    "Hats",
    "Grips",
    "Ultimate Starter Kit",
    "Pickleball Paddles",
    "Pickleball Net",
  ];

  const collapseMenu = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.categoryHeader} onClick={collapseMenu}>
        <span className={styles.menuIcon}>☰</span>
        <span className={styles.headerText}>SELECT CATEGORIES</span>
      </div>

      {isExpanded && (
        <>
          {categories.map((category, index) => (
            <div className={styles.categoryItem}>
              <CategoryMenu label={category} onClick={() => {}} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
