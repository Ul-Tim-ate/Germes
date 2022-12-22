import Image from "next/image";
import styles from "../styles/footer.module.sass";
import logo from "../public/white-logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={`${styles.logo} ${styles.footerLogo}`}>
          <Image src={logo} alt="Логотип компании" width={164} height={157} />
          <span className={styles.logoName}>ГЕРМЕС</span>
        </div>
        <p className={styles.footerRights}>
          © 2022–2023. ООО «ТПК ГЕРМЕС». <br /> Все права защищены. При
          использовании материалов ссылка на данный сайт обязательна.
        </p>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            <li className={styles.footerNavItem}>Главная</li>
            <li className={styles.footerNavItem}>Продукция</li>
            <li className={styles.footerNavItem}>Акция</li>
            <li className={styles.footerNavItem}>Контакты</li>
          </ul>
        </nav>
        <section className={styles.footerContacts}>
          <ul className={styles.footerContactsList}>
            <li className={styles.footerContactsItem}>
              <span className={styles.footerContactsItemKey}>Телефон:</span>
              <span className={styles.footerContactsItemValue}>
                +79272711655
              </span>
            </li>
            <li className={styles.footerContactsItem}>
              <span className={styles.footerContactsItemKey}>E-mail:</span>
              <span className={styles.footerContactsItemValue}>
                tgkgermess@gmail.com
              </span>
            </li>
            <li className={styles.footerContactsItem}>
              <span className={styles.footerContactsItemKey}>Адрес:</span>
              <span
                className={`${styles.footerContactsItemValue} ${styles.footerContactsItemAdress}`}
              >
                433503, Ульяновская область, <br /> г. Димитровград,
                <br /> ул. Куйбышева, <br /> зд. 30/21, помещ. 2
              </span>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
