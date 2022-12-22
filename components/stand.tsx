import Image from "next/image";
import React from "react";
import styles from "../styles/stand.module.sass";
import stand from "../public/stand.png";

const Stand = () => {
  return (
    <section className={styles.stand}>
      <div className={`container ${styles.standWrapper}`}>
        <p className={styles.standText}>
          Мы видим прекрасное будущее, в котором наши партнеры уверенны в нас, а
          мы в них. Где мы производим самый качественный товар, а наш коллектив
          - одна большая семья, которая становится больше с каждым днём.
        </p>
        <Image
          src={stand}
          alt="Вместе мы команда"
          className={styles.standImg}
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Stand;
