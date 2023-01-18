import styles from './LiftShaft.module.scss';
import { dataFloors } from '../../data/floors';
import clsx from 'clsx';

const LiftShaft = ({ activeFloor }) => {
  return (
    <div className={styles.root}>
      {dataFloors.map((floor) => (
        <div
          key={floor.id}
          className={clsx(styles.floor, {
            [styles.active]: activeFloor === floor.id,
          })}
        />
      ))}
    </div>
  );
};

export default LiftShaft;
