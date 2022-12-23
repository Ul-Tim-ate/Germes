import React from "react";
import styles from "../../styles/wellcome.module.sass";

const Wellcome = () => {
  return (
    <div className={styles.wellcome}>
      <div className="container">
        <div className={styles.wellcomeText}>
          Мы - <h1 className={styles.wellcomeHeader}>ООО “ТПК ГЕРМЕС” </h1>
          <br />
          Производство по вакуумной металлизации, порошковой покраске и другим
          видам деятельности
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
