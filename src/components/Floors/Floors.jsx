import styles from './Floors.module.scss';
import { dataFloors } from '../../data/floors';
import Floor from '../Floor';

const Floors = ({ activeFloor, setActiveFloor }) => {
  return (
    <div className={styles.root}>
      {dataFloors.map((floor) => (
        <Floor
          key={floor.id}
          activeFloor={activeFloor}
          setActiveFloor={setActiveFloor}
          {...floor}
        />
      ))}
    </div>
  );
};

export default Floors;
