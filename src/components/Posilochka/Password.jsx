import styles from './Posilka.module.css';

function Password({ setAccess }) {
  function checkRightPassword(event) {
    if (event.target.value === 'СЧАСТЬЕ') {
      setAccess(1);
    }
  }

  return (
    <div className={styles.password}>
      <h2>Ну а тут нужин парол!</h2>
      <input
        placeholder="Парол..."
        onChange={(event) => checkRightPassword(event)}
      />
    </div>
  );
}

export default Password;
