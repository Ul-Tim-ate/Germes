import AboutUs from "../components/about-us";
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
    </section>
  );
};

export default Main;
