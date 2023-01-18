import styles from './Floor.module.scss';

const Floor = ({ name }) => {
  return (
    <div className={styles.root}>
      <div className={styles.name}>Этаж №{name}</div>
      <button className={styles.btn}>Вызвать лифт</button>
    </div>
  );
};

export default Floor;
