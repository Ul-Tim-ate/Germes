import React from "react";
import styles from "../styles/product-nav.module.sass";

const ProductNav = () => {
  return (
    <nav className={styles.productNav}>
      <ul className={styles.productNavList}>
        <li
          className={`${styles.productNavItem} ${styles.productNavItemVacuum} ${styles.invis}`}
        >
          Вакуумная металлизация
        </li>
        <li
          className={`${styles.productNavItem} ${styles.productNavItemPowder}`}
        >
          Порошковая покраска
        </li>
        <li
          className={`${styles.productNavItem} ${styles.productNavItemPlasma}`}
        >
          Плазменная резка
        </li>
        <li
          className={`${styles.productNavItem} ${styles.productNavItemAdvan}`}
        >
          Преимущества
        </li>
      </ul>
    </nav>
  );
};

export default ProductNav;
