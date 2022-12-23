import React from "react";
import styles from "../../styles/person.module.sass";

const Persons = () => {
  return (
    <section className={styles.persons}>
      <div className={`container ${styles.personsWrapper}`}>
        <h3 className={styles.personsHeader}>
          Наш штат не велик, но дела более чем
        </h3>
        <p className={styles.personsDescription}>
          Всего в компании работает % человек, но, как и в работе, мы всегда
          старались делать упор на качество, а не на количество. Поэтому у нас
          работают только самые трудолюбивые и квалифицированные сотрудник, а
          также в коллективе всегда преобладает дружелюбная атмосфера и
          понимание.
        </p>
        <span className={styles.personsThank}>А все благодаря:</span>
        <ul className={styles.personsList}>
          <li className={styles.personsListItem}>
            <span className={styles.personsListItemName}>
              Чикалёв Александр Петрович
            </span>
            <div className={styles.personsListItemImg}></div>
            <ul className={styles.personsListItemAdvan}>
              <li className={styles.personsListItemAdvanItem}>Основатель </li>
              <li className={styles.personsListItemAdvanItem}>Владелец</li>
              <li className={styles.personsListItemAdvanItem}>
                Генеральный директор
              </li>
            </ul>
          </li>
          <li className={styles.personsListItem}>
            <span className={styles.personsListItemName}>
              Фёдоров Игорь Валерьевич
            </span>
            <div className={styles.personsListItemImg}></div>
            <ul className={styles.personsListItemAdvan}>
              <li className={styles.personsListItemAdvanItem}>
                Глава производства
              </li>
              <li className={styles.personsListItemAdvanItem}>
                Главный технический специалист
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Persons;
