import styles from './LiftShaft.module.scss';
import { dataFloors } from '../../data/floors';
import Elevator from '../Elevator';

const LiftShaft = ({ activeFloor }) => {
  return (
    <div className={styles.root}>
      {dataFloors.map((floor) => (
        <div
          key={floor.id}
          className={styles.floor}
        />
      ))}
      <Elevator activeFloor={activeFloor} />
    </div>
  );
};

export default LiftShaft;
