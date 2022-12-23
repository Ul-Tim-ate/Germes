import Image from "next/image";
import React from "react";
import styles from "../../styles/scales.module.sass";
import scales from "../../public/scales.svg";
import left from "../../public/production.png";
import right from "../../public/contacts.png";
const Scales = () => {
  return (
    <section className={styles.scales}>
      <div className={`container ${styles.scalesWrapper}`}>
        <p className={styles.scalesText}>
          Будем рады, если вам близки наши идеалы, и вы хотие{" "}
          <span className={styles.scalesTextWithUs}>струдничать с нами</span> .
          Для этого нажмите на кнопку ниже, или же перейдите по вкладке
          <span className={styles.scalesTextContacts}>“Контакты”</span>
        </p>
        <Image
          src={scales}
          alt="Для нас одинаково ценны качество и хорошее взаимоотношение"
          className={styles.scalesScaleImg}
        />
        <Image
          src={left}
          alt="Для нас одинаково ценны качество и хорошее взаимоотношение"
          className={styles.scalesLeftImg}
        />
        <Image
          src={right}
          alt="Для нас одинаково ценны качество и хорошее взаимоотношение "
          className={styles.scalesRightImg}
        />
        <span className={styles.scalesLeftText}>Продукция</span>
        <span className={styles.scalesRightText}>Контакты</span>
      </div>
    </section>
  );
};

export default Scales;
