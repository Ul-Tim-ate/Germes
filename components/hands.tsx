import Image from "next/image";
import React from "react";
import styles from "../styles/hands.module.sass";
import hands from "../public/arms.png";
const Hands = () => {
  return (
    <section className={styles.hands}>
      <div className={`container ${styles.handsWrapper}`}>
        <h2 className={styles.handsHeader}>Для нас важна наша работа</h2>
        <p className={styles.handsDesc}>
          Благодаря такому подходу, с нами сотрудничают уже более 15 компаний
        </p>
        <Image
          src={hands}
          alt="Доставка"
          className={styles.handsImg}
        />
        <span className={styles.handsParadise}>
          Хорошие отношения и своевремнная работа - наш
          <span className={styles.paradise}> рай</span>
        </span>
        <span className={styles.handsHell}>
          Задержки и некачественный продукт - наш
          <span className={styles.hell}> ад</span>
        </span>
      </div>
    </section>
  );
};

export default Hands;
