import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "../../styles/product-advan.module.sass";

interface ProductAdvanProps {
  setAdvan: Dispatch<SetStateAction<boolean>>;
  advan: boolean;
}

const ProductAdvan: FC<ProductAdvanProps> = ({ advan, setAdvan }) => {
  return (
    <section
      className={`${styles.productAdvan} ${advan ? styles.advanClass : ""}`}
    >
      <div className={styles.productAdvanWrapper}>
        <h2 className={styles.productAdvanHeader}>Преимущества</h2>
        <ul className={styles.productAdvanList}>
          <ul className={styles.productAdvanListColumn}>
            <li className={styles.productAdvanListColumnItem}>
              Получение слоя оксидов, нитридов, карбидов, интерметаллидов
            </li>
            <li className={styles.productAdvanListColumnItem}>
              Получение покрытий толщиной до 10…15 мкм
            </li>
            <li className={styles.productAdvanListColumnItem}>
              Получение многослойных покрытий с высокой адгезионной стойкостью
            </li>
            <li className={styles.productAdvanListColumnItem}>
              Изделие не требует дополнительной финишной операции после
              напыления
            </li>
            <li className={styles.productAdvanListColumnItem}>
              Технология позволяет получать тонкие слои из различных материалов
            </li>
            <li className={styles.productAdvanListColumnItem}>
              экологическая чистота процесса
            </li>
          </ul>
          <ul className={styles.productAdvanListColumn}>
            <li className={styles.productAdvanListColumnItem}>
              Достаточно высокая производительность. Системы на основе
              вакуумно-дугового испарения материалов обеспечивают скорости
              осаждения до 2…3 мкм/мин
            </li>
            <li className={styles.productAdvanListColumnItem}>
              Широкий выбор состава покрытий
            </li>
            <li className={styles.productAdvanListColumnItem}>
              Адгезия покрытия к материалу подложки в 1,5…2 раза выше, чем при
              гальваническом нанесении покрытия
            </li>
            <li className={styles.productAdvanListColumnItem}>
              Высокая твердость и коррозионная стойкость напыленного слоя
            </li>
            <li className={styles.productAdvanListColumnItem}>
              Отсутствие скрытой пористости
            </li>
          </ul>
        </ul>
        <button
          className={styles.productAdvanClose}
          onClick={() => {
            setAdvan(false);
          }}
        >
          закрыть
        </button>
      </div>
    </section>
  );
};

export default ProductAdvan;
