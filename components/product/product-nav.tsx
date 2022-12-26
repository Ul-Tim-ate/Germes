import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "../../styles/product-nav.module.sass";
import { Products } from "../../types/products";

interface ProductNavProps {
  setAdvan: Dispatch<SetStateAction<boolean>>;
  type: Products;
}

const ProductNav: FC<ProductNavProps> = ({ setAdvan, type }) => {
  return (
    <nav className={styles.productNav}>
      <ul className={styles.productNavList}>
        <li
          className={`${styles.productNavItem} ${styles.productNavItemVacuum} ${
            type === Products.VACUUM_PLATING ? `${styles.invis}` : ""
          }`}
        >
          Вакуумная металлизация
        </li>
        <li
          className={`${styles.productNavItem} ${styles.productNavItemPowder} ${
            type === Products.POWDER_COATING ? `${styles.invis}` : ""
          }`}
        >
          Порошковая покраска
        </li>
        <li
          className={`${styles.productNavItem} ${styles.productNavItemPlasma} ${
            type === Products.PLASMA_CUTTING ? `${styles.invis}` : ""
          }`}
        >
          Плазменная резка
        </li>
        <li
          className={`${styles.productNavItem} ${styles.productNavItemAdvan}`}
          onClick={() => {
            setAdvan(true);
          }}
        >
          Преимущества
        </li>
      </ul>
    </nav>
  );
};

export default ProductNav;
