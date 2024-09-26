import React from "react";
import styles from "./HomePage.module.css";
import { CategoryList } from "../../components/CategoryList/CategoryList";

export function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>
        <CategoryList />
      </div>
    </div>
  );
}
