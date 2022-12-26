import React from "react";
import styles from "../styles/stock.module.sass";

const Stock = () => {
  return (
    <section className={styles.stock}>
      <div className={`container ${styles.stockWrapper}`}>
        <div className={styles.stockHeader}>
          <h2 className={styles.stockHeaderText}>Открытие сайта</h2>
          <span className={styles.stockHeaderOpenDate}>30.12.2022</span>
        </div>
        <p className={styles.stockDescription}>
          В честь открытия сайта, с 01.01.2023 по 01.03.2023 мы будем
          предоставлять особые условия по сотрудничеству с нашей компанией.
        </p>
        <p className={styles.stockMore}>
          Подробности можно узнать по номеру:{" "}
          <span className={styles.stockInfo}>+70000000000</span> <br /> или
          можно задать вопросы на нашу почту:{" "}
          <span className={styles.stockInfo}> germessamara73@gmail.com</span>
        </p>
        <span className={styles.stockCode}>
          Для участия в акции сообщите код
          <span className={styles.stockCodeText}> “ГУРМЕС 73”</span>
        </span>
        <span className={styles.stockGreet}>Мы рады, что вы с нами!</span>
      </div>
    </section>
  );
};

export default Stock;
