import styles from './LiftShaft.module.scss';
import { dataFloors } from '../../data/floors';

const LiftShaft = () => {
  return (
    <div className={styles.root}>
      {dataFloors.map((floor) => (
        <div
          key={floor.id}
          className={styles.floor}
        />
      ))}
    </div>
  );
};

export default LiftShaft;
