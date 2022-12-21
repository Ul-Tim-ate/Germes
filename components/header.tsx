import styles from "../styles/header.module.sass";
import Image from "next/image";
import logo from "../public/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div className={`${styles.logo} ${styles.headerLogo}`}>
          <Image src={logo} alt="Логотип компании" width={164} height={157} />
          <span className={styles.logoName}>ГЕРМЕС</span>
        </div>
        <nav className={`${styles.headerNav} ${styles.nav}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Главная</li>
            <li className={styles.navItem}>Продукция</li>
            <li className={styles.navItem}>Акции</li>
            <li className={styles.navItem}>Контакты</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
