import React, { FC } from "react";
import styles from "../styles/product.module.sass";
import ProductNav from "./product-nav";
import ProductSwiper from "./product-swiper";

interface ProductProps {}

const Product: FC<ProductProps> = () => {
  return (
    <section className={styles.product}>
      <div className={`container ${styles.productWrapper}`}>
        <h1 className={styles.productHeader}>Вакуумная металлизация</h1>
        <p className={styles.productDescription}>
          С помощью такой технологии происходит обработка поверхностей изделий
          путём переноса мелких металлических частиц в вакууме. Они покрывают
          изделия плотным слоем.
        </p>
        <p className={styles.productDescription}>
          Мы покрываем изделия из дерева, железа, пластмассы, да и вообще любого
          материала.
        </p>
        <div className={styles.productSwiper}>
          <ProductSwiper />
        </div>
        <button className={styles.productGetPrice}>Получить прайс</button>
        <ProductNav />
      </div>
    </section>
  );
};

export default Product;
