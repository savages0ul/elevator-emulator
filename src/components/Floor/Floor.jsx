import styles from './Floor.module.scss';
import clsx from 'clsx';

const Floor = ({ id, name, activeFloor, setActiveFloor }) => {
  const handleChangeFloor = (event) => {
    setActiveFloor(event.target.id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.name}>Этаж №{name}</div>
      <button
        id={id}
        className={clsx(styles.btn, {
          [styles.active]: activeFloor === id,
        })}
        onClick={(event) => handleChangeFloor(event)}
      >
        Вызвать лифт
      </button>
    </div>
  );
};

export default Floor;
