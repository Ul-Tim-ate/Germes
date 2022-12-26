import styles from "../../styles/header.module.sass";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div className={`${styles.logo} ${styles.headerLogo}`}>
          <Image src={logo} alt="Логотип компании" width={164} height={157} />
          <span className={styles.logoName}>ГЕРМЕС</span>
        </div>
        <nav className={`${styles.headerNav} ${styles.nav}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href={"/"} className={styles.navText}>
                <span className={pathname === "/" ? styles.active : ""}>
                  Главная
                </span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href={"/products/vacuum-plating"}
                className={styles.navText}
              >
                <span
                  className={
                    pathname === "/products/vacuum-plating" ||
                    pathname === "/products/plasma-cutting" ||
                    pathname === "/products/powder-coating"
                      ? styles.active
                      : ""
                  }
                >
                  Продукция
                </span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={"/stocks"} className={styles.navText}>
                <span className={pathname === "/stocks" ? styles.active : ""}>
                  Акции
                </span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={"/contacts"} className={styles.navText}>
                <span className={pathname === "/contacts" ? styles.active : ""}>
                  Контакты
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
