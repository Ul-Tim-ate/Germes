import AboutUs from "../components/main/about-us";
import Delivery from "../components/main/delivery";
import Hands from "../components/main/hands";
import Persons from "../components/main/persons";
import Scales from "../components/main/scales";
import Stand from "../components/main/stand";
import Wellcome from "../components/main/wellcome";
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
      <div className={styles.mainDelivery}>
        <Delivery />
      </div>
      <div className={styles.mainHands}>
        <Hands />
      </div>
      <div className={styles.mainStand}>
        <Stand />
      </div>
      <div className={styles.mainScales}>
        <Scales />
      </div>
    </section>
  );
};

export default Main;
