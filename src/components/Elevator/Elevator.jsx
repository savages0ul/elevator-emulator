import styles from './Elevator.module.scss';

const Elevator = ({ activeFloor }) => {
  return (
    <div
      style={activeFloor === '1' ? { bottom: 1 } : { bottom: 150 * Number(activeFloor) - 150 }}
      className={styles.root}
    />
  );
};

export default Elevator;
