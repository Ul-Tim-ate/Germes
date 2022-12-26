import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "../../styles/product-advan.module.sass";

interface ProductAdvanProps {
  setAdvan: Dispatch<SetStateAction<boolean>>;
  advan: boolean;
  leftColumn: string[];
  rightColumn: string[];
}

const ProductAdvan: FC<ProductAdvanProps> = ({
  advan,
  setAdvan,
  leftColumn,
  rightColumn,
}) => {
  return (
    <section
      className={`${styles.productAdvan} ${advan ? styles.advanClass : ""}`}
    >
      <div className={styles.productAdvanWrapper}>
        <h2 className={styles.productAdvanHeader}>Преимущества</h2>
        <ul className={styles.productAdvanList}>
          <ul className={styles.productAdvanListColumn}>
            {leftColumn.map((el) => {
              return (
                <li className={styles.productAdvanListColumnItem}>{el}</li>
              );
            })}
          </ul>
          <ul className={styles.productAdvanListColumn}>
            {rightColumn.map((el) => {
              return (
                <li className={styles.productAdvanListColumnItem}>{el}</li>
              );
            })}
          </ul>
        </ul>
        <button
          className={styles.productAdvanClose}
          onClick={() => {
            setAdvan(false);
          }}
        >
          закрыть
        </button>
      </div>
    </section>
  );
};

export default ProductAdvan;
