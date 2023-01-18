import styles from './Floors.module.scss';
import { dataFloors } from '../../data/floors';
import Floor from '../Floor';

const Floors = () => {
  return (
    <div className={styles.root}>
      {dataFloors.map((floor) => (
        <Floor
          key={floor.id}
          {...floor}
        />
      ))}
    </div>
  );
};

export default Floors;
