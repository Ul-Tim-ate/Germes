import React, { FC, useState } from "react";
import styles from "../../styles/product.module.sass";
import { Products } from "../../types/products";
import ProductAdvan from "./product-advan";
import ProductNav from "./product-nav";
import ProductSwiper from "./product-swiper";

interface ProductProps {
  header: string;
  description: string[];
  type: Products;
  leftColumn: string[];
  rightColumn: string[];
}

const Product: FC<ProductProps> = ({
  description,
  header,
  leftColumn,
  rightColumn,
  type,
}) => {
  const [advan, setAdvan] = useState(false);
  let borderClass = "";
  let buttonClass = "";
  switch (type) {
    case Products.VACUUM_PLATING:
      borderClass = `${styles.productWrapperVacuum}`;
      buttonClass = `${styles.productGetPriceVacuum}`;
      break;
    case Products.POWDER_COATING:
      borderClass = `${styles.productWrapperPowder}`;
      buttonClass = `${styles.productGetPricePowder}`;
      break;
    case Products.PLASMA_CUTTING:
      borderClass = `${styles.productWrapperPlasma}`;
      buttonClass = `${styles.productGetPricePlasma}`;
      break;
    default:
      break;
  }

  return (
    <section className={styles.product}>
      <div className={`container ${styles.productWrapper} ${borderClass}`}>
        <h1 className={styles.productHeader}>{header}</h1>
        {description.map((el) => {
          return <p className={styles.productDescription}>{el}</p>;
        })}
        <div className={styles.productSwiper}>
          <ProductSwiper />
        </div>
        <button className={`${styles.productGetPrice} ${buttonClass}`}>
          Получить прайс
        </button>
        <ProductNav setAdvan={setAdvan} type={type} />
        <ProductAdvan
          leftColumn={leftColumn}
          rightColumn={rightColumn}
          advan={advan}
          setAdvan={setAdvan}
        />
      </div>
    </section>
  );
};

export default Product;
