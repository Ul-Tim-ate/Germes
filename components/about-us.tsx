import Image from "next/image";
import React from "react";
import styles from "../styles/about-us.module.sass";
import convProgress from "../public/conv-progress.png";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className="container">
        <h2 className={styles.aboutUsHeader}>О нас: </h2>
        <h3 className={styles.aboutUsItemHeader}>Более года упешной работы</h3>
        <p className={styles.aboutUsItemText}>
          За этот год мы успели успешно наладить производство и стать партерами
          для множества компаний
        </p>
        <Image
          src={convProgress}
          alt="painted conveyor"
          className={styles.aboutUsBg}
        />
        <h3
          className={`${styles.aboutUsItemHeader} ${styles.aboutUsItemHeaderService}`}
        >
          Широкий спектр предоставляемых услуг
        </h3>
        <p
          className={`${styles.aboutUsItemText} ${styles.aboutUsItemTextService}`}
        >
          Металлизация любых видов изделий, порошковая покраска и многое другое!
        </p>
        <p className={styles.aboutUsMore}>
          Подробнее с нашими услугами вы можете ознакомится во вкладке
          “Продукция”
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
