import Floors from '../components/Floors';
import styles from './Home.module.scss';
import ElevatorShafts from '../components/ElevatorShafts';

const Home = () => {
  return (
    <div className={styles.root}>
      <ElevatorShafts />
      <Floors />
    </div>
  );
};

export default Home;
