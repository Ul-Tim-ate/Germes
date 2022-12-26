import Link from "next/link";
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
        <li>
          <Link
            href={"/products/vacuum-plating"}
            className={`${styles.productNavItem} ${
              styles.productNavItemVacuum
            } ${type === Products.VACUUM_PLATING ? `${styles.invis}` : ""} ${
              styles.productNavItemText
            }`}
          >
            Вакуумная металлизация
          </Link>
        </li>
        <li>
          <Link
            href={"/products/powder-coating"}
            className={`${styles.productNavItem} ${
              styles.productNavItemPowder
            } ${type === Products.POWDER_COATING ? `${styles.invis}` : ""} ${
              styles.productNavItemText
            }`}
          >
            Порошковая покраска
          </Link>
        </li>
        <li>
          <Link
            href={"/products/plasma-cutting"}
            className={`${styles.productNavItem} ${
              styles.productNavItemPlasma
            } ${type === Products.PLASMA_CUTTING ? `${styles.invis}` : ""} ${
              styles.productNavItemText
            }`}
          >
            Плазменная резка
          </Link>
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
