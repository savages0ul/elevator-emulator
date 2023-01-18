import styles from './ElevatorShafts.module.scss';
import { dataElevators } from '../../data/elevators';
import LiftShaft from '../LiftShaft';

const ElevatorShafts = () => {
  return (
    <div className={styles.root}>
      {dataElevators.map((elevator) => (
        <LiftShaft key={elevator.id} />
      ))}
    </div>
  );
};

export default ElevatorShafts;
