import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MenuBar.module.css";

export function MenuBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logoSection}>
        <img
          srcset="//gearboxsports.com/cdn/shop/files/Mask_group.png?v=1655095520&amp;width=250 1x, //gearboxsports.com/cdn/shop/files/Mask_group.png?v=1655095520&amp;width=500 2x"
          src="//gearboxsports.com/cdn/shop/files/Mask_group.png?v=1655095520&amp;width=250"
          loading="lazy"
          class="header__heading-logo"
          width="300"
          height="60"
          alt="Gearbox Sports"
        ></img>
      </div>
      <ul className={styles.menuItems}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.dropdown}>
          <Link to="/shop">Shop</Link>
          <ul className={styles.dropdownContent}>
            <li>
              <Link to="/shop/clothes">Clothes</Link>
            </li>
            <li>
              <Link to="/shop/accessories">Accessories</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li className={styles.dropdown}>
          <Link to="/account">My Account</Link>
          <ul className={styles.dropdownContent}>
            <li>
              <Link to="/account/profile">Profile</Link>
            </li>
            <li>
              <Link to="/account/orders">Orders</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
