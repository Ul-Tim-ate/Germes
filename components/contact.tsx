import React from "react";
import styles from "../styles/contact.module.sass";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={`container ${styles.contactWrapper}`}>
        <h2 className={styles.contactHeader}>
          Если вы решили с нами сотрудничать, или же остались какие-то вопросы
        </h2>
        <ul className={styles.contactList}>
          <li className={styles.contactListItem}>
            <span className={styles.contactListKeyPhone}>
              Вы можете связаться с нами по номеру:
            </span>
            <span className={styles.contactListValuePhone}>+79272711655</span>
          </li>
          <li className={styles.contactListItem}>
            <span className={styles.contactListKeyMail}>
              Также вы можете написать на нашу почту:
            </span>
            <span className={styles.contactListValueMail}>
              tgkgermess@gmail.com
            </span>
          </li>
          <li
            className={`${styles.contactListItem} ${styles.contactListItemAdress}`}
          >
            <span className={styles.contactListKeyAdress}>
              Мы работаем по адресу:
            </span>
            <span className={styles.contactListValueAdress}>
              433503, Ульяновская область, г. Димитровград, ул. Куйбышева, зд.
              30/21, помещ. 2
            </span>
          </li>
        </ul>
        <section className={styles.contactMap}>
          <h3 className={styles.contactMapHeader}>Мы находимся здесь</h3>
          <div className={styles.contactMapInfo}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac984047b836cd7d797a040cbf2809a511cbc94a436fa7ffed87b8a4066e90e34&amp;source=constructor"
              width="100%"
              height="800"
            ></iframe>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
