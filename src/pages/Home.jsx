import Floors from '../components/Floors';
import styles from './Home.module.scss';
import ElevatorShafts from '../components/ElevatorShafts';
import { useState } from 'react';

const Home = () => {
  const [activeFloor, setActiveFloor] = useState('1');

  return (
    <div className={styles.root}>
      <ElevatorShafts activeFloor={activeFloor} />
      <Floors
        activeFloor={activeFloor}
        setActiveFloor={setActiveFloor}
      />
    </div>
  );
};

export default Home;
