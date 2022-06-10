import type { NextPage } from "next";
import LandingScreen from "../components/LandingScreen";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main_screen}>
        <LandingScreen />
        </div>
        
      </div>

      <footer className={styles.footer}>&copy;vaishmano_2022_june</footer>
    </div>
  );
};

export default Home;
