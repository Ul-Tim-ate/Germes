import AboutUs from "../components/about-us";
import Persons from "../components/persons";
import Wellcome from "../components/wellcome";
import styles from "../styles/main.module.sass";

const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.mainWellcome}>
        <Wellcome />
      </div>
      <div className={styles.mainAboutUs}>
        <AboutUs />
      </div>
      <div className={styles.mainPersons}>
        <Persons />
      </div>
    </section>
  );
};

export default Main;
