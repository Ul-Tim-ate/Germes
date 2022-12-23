import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "../../styles/product-nav.module.sass";

interface ProductNavProps {
  setAdvan: Dispatch<SetStateAction<boolean>>;
  advan: boolean;
}

const ProductNav: FC<ProductNavProps> = ({ advan, setAdvan }) => {
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
