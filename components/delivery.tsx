import Image from "next/image";
import React from "react";
import styles from "../styles/delivery.module.sass";
import delivery from "../public/delivery.png";
import truck from "../public/truck.png";

const Delivery = () => {
  return (
    <section className={styles.delivery}>
      <div className={`container ${styles.deliveryWrapper}`}>
        <h2 className={styles.deliveryHeader}>
          Каждый наш шаг совершается с учетом потребностей наших клиентов.
        </h2>
        <Image
          src={delivery}
          alt="Доставка"
          className={styles.deliveryImg}
          placeholder="blur"
        />
        <Image
          src={truck}
          alt="Грузовик доставки"
          className={styles.deliveryTruckImg}
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Delivery;
